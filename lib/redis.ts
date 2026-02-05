import Redis from 'ioredis'

const getRedis = () => {
  if (process.env.REDIS_URL) {
    return new Redis(process.env.REDIS_URL)
  }
  // Fallback for local development if REDIS_URL is not set
  return new Redis()
}

// Global variable to cache the client in development
declare global {
  var redis: Redis | undefined
}

const redis = global.redis || getRedis()

if (process.env.NODE_ENV !== 'production') {
  global.redis = redis
}

export default redis
