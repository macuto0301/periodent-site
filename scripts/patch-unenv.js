import fs from 'fs'
import path from 'path'

const root = process.cwd()
const srcDir = path.join(root, 'node_modules', 'unenv', 'dist', 'runtime', 'mock')
const destDir = path.join(root, 'node_modules', 'unenv', 'dist', 'runtime', 'runtime', 'mock')

try {
  if (!fs.existsSync(srcDir)) {
    console.warn('[patch-unenv] Source directory not found, skipping')
    process.exit(0)
  }

  fs.mkdirSync(destDir, { recursive: true })

  const files = ['empty.mjs', 'noop.mjs', 'proxy.mjs', 'empty.d.mts', 'noop.d.mts', 'proxy.d.mts']
  for (const file of files) {
    const from = path.join(srcDir, file)
    const to = path.join(destDir, file)
    if (fs.existsSync(from)) {
      fs.copyFileSync(from, to)
      console.log(`[patch-unenv] Patched ${file}`)
    }
  }
} catch (err) {
  console.error('[patch-unenv] Failed:', err)
  process.exit(1)
}
