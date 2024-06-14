import { test, expect } from '@playwright/test';
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getGeolocation() {
  const response = await axios.get('https://ipinfo.io/json');
  const [latitude, longitude] = response.data.loc.split(',').map(Number);
  return { latitude, longitude };
}

async function loginTalenta(page, context) {
  const { latitude, longitude } = await getGeolocation();

  console.log('latitude', latitude);
  console.log('longitude', longitude);

  await context.setGeolocation({ latitude, longitude });
  await context.grantPermissions(['geolocation']);

  await page.goto('https://account.mekari.com/users/sign_in?client_id=TAL-73645&return_to=L2F1dGg_Y2xpZW50X2lkPVRBTC03MzY0NSZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9c3NvOnByb2ZpbGU%3D');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(process.env.EMAIL);
  await page.getByLabel('Password').fill(process.env.PASSWORD);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.locator('a[href="/live-attendance"]')).toBeVisible();
  await page.locator('a[href="/live-attendance"]').click();
}

test('absen masuk',{ tag: '@clockin' }, async ({ page, context }) => {
  await loginTalenta(page, context);

  const clockInSpan = page.locator('span', { hasText: 'Clock In' });
  await expect(clockInSpan).toBeVisible();
  // clockInSpan.click();
});

test('absen keluar',{ tag: '@clockout' }, async ({ page, context }) => {
  await loginTalenta(page, context);

  const clockInSpan = page.locator('span', { hasText: 'Clock Out' });
  await expect(clockInSpan).toBeVisible();
  clockInSpan.click();
});