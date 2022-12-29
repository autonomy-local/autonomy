import { test, expect } from '@playwright/test';

test('root page health check', async ({page}) => {
  await page.goto('https://local-autonomy.web.app/');

  await expect(page).toHaveURL(/.*nx/);

})