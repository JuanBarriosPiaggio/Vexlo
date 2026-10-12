import { mkdir, readFile, writeFile } from 'fs/promises'
import path from 'path'
import { randomUUID } from 'crypto'
import { dataDir } from '@/lib/data-dir'
import {
  emptyAdmin,
  emptyClient,
  type AdminSide,
  type ClientSide,
  type OnboardingRecord,
  type PublicOnboarding,
} from './types'

function filePath() {
  return path.join(dataDir(), 'onboarding.json')
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

function normalize(record: OnboardingRecord): OnboardingRecord {
  return {
    ...record,
    password: record.password ?? null,
  }
}

async function readAll(): Promise<OnboardingRecord[]> {
  try {
    const raw = await readFile(filePath(), 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.map(normalize) : []
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code
    if (code === 'ENOENT') return []
    throw error
  }
}

async function writeAll(records: OnboardingRecord[]) {
  await mkdir(dataDir(), { recursive: true })
  await writeFile(filePath(), JSON.stringify(records, null, 2), 'utf8')
}

export function toPublic(record: OnboardingRecord): PublicOnboarding {
  const { passwordHash: _passwordHash, ...rest } = record
  return rest
}

export function forViewer(record: OnboardingRecord, role: 'admin' | 'client'): PublicOnboarding {
  const pub = toPublic(record)
  if (role === 'admin') return pub
  return {
    ...pub,
    password: null,
    admin: {
      ...pub.admin,
      internalNotes: '',
      ghlSubAccount: '',
      ghlLocationId: '',
    },
  }
}

export function slugify(input: string) {
  const slug = input
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
  return slug || `client-${randomUUID().slice(0, 8)}`
}

export async function listClients(): Promise<PublicOnboarding[]> {
  const records = await readAll()
  return records
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .map(toPublic)
}

export async function getClient(slug: string): Promise<OnboardingRecord | null> {
  const records = await readAll()
  return records.find((r) => r.slug === slug) || null
}

export async function createClient(input: {
  businessName: string
  slug?: string
  passwordHash: string
  password: string
  services?: AdminSide['services']
}): Promise<OnboardingRecord> {
  return withLock(async () => {
    const records = await readAll()
    let slug = slugify(input.slug || input.businessName)
    const taken = new Set(records.map((r) => r.slug))
    if (taken.has(slug)) slug = `${slug}-${randomUUID().slice(0, 4)}`

    const now = new Date().toISOString()
    const record: OnboardingRecord = {
      id: randomUUID(),
      slug,
      passwordHash: input.passwordHash,
      password: input.password,
      createdAt: now,
      updatedAt: now,
      clientSubmittedAt: null,
      admin: {
        ...emptyAdmin(),
        services: input.services || [],
        status: 'awaiting_client',
      },
      client: {
        ...emptyClient(),
        businessName: input.businessName,
      },
    }
    records.push(record)
    await writeAll(records)
    return record
  })
}

export async function updateClient(
  slug: string,
  patch: {
    admin?: Partial<AdminSide>
    client?: Partial<ClientSide>
    passwordHash?: string
    password?: string
    markSubmitted?: boolean
  }
): Promise<OnboardingRecord | null> {
  return withLock(async () => {
    const records = await readAll()
    const index = records.findIndex((r) => r.slug === slug)
    if (index === -1) return null
    const current = records[index]
    const next: OnboardingRecord = {
      ...current,
      updatedAt: new Date().toISOString(),
      passwordHash: patch.passwordHash || current.passwordHash,
      password: patch.password !== undefined ? patch.password : current.password,
      admin: patch.admin ? { ...current.admin, ...patch.admin } : current.admin,
      client: patch.client ? { ...current.client, ...patch.client } : current.client,
      clientSubmittedAt: patch.markSubmitted
        ? new Date().toISOString()
        : current.clientSubmittedAt,
    }
    records[index] = next
    await writeAll(records)
    return next
  })
}
