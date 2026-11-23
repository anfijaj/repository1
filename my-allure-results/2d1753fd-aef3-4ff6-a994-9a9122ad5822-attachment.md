# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Module3Assign\bankManger.spec.js >> Bank Manager - Add Customer, Open Account, Search and Delete
- Location: tests\Module3Assign\bankManger.spec.js:4:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button[type="submit"]')
    - locator resolved to <button value="" type="submit" class="btn btn-default">Add Customer</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {
  5  | 
  6  |     // Test Data
  7  |     const firstName = 'John';
  8  |     const lastName = 'QA' + Date.now();
  9  |     const postCode = '682001';
  10 | 
  11 |     // 1. Launch Application
  12 |     await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  13 | 
  14 |     // Bank Manager Login
  15 |     await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  16 | 
  17 |     // Verify Manager Dashboard
  18 |     await expect(page.getByRole('button', { name: 'Add Customer' }).first()).toBeVisible();
  19 |     await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  20 |     await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();
  21 | 
  22 |     console.log('Bank Manager Login Successful');
  23 | 
  24 |     // 2. Add Customer
  25 |     await page.getByRole('button', { name: 'Add Customer' }).click();
  26 | 
  27 |     await page.locator('input[ng-model="fName"]').fill(firstName);
  28 |     await page.locator('input[ng-model="lName"]').fill(lastName);
  29 |     await page.locator('input[ng-model="postCd"]').fill(postCode);
  30 | 
  31 |     // Handle Add Customer Alert
  32 |     const addAlertPromise = page.waitForEvent('dialog');
  33 | 
> 34 |     await page.locator('button[type="submit"]').click();
     |                                                 ^ Error: locator.click: Target page, context or browser has been closed
  35 | 
  36 |     const addAlert = await addAlertPromise;
  37 |     console.log('Add Customer Alert:', addAlert.message());
  38 | 
  39 |     await addAlert.accept();
  40 | 
  41 |     console.log('Customer Added Successfully');
  42 | 
  43 |     // 3. Open Account
  44 |     await page.getByRole('button', { name: 'Open Account' }).click();
  45 | 
  46 |     // Select Newly Created Customer
  47 |     await page.locator('select[ng-model="custId"]')
  48 |         .selectOption({ label: `${firstName} ${lastName}` });
  49 | 
  50 |     // Select Dollar Currency
  51 |     await page.locator('select[ng-model="currency"]')
  52 |         .selectOption({ label: 'Dollar' });
  53 | 
  54 |     // Handle Open Account Alert
  55 |     const accountAlertPromise = page.waitForEvent('dialog');
  56 | 
  57 |     await page.getByRole('button', { name: 'Process' }).click();
  58 | 
  59 |     const accountAlert = await accountAlertPromise;
  60 |     console.log('Open Account Alert:', accountAlert.message());
  61 | 
  62 |     await accountAlert.accept();
  63 | 
  64 |     console.log('Bank Account Opened Successfully');
  65 | 
  66 |     // 4. Search and Validate Customer
  67 |     await page.getByRole('button', { name: 'Customers' }).click();
  68 | 
  69 |     const searchBox = page.locator('input[ng-model="searchCustomer"]');
  70 | 
  71 |     await searchBox.fill(lastName);
  72 | 
  73 |     // Find matching customer row
  74 |     const customerRows = page.locator('table tbody tr')
  75 |         .filter({ hasText: lastName });
  76 | 
  77 |     // Verify exactly one matching record
  78 |     await expect(customerRows).toHaveCount(1);
  79 | 
  80 |     // Print Customer Details
  81 |     const customerDetails = await customerRows.first().innerText();
  82 | 
  83 |     console.log('Customer Details:');
  84 |     console.log(customerDetails);
  85 | 
  86 |     // 5. Delete Customer
  87 |     await customerRows.first().getByRole('button', { name: 'Delete' }).click();
  88 | 
  89 |     // Verify Customer is Deleted
  90 |     await expect(customerRows).toHaveCount(0);
  91 | 
  92 |     console.log('Customer Deleted Successfully');
  93 |     console.log('Deletion Verification Passed');
  94 | 
  95 | });
  96 | 
```