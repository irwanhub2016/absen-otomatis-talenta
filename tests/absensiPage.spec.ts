import { test, expect } from '@playwright/test';
import { loginTalenta } from './loginTalenta';

test('absen masuk',{ tag: '@clockin' }, async ({ page, context }) => {
  await loginTalenta(page, context);

  const clockInSpan = page.locator('span', { hasText: 'Clock In' });
  await expect(clockInSpan).toBeVisible();
  clockInSpan.click();
  await page.waitForTimeout(3000);
});

test('absen keluar',{ tag: '@clockout' }, async ({ page, context }) => {
  await loginTalenta(page, context);

  const clockOutSpan = page.locator('span', { hasText: 'Clock Out' });
  await expect(clockOutSpan).toBeVisible();
  clockOutSpan.click();
  await page.waitForTimeout(3000);
});