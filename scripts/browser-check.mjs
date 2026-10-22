import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '../.qa/node_modules/playwright-core');
const browser = await chromium.launch({
  executablePath: process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
});
const root = resolve(import.meta.dirname, '..');
const url = 'http://127.0.0.1:4307/ironcore-showcase/';
await mkdir(resolve(root, '.qa'), { recursive: true });
const errors = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.status() >= 400) errors.push(response.url() + ': ' + response.status());
  });
  const requests = [];
  page.on('request', request => requests.push(request.url()));
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(url);
    await page.locator('#historia').scrollIntoViewIfNeeded();
    await page.locator('#inicio').scrollIntoViewIfNeeded();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'No horizontal overflow at ' + width);
    const captures = page.locator('main [data-image]');
    assert.equal(await captures.count(), 10);
    for (const gallery of await page.locator('[data-gallery]').all()) {
      const count = await gallery.locator('.capture').count();
      for (let i = 0; i < count; i++) {
        assert.equal(await gallery.locator('.capture:visible').count(), 1);
        await gallery.locator('[data-next]').click();
      }
      assert.match(await gallery.locator('.gallery-status').innerText(), /^01/);
      await gallery.locator('[data-prev]').focus();
      await page.keyboard.press('ArrowRight');
      assert.match(await gallery.locator('.gallery-status').innerText(), /^02/);
      await page.keyboard.press('ArrowLeft');
      assert.match(await gallery.locator('.gallery-status').innerText(), /^01/);
      await gallery.locator('.capture:visible [data-image]').focus();
      await page.keyboard.press('ArrowRight');
      assert.equal(await gallery.locator('.capture:visible [data-image]').evaluate(el => el === document.activeElement), true);
      await page.keyboard.press('ArrowLeft');
    }
    const first = captures.first();
    await first.click();
    assert.equal(await page.locator('dialog').evaluate(el => el.open), true);
    assert.equal(await page.locator('[data-close]').evaluate(el => el === document.activeElement), true);
    for (let i = 0; i < 10; i++) {
      await page.locator('.lightbox-image img').evaluate(img => img.decode());
      assert.equal(await page.locator('.lightbox-image img').evaluate(img => img.naturalWidth > 0), true);
      await page.keyboard.press('ArrowRight');
    }
    assert.match(await page.locator('[data-lightbox-caption]').innerText(), /^1 \/ 10/);
    // Native modal must contain tab focus and return it on close.
    for (let i = 0; i < 7; i++) {
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement.closest('dialog') !== null || document.activeElement === document.body), true);
    }
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog').evaluate(el => el.open), false);
    assert.equal(await first.evaluate(el => el === document.activeElement), true);
    await page.locator('nav a[href="#engenharia"]').click();
    assert.equal(new URL(page.url()).hash, '#engenharia');
    await page.locator('#inicio').scrollIntoViewIfNeeded();
    await page.screenshot({ path: resolve(root, '.qa', 'desktop-' + width + '.png'), fullPage: true });
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  assert.equal(await page.evaluate(() => localStorage.length + sessionStorage.length), 0);
  assert.equal((await page.context().cookies()).length, 0);
  assert.equal(requests.every(request => request.startsWith('http://127.0.0.1:4307/')), true, 'No external runtime requests');
  const links = await page.locator('a[href]').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
  for (const href of new Set(links.filter(link => !/^https?:/.test(link)))) {
    if (href.startsWith('#')) {
      assert.equal(await page.locator(href).count(), 1, 'Anchor ' + href);
    } else {
      const response = await page.request.get(new URL(href, url).href);
      assert.equal(response.status(), 200, href);
    }
  }
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const fallback = await context.newPage();
  await fallback.goto(url);
  assert.equal(await fallback.locator('main .capture:visible').count(), 10);
  assert.equal(await fallback.locator('.gallery-controls:visible').count(), 0);
  await context.close();
  const manifest = JSON.parse(await readFile(resolve(root, 'manifesto-imagens.json'), 'utf8'));
  for (const shot of manifest.shots.filter(item => item.state === 'principal')) {
    const source = await readFile(resolve(root, shot.file));
    const packed = await readFile(resolve(root, 'dist', shot.file));
    assert.equal(createHash('sha256').update(source).digest('hex'), createHash('sha256').update(packed).digest('hex'), 'Unchanged PNG: ' + shot.file);
    assert.equal(source.readUInt32BE(16), shot.dimensions[0]);
    assert.equal(source.readUInt32BE(20), shot.dimensions[1]);
  }
  assert.deepEqual(errors, []);
  console.log('PASS: 4 viewports; galleries; 10 lightbox captures; keyboard/focus; anchors; relative assets; no-JS; reduced motion; no external requests/storage; exact PNG copies.');
} finally {
  await browser.close();
}
