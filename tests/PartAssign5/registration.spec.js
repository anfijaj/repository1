
import { test, expect } from '@playwright/test';
import testdata from '../../testnewdata.json';
console.log(testdata);

test('Registration Form using JSON Data', async ({ page }) => {

    // Navigate to Registration Page
    await page.goto('https://automationteststore.com/index.php?rt=account/create');

    // Enter Registration Details using JSON data
    await page.locator('#AccountFrm_firstname').fill(testdata.firstName);

    await page.locator('#AccountFrm_lastname').fill(testdata.lastName);

    await page.locator('#AccountFrm_email').fill(testdata.email);

    await page.locator('#AccountFrm_telephone').fill(testdata.telephone);

    await page.locator('#AccountFrm_fax').fill(testdata.fax);

    await page.locator('#AccountFrm_company').fill(testdata.company);

    // Verify entered values
    await expect(page.locator('#AccountFrm_firstname')).toHaveValue(testdata.firstName);

    await expect(page.locator('#AccountFrm_lastname')).toHaveValue(testdata.lastName);

    await expect(page.locator('#AccountFrm_email')).toHaveValue(testdata.email);

    await expect(page.locator('#AccountFrm_telephone')).toHaveValue(testdata.telephone);

    await expect(page.locator('#AccountFrm_fax')).toHaveValue(testdata.fax);

    await expect(page.locator('#AccountFrm_company')).toHaveValue(testdata.company);

});
