import { test, expect } from '@playwright/test';

test('root page health check', async ({page}) => {
  await page.goto('https://local-autonomy.web.app/');

  await expect(page).toHaveURL(/.*autonomy/);

  const span = page.locator('.toolbar-title');
  await expect(span).toHaveText('Autonomy');

  const el_home = page.locator('text=Home');
  await expect(el_home).toHaveAttribute('href', '/home');

  const el_about = page.locator('text=About');
  await expect(el_about).toHaveAttribute('href', '/about');

  const el_product = page.locator('text=Product');
  await expect(el_product).toHaveAttribute('href', '/product');

  const el_contribute = page.locator('text=Contribute');
  await expect(el_product).toHaveAttribute('href', '/contribute');
})