import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function normalizeMongoUrl(url: string): string {
  if (!url) {
    throw new Error('MONGO_URL environment variable is not set. Please configure it in Railway environment variables.')
  }
  
  // Basic validation for MongoDB connection string format
  if (!url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) {
    throw new Error('MONGO_URL must start with mongodb:// or mongodb+srv://')
  }
  
  // Check if database name is missing and add it
  // Format should be: mongodb://host:port/database or mongodb://host:port/database?options
  // Split by '?' to separate options
  const [baseUrl, options] = url.split('?')
  
  // Check if there's a database name (after the last '/')
  const lastSlashIndex = baseUrl.lastIndexOf('/')
  const afterSlash = baseUrl.substring(lastSlashIndex + 1)
  
  // If there's no database name (empty or just host:port), add default
  if (lastSlashIndex === -1 || afterSlash === '' || afterSlash.includes(':')) {
    const defaultDb = 'vexlo'
    const normalized = `${baseUrl}/${defaultDb}${options ? `?${options}` : ''}`
    console.log(`INFO: Database name missing in MONGO_URL. Using default: ${defaultDb}`)
    return normalized
  }
  
  return url
}

function getPrismaClient(): PrismaClient {
  // Validate and normalize MongoDB connection string
  const rawUrl = process.env.MONGO_URL
  const mongoUrl = normalizeMongoUrl(rawUrl || '')
  
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
  
  if (isBuildPhase || !process.env.MONGO_URL) {
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


