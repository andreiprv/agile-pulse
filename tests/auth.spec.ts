import { test, expect } from '@playwright/test';

test.describe.serial('Authentication', () => {
  const email = `testuser_${Date.now()}@example.com`;
  const password = 'password123';

  test('should allow a user to sign up', async ({ page }) => {
    await page.goto('/sign-up');

    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/');
  });

  test('should allow a user to sign in', async ({ page }) => {
    await page.goto('/sign-in');

    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/');
  });
});