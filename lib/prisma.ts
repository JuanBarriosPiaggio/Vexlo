import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function buildMongoUrl(): string {
  // Try to use MONGO_URL first
  if (process.env.MONGO_URL) {
    return process.env.MONGO_URL
  }
  
  // Otherwise, construct from individual components
  const host = process.env.MONGOHOST
  const port = process.env.MONGOPORT || '27017'
  const user = process.env.MONGOUSER || process.env.MONGO_INITDB_ROOT_USERNAME
  const password = process.env.MONGOPASSWORD || process.env.MONGO_INITDB_ROOT_PASSWORD
  
  if (!host) {
    throw new Error('Either MONGO_URL or MONGOHOST must be set in Railway environment variables.')
  }
  
  // Build connection string
  let url = 'mongodb://'
  
  // Add authentication if credentials are available
  if (user && password) {
    url += `${encodeURIComponent(user)}:${encodeURIComponent(password)}@`
  }
  
  url += `${host}:${port}`
  
  return url
}

function normalizeMongoUrl(url: string): string {
  if (!url) {
    throw new Error('MongoDB connection string is not available. Please configure MONGO_URL or MongoDB connection variables in Railway.')
  }
  
  // Basic validation for MongoDB connection string format
  if (!url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) {
    throw new Error('MongoDB connection string must start with mongodb:// or mongodb+srv://')
  }
  
  // Split by '?' to separate base URL and options
  const [baseUrl, existingOptions] = url.split('?')
  
  // Parse existing options
  const options = new URLSearchParams(existingOptions || '')
  
  // Check if database name is missing
  // Format: mongodb://[user:pass@]host:port[/database][?options]
  const lastSlashIndex = baseUrl.lastIndexOf('/')
  const afterSlash = baseUrl.substring(lastSlashIndex + 1)
  
  // Check if after the last slash is a host:port (contains ':') or empty
  const hasDatabaseName = lastSlashIndex !== -1 && 
                          afterSlash !== '' && 
                          !afterSlash.includes(':') &&
                          !afterSlash.includes('@')
  
  let normalized = baseUrl
  
  // Add database name if missing
  if (!hasDatabaseName) {
    const defaultDb = 'vexlo'
    normalized = `${baseUrl}/${defaultDb}`
    console.log(`INFO: Database name missing. Added: ${defaultDb}`)
  }
  
  // Add authSource if authentication is present and authSource is not specified
  // This is needed for Railway MongoDB with root user
  if (normalized.includes('@') && !options.has('authSource')) {
    options.set('authSource', 'admin')
    console.log('INFO: Added authSource=admin for authentication')
  }
  
  // Add directConnection to avoid replica set requirement for simple operations
  if (!options.has('directConnection')) {
    options.set('directConnection', 'true')
    console.log('INFO: Added directConnection=true to avoid replica set requirement')
  }
  
  // Reconstruct URL with options
  const optionsString = options.toString()
  return optionsString ? `${normalized}?${optionsString}` : normalized
}

function getPrismaClient(): PrismaClient {
  // Build MongoDB connection string from available variables
  const rawUrl = buildMongoUrl()
  const mongoUrl = normalizeMongoUrl(rawUrl)
  
  // Additional validation
  if (mongoUrl.includes('?') && !mongoUrl.match(/\/[^?]+\?/)) {
    console.error('WARNING: MONGO_URL may be malformed. Expected format: mongodb://host:port/database?options')
  }

  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: mongoUrl,
      },
    },
  })
}

// Lazy initialization - only create client when accessed, not at module load time
// This prevents build-time errors when MONGO_URL is not available
let prismaInstance: PrismaClient | null = null

function getPrisma(): PrismaClient {
  // Skip initialization during build phase
  const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build' || 
                       process.env.NEXT_PHASE === 'phase-development-build'
  
  // Check if we have either MONGO_URL or the components to build it
  const hasMongoConfig = process.env.MONGO_URL || process.env.MONGOHOST
  
  if (isBuildPhase || !hasMongoConfig) {
    // During build, return a no-op client
    // This will be replaced at runtime when MONGO_URL is available
    if (!prismaInstance) {
      prismaInstance = {} as PrismaClient
    }
    return prismaInstance
  }
  
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }
  
  if (!prismaInstance) {
    prismaInstance = getPrismaClient()
    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = prismaInstance
    }
  }
  
  return prismaInstance
}

// Export a getter function instead of direct initialization
export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop) {
    const client = getPrisma()
    const value = (client as any)[prop]
    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  }
})


