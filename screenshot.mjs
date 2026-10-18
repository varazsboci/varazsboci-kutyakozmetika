import { chromium } from 'playwright-core';

const pages = [
  { url: 'http://localhost:3000/', file: '/tmp/home.png' },
  { url: 'http://localhost:3000/galeria', file: '/tmp/galeria.png' },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const p of pages) {
  await page.goto(p.url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: p.file, fullPage: true });
}

// mobile screenshot of home
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/home-mobile.png', fullPage: true });

await browser.close();
console.log('done');
