import {expect, test} from '@playwright/test';

test.describe.parallel('@business page', () => {

  test.beforeEach(async ({page, context, baseURL}) => {
  });

  test('check autofill postal address', async ({page}) => {
  });

  test('check autofill2', async ({page}) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });


})

