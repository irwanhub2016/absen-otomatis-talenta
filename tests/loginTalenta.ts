import { Page, BrowserContext, test, expect } from '@playwright/test';
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getGeolocation() {
    const response = await axios.get('https://ipinfo.io/json');
    const [latitude, longitude] = response.data.loc.split(',').map(Number);
    return { latitude, longitude };
}

export async function loginTalenta(page: Page, context: BrowserContext) {
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

test('Verify locator',{ tag: '@locator' }, async ({ page }, testInfo) => {
    await page.goto('https://demoblaze.com');
    await expect(page.locator('[data-target="#logInModal"]')).toBeVisible();
    await page.click('[data-target="#logInModal123"]')

    await page.fill('#loginusername', 'admin')
    await page.fill('#loginpassword', 'admin')

    await page.click("//button[@onclick='logIn()']")

    // await testInfo.attach('dashboard', {
    //     body: await page.screenshot(),
    //     contentType: "image/png"
    // })

    // await expect(page.locator('a', { hasText: 'Welcome admin' })).toBeVisible();
    await expect(page.locator('text=Welcome ondel-ondel')).toBeVisible();

    const links = await page.$$('a');
    for (const link of links){
        const linkText = await link.textContent();
        if (linkText && linkText.includes('Nokia lumia 1520')) {
            console.log(linkText)
            await link.click();
            break;
        }
    }
});