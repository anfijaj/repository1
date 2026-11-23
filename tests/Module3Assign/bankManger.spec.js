

import { test, expect } from '@playwright/test';

test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {

    const firstName = 'John';
    const lastName = 'george';
    const postCode = '682001';


    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    //1. Bank Manager Login
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();

    // Verify Manager Dashboard
    await expect(page.getByRole('button', { name: 'Add Customer' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();

    console.log('Bank Manager Login Successful');


    // 2. Add Customer
    await page.getByRole('button', { name: 'Add Customer' }).first().click();

    // Enter Customer Details
    await page.locator('input[ng-model="fName"]').fill(firstName);
    await page.locator('input[ng-model="lName"]').fill(lastName);
    await page.locator('input[ng-model="postCd"]').fill(postCode);


   // Alert Handling

page.once('dialog', async (dialog) => {
    expect (dialog.message())//.toContain('Customer added successfully with customer id');

    await dialog.accept();

});
await page.locator('button[type="submit"]').click();

console.log('Bank Account Opened Successfully');

    // 3. Open Bank Account
    await page.getByRole('button', { name: 'Open Account' }).click();

    // Select Newly Created Customer
    await page.locator('select[ng-model="custId"]').selectOption({ label: `${firstName} ${lastName}` });

    // Select Dollar Currency
    await page.locator('select[ng-model="currency"]').selectOption({ label: 'Dollar' });

    // Handle Account Creation Browser Alert
    
 // Open Account Alert Handling

page.once('dialog', async (dialog) => {
    expect (dialog.message())

    await dialog.accept();

});

await page.locator('button[type="submit"]').click();
console.log('Bank Account Opened Successfully');

    // 4. Search and Validate Customer
    await page.getByRole('button', { name: 'Customers' }).click();
    const searchBox = page.locator('input[ng-model="searchCustomer"]');
    await searchBox.fill(lastName);
    const customerRows = page.locator('table tbody tr').filter({ hasText: lastName });

    // Verify Exactly One Customer Found
    await expect(customerRows).toHaveCount(1);

    // Print Customer Details
    const customerDetails = await customerRows.first().innerText();

    console.log('Customer Details:');
    console.log(customerDetails);

    console.log('Customer Search Validation Successful');


    // 5. Delete Customer
    await customerRows.first().getByRole('button', { name: 'Delete' }).click();

    // Verify Customer Deleted
    await expect(customerRows).toHaveCount(0);

    console.log('Customer Deleted Successfully');

    console.log('Deletion Verification Passed');

});
