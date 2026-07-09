import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')

for (const name of ['portfolio-fyrup', 'portfolio-tenanclean']) {
  const src = join(dir, `${name}.png`)
  const out = join(dir, `${name}.webp`)
  const info = await sharp(src).resize({ width: 800 }).webp({ quality: 80 }).toFile(out)
  console.log(`${name}.webp: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`)
}
