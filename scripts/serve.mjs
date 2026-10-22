import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { publicFiles } from './package.mjs';

const prefix = '/ironcore-showcase/';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.md': 'text/plain; charset=utf-8' };
const server = createServer(async (request, response) => {
  const path = new URL(request.url, 'http://localhost').pathname;
  if (path === '/' || path === '/ironcore-showcase') {
    response.writeHead(302, { Location: prefix }).end();
    return;
  }
  const file = path.startsWith(prefix) ? path.slice(prefix.length) || 'index.html' : '';
  if (!publicFiles.includes(file)) {
    response.writeHead(404).end('Not found');
    return;
  }
  try {
    const content = await readFile(resolve(import.meta.dirname, '../dist', file));
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(content);
  } catch {
    response.writeHead(404).end('Not found');
  }
});
server.listen(4307, '127.0.0.1', () => console.log('http://127.0.0.1:4307/ironcore-showcase/'));
