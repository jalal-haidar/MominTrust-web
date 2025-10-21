import { test, expect } from '@playwright/test';
import axeSource from 'axe-core/axe.min.js';

test('landing page should have no a11y violations', async ({ page }) => {
  await page.goto('http://localhost:5173');
  // inject axe
  await page.addScriptTag({ content: axeSource });
  const results = await page.evaluate(async () => {
    // @ts-ignore
    return await (window as any).axe.run(document);
  });
  // If violations found, print them for debugging
  if (results.violations && results.violations.length > 0) {
    console.log('Violations:', results.violations.map((v: any) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length })));
  }
  expect(results.violations.length).toBe(0);
});