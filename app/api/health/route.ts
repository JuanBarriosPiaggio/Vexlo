import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

export async function GET() {
  try {
    // Check if we have MongoDB configuration
    const hasMongoConfig = process.env.MONGO_URL || process.env.MONGOHOST
    if (!hasMongoConfig) {
      return NextResponse.json(
        { status: 'unhealthy', error: 'MongoDB configuration not set' },
        { status: 503 }
      )
    }

    // Check database connection (MongoDB)
    const db = await getDb()
    await db.admin().ping()
    
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


