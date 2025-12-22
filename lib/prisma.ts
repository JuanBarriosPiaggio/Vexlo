import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Validate MongoDB connection string
const mongoUrl = process.env.MONGO_URL
if (!mongoUrl) {
  console.error('ERROR: MONGO_URL environment variable is not set')
} else {
  // Basic validation for MongoDB connection string format
  if (!mongoUrl.startsWith('mongodb://') && !mongoUrl.startsWith('mongodb+srv://')) {
    console.error('ERROR: MONGO_URL must start with mongodb:// or mongodb+srv://')
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
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: mongoUrl,
      },
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


