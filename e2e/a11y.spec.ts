import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('landing page should have no a11y violations (axe)', async ({ page }) => {
  // log browser console and errors to help debugging
  page.on('console', (msg) => {
    // eslint-disable-next-line no-console
    console.log(`[page][console] ${msg.type()}: ${msg.text()}`);
  });
  page.on('pageerror', (err) => {
    // eslint-disable-next-line no-console
    console.error('[page][error]', err);
  });

  await page.goto('/');
  // Wait for main content and primary heading to ensure async components are loaded
  await page.waitForSelector('main', { timeout: 5000 });
  await page.waitForSelector('h1', { timeout: 5000 });
  const axePath = path.join(process.cwd(), 'node_modules', 'axe-core', 'axe.min.js');
  if (!fs.existsSync(axePath)) throw new Error(`axe not found at ${axePath}`);
  await page.addScriptTag({ path: axePath });
  // run axe in the page context
  const results = await page.evaluate(async () => {
    // @ts-ignore
    return await (window as any).axe.run(document);
  });

  if (results.violations && results.violations.length > 0) {
    // log helpful summary for debugging
    // eslint-disable-next-line no-console
    console.log('Accessibility violations:');
    // eslint-disable-next-line no-console
    results.violations.forEach((v: any) => {
      // eslint-disable-next-line no-console
      console.log(`- ${v.id} (${v.impact}) - nodes: ${v.nodes.length}`);
      v.nodes.forEach((n: any, i: number) => {
        // eslint-disable-next-line no-console
        console.log(`  node ${i}:`, n.target, '\n', n.html);
      });
    });
  }

  expect(results.violations.length).toBe(0);
});
