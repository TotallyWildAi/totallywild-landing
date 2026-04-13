import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

const urls = JSON.parse(process.argv[2]);
const viewports = JSON.parse(process.argv[3]);
const outDir = process.argv[4];

const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

// Force light color scheme so screenshots show day mode
// regardless of the host system's dark mode preference.
await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'light' }
]);

for (const urlDef of urls) {
    for (const vp of viewports) {
        await page.setViewport({ width: vp.width, height: vp.height });
        try {
            await page.goto(urlDef.url, { waitUntil: 'networkidle0', timeout: 15000 });
            await new Promise(r => setTimeout(r, 500));
            const filename = `${outDir}/${urlDef.name}-${vp.width}x${vp.height}.png`;
            await page.screenshot({ path: filename, fullPage: true });
            console.log(`Captured: ${filename}`);
        } catch (err) {
            console.error(`Failed ${urlDef.name} at ${vp.width}x${vp.height}: ${err.message}`);
        }
    }
}

await browser.close();
