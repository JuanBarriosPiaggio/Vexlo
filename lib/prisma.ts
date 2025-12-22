import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient {
  // Validate MongoDB connection string
  const mongoUrl = process.env.MONGO_URL
  
  if (!mongoUrl) {
    throw new Error('MONGO_URL environment variable is not set. Please configure it in Railway environment variables.')
  }
  
  // Basic validation for MongoDB connection string format
  if (!mongoUrl.startsWith('mongodb://') && !mongoUrl.startsWith('mongodb+srv://')) {
    throw new Error('MONGO_URL must start with mongodb:// or mongodb+srv://')
  }
  
  // Check for proper format (should have / before database name or options)
  // Format should be: mongodb://host:port/database or mongodb://host:port/database?options
  if (mongoUrl.includes('?') && !mongoUrl.match(/\/[^?]*\?/)) {
    console.error('WARNING: MONGO_URL may be malformed. Expected format: mongodb://host:port/database?options')
    console.error('Current MONGO_URL format appears incorrect. Please check Railway environment variables.')
  }
  
  // Check if database name is included
  const urlParts = mongoUrl.split('/')
  if (urlParts.length < 4 || (urlParts[3] && urlParts[3].split('?')[0].trim() === '')) {
    console.error('WARNING: MONGO_URL may be missing database name. Format should be: mongodb://host:port/database')
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
export const prisma: PrismaClient = (() => {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }
  
  // Only initialize if we're in runtime (not during build)
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'test') {
    try {
      const client = getPrismaClient()
      if (process.env.NODE_ENV !== 'production') {
        globalForPrisma.prisma = client
      }
      return client
    } catch (error) {
      // During build time, return a mock client that will fail gracefully
      if (process.env.NEXT_PHASE === 'phase-production-build') {
        return {} as PrismaClient
      }
      throw error
    }
  }
  
  return {} as PrismaClient
})()


