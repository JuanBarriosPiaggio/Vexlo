import { NextResponse } from 'next/server'

// Mark as dynamic to prevent build-time execution
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  // Lazy import MongoDB to avoid build-time execution
  const { getDb } = await import('@/lib/mongodb')
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


