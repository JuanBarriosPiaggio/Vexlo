import { MongoClient, Db } from 'mongodb'

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient>

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
    throw new Error('MongoDB connection string is not available.')
  }
  
  // Basic validation
  if (!url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) {
    throw new Error('MongoDB connection string must start with mongodb:// or mongodb+srv://')
  }
  
  // Split by '?' to separate base URL and options
  const [baseUrl, existingOptions] = url.split('?')
  
  // Parse existing options
  const options = new URLSearchParams(existingOptions || '')
  
  // Check if database name is missing
  const lastSlashIndex = baseUrl.lastIndexOf('/')
  const afterSlash = baseUrl.substring(lastSlashIndex + 1)
  
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
  
  // Add authSource if authentication is present
  if (normalized.includes('@') && !options.has('authSource')) {
    options.set('authSource', 'admin')
    console.log('INFO: Added authSource=admin for authentication')
  }
  
  // Add directConnection to avoid replica set requirement
  if (!options.has('directConnection')) {
    options.set('directConnection', 'true')
    console.log('INFO: Added directConnection=true')
  }
  
  // Reconstruct URL with options
  const optionsString = options.toString()
  return optionsString ? `${normalized}?${optionsString}` : normalized
}

function getMongoUrl(): string {
  const rawUrl = buildMongoUrl()
  return normalizeMongoUrl(rawUrl)
}

// Use a global variable to preserve the client across hot reloads in development
const globalWithMongo = global as typeof globalThis & {
  _mongoClient?: MongoClient
  _mongoClientPromise?: Promise<MongoClient>
}

function getClientPromise(): Promise<MongoClient> {
  // Skip initialization during build phase
  const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build' || 
                       process.env.NEXT_PHASE === 'phase-development-build'
  
  if (isBuildPhase) {
    // Return a promise that will fail gracefully if accessed during build
    return Promise.reject(new Error('MongoDB client not available during build phase'))
  }
  
  if (!globalWithMongo._mongoClientPromise) {
    try {
      const url = getMongoUrl()
      client = new MongoClient(url)
      globalWithMongo._mongoClientPromise = client.connect()
    } catch (error) {
      // If MONGO_URL is not set, create a promise that will fail at runtime
      globalWithMongo._mongoClientPromise = Promise.reject(
        error instanceof Error ? error : new Error('Failed to initialize MongoDB client')
      )
    }
  }
  return globalWithMongo._mongoClientPromise
}

clientPromise = getClientPromise()

export async function getDb(): Promise<Db> {
  const client = await getClientPromise()
  // Extract database name from connection string
  const url = getMongoUrl()
  const dbName = url.split('/').pop()?.split('?')[0] || 'vexlo'
  return client.db(dbName)
}

export default getClientPromise()

