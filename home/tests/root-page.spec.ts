import { test, expect } from '@playwright/test';

test('root page health check', async ({page}) => {
  await page.goto('https://local-autonomy.web.app/');

  await expect(page).toHaveURL(/.*autonomy/);

  const span = page.locator('.toolbar-title');
  await expect(span).toHaveText('Autonomy');

  const el_home = page.locator('.home');
  await expect(el_home).toHaveAttribute('href', '/home');

  const el_about = page.locator('.about');
  await expect(el_about).toHaveAttribute('href', '/about');

  const el_product = page.locator('.product');
  await expect(el_product).toHaveAttribute('href', '/product');

  const el_contribute = page.locator('.contribute');
  await expect(el_product).toHaveAttribute('href', '/contribute');
})