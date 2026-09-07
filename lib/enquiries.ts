import { mkdir, readFile, writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'
import { randomUUID } from 'crypto'
import type { EnquiryFormData } from './validations'

export type EnquiryRecord = Omit<EnquiryFormData, 'companyName'> & {
  id: string
  companyName: string | null
  submittedAt: string
}

function dataDir() {
  return process.env.DATA_DIR || path.join(tmpdir(), 'vexlo')
}

function filePath() {
  return path.join(dataDir(), 'enquiries.json')
}

let writeQueue: Promise<unknown> = Promise.resolve()

function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(fn, fn)
  writeQueue = run.then(
    () => undefined,
    () => undefined
  )
  return run
}

async function readAll(): Promise<EnquiryRecord[]> {
  try {
    const raw = await readFile(filePath(), 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code
    if (code === 'ENOENT') return []
    throw error
  }
}

export async function saveEnquiry(data: EnquiryFormData): Promise<EnquiryRecord> {
  return withLock(async () => {
    await mkdir(dataDir(), { recursive: true })
    const records = await readAll()
    const record: EnquiryRecord = {
      id: randomUUID(),
      fullName: data.fullName,
      email: data.email,
      industryType: data.industryType,
      companyName: data.companyName || null,
      message: data.message,
      submittedAt: new Date().toISOString(),
    }
    records.push(record)
    await writeFile(filePath(), JSON.stringify(records, null, 2), 'utf8')
    return record
  })
}

export async function checkEnquiryStore() {
  await mkdir(dataDir(), { recursive: true })
  const probe = path.join(dataDir(), '.write-check')
  await writeFile(probe, 'ok', 'utf8')
  return { path: filePath() }
}
