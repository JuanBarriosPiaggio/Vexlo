import path from 'path'

export function dataDir() {
  if (process.env.DATA_DIR) return process.env.DATA_DIR
  if (process.env.NODE_ENV === 'production') return '/data'
  return path.join(process.cwd(), 'data')
}
