import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Check if MONGO_URL is set
    if (!process.env.MONGO_URL) {
      return NextResponse.json(
        { status: 'unhealthy', error: 'MONGO_URL environment variable not set' },
        { status: 503 }
      )
    }

    // Check database connection (MongoDB)
    await prisma.$runCommandRaw({ ping: 1 })
    
    return NextResponse.json(
      { status: 'healthy', timestamp: new Date().toISOString() },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Database connection failed'
    console.error('Health check failed:', errorMessage)
    
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: errorMessage.includes('connection string') 
          ? 'Invalid MongoDB connection string format' 
          : 'Database connection failed' 
      },
      { status: 503 }
    )
  }
}


