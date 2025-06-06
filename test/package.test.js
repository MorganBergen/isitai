const assert = require('node:assert');
const test = require('node:test');
const fs = require('node:fs/promises');
const path = require('node:path');

test('package name is isitai', async () => {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  const pkgContent = await fs.readFile(pkgPath, 'utf8');
  const pkg = JSON.parse(pkgContent);
  assert.strictEqual(pkg.name, 'isitai');
});
