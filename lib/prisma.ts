import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Validate MongoDB connection string
const mongoUrl = process.env.MONGO_URL
if (!mongoUrl) {
  throw new Error('MONGO_URL environment variable is not set')
}

// Basic validation for MongoDB connection string format
if (!mongoUrl.startsWith('mongodb://') && !mongoUrl.startsWith('mongodb+srv://')) {
  throw new Error('MONGO_URL must start with mongodb:// or mongodb+srv://')
}

// Check for proper format (should have / before database name or options)
if (mongoUrl.includes('?') && !mongoUrl.match(/\/[^?]*\?/)) {
  console.error('Warning: MONGO_URL may be malformed. Ensure format is: mongodb://host:port/database?options')
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


