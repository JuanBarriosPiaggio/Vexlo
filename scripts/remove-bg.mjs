import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(__dirname, '..', 'public', 'vexlo_logo.png')
const tmp = join(__dirname, '..', 'public', 'vexlo_logo_tmp.png')

const { data, info } = await sharp(src)
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const rgba = Buffer.alloc(width * height * 4)

// Threshold: pixels where R,G,B are all <= 18 are pure background black
// Logo dark-grey panels are brighter than this, so they stay opaque
const THRESHOLD = 18

for (let i = 0; i < width * height; i++) {
  const r = data[i * channels]
  const g = data[i * channels + 1]
  const b = data[i * channels + 2]

  rgba[i * 4]     = r
  rgba[i * 4 + 1] = g
  rgba[i * 4 + 2] = b

  if (r <= THRESHOLD && g <= THRESHOLD && b <= THRESHOLD) {
    rgba[i * 4 + 3] = 0   // transparent
  } else {
    rgba[i * 4 + 3] = 255 // opaque
  }
}

await sharp(rgba, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(tmp)

// Swap tmp over the original
import { rename } from 'fs/promises'
await rename(tmp, src)

console.log(`Done — ${width}x${height} RGBA PNG written to public/vexlo_logo.png`)
