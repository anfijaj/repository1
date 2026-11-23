
import { test, expect } from '@playwright/test';

test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {

    test.setTimeout(90000);

    // Test Data
    const firstName = 'John';
    const lastName = 'george';
    const postCode = '682001';

    // 1. Launch Application
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    // Bank Manager Login
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();

    // Verify Manager Dashboard
    await expect(page.getByRole('button', { name: 'Add Customer' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();

    console.log('1. Bank Manager Login Successful');


    // 2. ADD CUSTOMER
    await page.getByRole('button', { name: 'Add Customer' }).first().click();

    // Enter Customer Details
    await page.locator('input[ng-model="fName"]').fill(firstName);
    await page.locator('input[ng-model="lName"]').fill(lastName);
    await page.locator('input[ng-model="postCd"]').fill(postCode);

    console.log('Customer Details Entered');

    // Register Alert Listener BEFORE clicking Submit
    await expect(processButton).toBeVisible();
await expect(processButton).toBeEnabled();

const accountAlertPromise = page.waitForEvent('dialog');

await processButton.click();

const accountAlert = await accountAlertPromise;

console.log('Open Account Alert:', accountAlert.message());

await accountAlert.accept();


    // // 3. OPEN BANK ACCOUNT
    // await page.getByRole('button', { name: 'Open Account' }).click();

    // // Select Newly Created Customer
    // await page.locator('select[ng-model="custId"]')
    //     .selectOption({ label: `${firstName} ${lastName}` });

    // // Select Dollar Currency
    // await page.locator('select[ng-model="currency"]')
    //     .selectOption({ label: 'Dollar' });

    // console.log('Customer and Dollar Currency Selected');

    // // Register Alert Listener BEFORE clicking Process
    // const accountAlertPromise = page.waitForEvent('dialog');

    // // Process Account
    // await page.locator('form:visible button[type="submit"]').click();

    // // Receive and Accept Alert
    // const accountAlert = await accountAlertPromise;

    // console.log('3. Open Account Alert:', accountAlert.message());

    // await accountAlert.accept();

    // console.log('Bank Account Opened Successfully');


    // // 4. SEARCH AND VALIDATE CUSTOMER
    // await page.getByRole('button', { name: 'Customers' }).click();

    // // Search using Unique Last Name
    // const searchBox = page.locator('input[ng-model="searchCustomer"]');

    // await searchBox.fill(lastName);

    // // Locate Matching Customer
    // const customerRows = page.locator('table tbody tr')
    //     .filter({ hasText: lastName });

    // // Verify Exactly One Matching Record
    // await expect(customerRows).toHaveCount(1);

    // // Print Customer Details
    // const customerDetails = await customerRows.first().innerText();

    // console.log('4. Customer Details:');
    // console.log(customerDetails);

    // console.log('Customer Search Validation Successful');


    // // 5. DELETE CUSTOMER
    // await customerRows.first()
    //     .getByRole('button', { name: 'Delete' }).click();

    // // Verify Customer Deleted
    // await expect(customerRows).toHaveCount(0);

    // console.log('5. Customer Deleted Successfully');

    // console.log('Deletion Verification Passed');

});
