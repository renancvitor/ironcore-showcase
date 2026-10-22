import { mkdir, copyFile, readdir, readFile } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';

// Explicit publication boundary: only these files can enter the Pages artifact.
export const publicFiles = [
  'index.html', 'styles.css', 'script.js', '.nojekyll', 'assets/favicon.svg',
  'docs/fontes.md',
  ...JSON.parse(await readFile(new URL('../manifesto-imagens.json', import.meta.url), 'utf8'))
    .shots.filter(shot => shot.state === 'principal').map(shot => shot.file),
];
const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
for (const file of publicFiles) {
  if (!/^(index\.html|styles\.css|script\.js|\.nojekyll|assets\/favicon\.svg|docs\/fontes\.md|assets\/screenshots\/[0-9]{2}-[a-z-]+\.png)$/.test(file)) {
    throw new Error('Unexpected public path: ' + file);
  }
  await mkdir(dirname(resolve(output, file)), { recursive: true });
  await copyFile(resolve(root, file), resolve(output, file));
}
async function audit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await audit(path);
    else if (!publicFiles.includes(relative(output, path).replaceAll('\\', '/'))) {
      throw new Error('Unexpected file in dist; remove it before publishing: ' + path);
    }
  }
}
await audit(output);
console.log('Static artifact ready: dist/ (' + publicFiles.length + ' files). No images transformed.');
