import { Page, BrowserContext, test, expect } from '@playwright/test';
const axios = require('axios');

export async function loginTalenta(page: Page, context: BrowserContext) {
    await page.context().setGeolocation({ latitude: -6.4240331, longitude: 106.7753368 });
    await page.context().grantPermissions(['geolocation']);

    await page.goto('https://openweathermap.org/');

    const locationElement = await page.locator('.current-container.mobile-padding h2');
    const displayedLocation = await locationElement.textContent();
    expect(displayedLocation).toContain('New York');

    console.log("sukses check location")
    await page.waitForTimeout(10000);
}