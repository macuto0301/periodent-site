import fs from 'fs'
import path from 'path'

const root = process.cwd()
const srcDir = path.join(root, 'node_modules', 'unenv', 'dist', 'runtime', 'mock')
const destDir = path.join(root, 'node_modules', 'unenv', 'dist', 'runtime', 'runtime', 'mock')

try {
  if (fs.existsSync(srcDir)) {
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
  }
} catch (err) {
  console.warn('[patch-unenv] Warning:', err)
}

// 2. Patch unenv Process class private fields (#stdin, #stdout, #stderr, #cwd) -> (_stdin, _stdout, _stderr, _cwd)
// to avoid "Uncaught TypeError: Cannot read private member #t from an object whose class did not declare it" in Cloudflare Workers / workerd.
const processFilePath = path.join(root, 'node_modules', 'unenv', 'dist', 'runtime', 'node', 'internal', 'process', 'process.mjs')

try {
  if (fs.existsSync(processFilePath)) {
    let content = fs.readFileSync(processFilePath, 'utf8')
    if (content.includes('#stdout')) {
      content = content
        .replaceAll('#stdin', '_stdin')
        .replaceAll('#stdout', '_stdout')
        .replaceAll('#stderr', '_stderr')
        .replaceAll('#cwd', '_cwd')
      fs.writeFileSync(processFilePath, content, 'utf8')
      console.log('[patch-unenv] Patched Process private fields in process.mjs')
    }
  }
} catch (err) {
  console.warn('[patch-unenv] Warning process.mjs:', err)
}
