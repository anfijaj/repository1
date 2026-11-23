# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Module3Assign\bankManger.spec.js >> Bank Manager - Add Customer, Open Account, Search and Delete
- Location: tests\Module3Assign\bankManger.spec.js:5:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Process' })
    - locator resolved to <button value="" type="submit">Process</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1   | 
  2   | 
  3   | import { test, expect } from '@playwright/test';
  4   | 
  5   | test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {
  6   | 
  7   |     // Test Data
  8   |     const firstName = 'John';
  9   |     const lastName = 'QA' + Date.now();
  10  |     const postCode = '682001';
  11  | 
  12  |     // 1. Launch Application
  13  |     await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  14  | 
  15  |     // Bank Manager Login
  16  |     await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  17  | 
  18  |     // Verify Manager Dashboard
  19  |     await expect(page.getByRole('button', { name: 'Add Customer' }).first()).toBeVisible();
  20  |     await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  21  |     await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();
  22  | 
  23  |     console.log('Bank Manager Login Successful');
  24  | 
  25  | 
  26  |     // 2. Add Customer
  27  |     await page.getByRole('button', { name: 'Add Customer' }).first().click();
  28  | 
  29  |     // Enter Customer Details
  30  |     await page.locator('input[ng-model="fName"]').fill(firstName);
  31  |     await page.locator('input[ng-model="lName"]').fill(lastName);
  32  |     await page.locator('input[ng-model="postCd"]').fill(postCode);
  33  | 
  34  | 
  35  |    // Alert Handling
  36  | 
  37  | page.once('dialog', async (dialog) => {
  38  |     expect (dialog.message())//.toContain('Customer added successfully with customer id');
  39  | 
  40  |     await dialog.accept();
  41  | 
  42  | });
  43  | await page.locator('button[type="submit"]').click();
  44  | 
  45  | 
  46  | 
  47  | console.log('Bank Account Opened Successfully');
  48  | 
  49  |     // 3. Open Bank Account
  50  |     await page.getByRole('button', { name: 'Open Account' }).click();
  51  | 
  52  |     // Select Newly Created Customer
  53  |     await page.locator('select[ng-model="custId"]')
  54  |         .selectOption({ label: `${firstName} ${lastName}` });
  55  | 
  56  |     // Select Dollar Currency
  57  |     await page.locator('select[ng-model="currency"]')
  58  |         .selectOption({ label: 'Dollar' });
  59  | 
  60  |     // Handle Account Creation Browser Alert
  61  |     const accountAlertPromise = page.waitForEvent('dialog');
  62  | 
> 63  |     await page.getByRole('button', { name: 'Process' }).click();
      |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  64  | 
  65  |     const accountAlert = await accountAlertPromise;
  66  | 
  67  |     console.log('Open Account Alert:', accountAlert.message());
  68  | 
  69  |     await accountAlert.accept();
  70  | 
  71  |     console.log('Bank Account Opened Successfully');
  72  | 
  73  | 
  74  |     // 4. Search and Validate Customer
  75  |     await page.getByRole('button', { name: 'Customers' }).click();
  76  | 
  77  |     // Search using Unique Last Name
  78  |     const searchBox = page.locator('input[ng-model="searchCustomer"]');
  79  | 
  80  |     await searchBox.fill(lastName);
  81  | 
  82  |     // Locate Matching Customer
  83  |     const customerRows = page.locator('table tbody tr')
  84  |         .filter({ hasText: lastName });
  85  | 
  86  |     // Verify Exactly One Customer Found
  87  |     await expect(customerRows).toHaveCount(1);
  88  | 
  89  |     // Print Customer Details
  90  |     const customerDetails = await customerRows.first().innerText();
  91  | 
  92  |     console.log('Customer Details:');
  93  |     console.log(customerDetails);
  94  | 
  95  |     console.log('Customer Search Validation Successful');
  96  | 
  97  | 
  98  |     // 5. Delete Customer
  99  |     await customerRows.first().getByRole('button', { name: 'Delete' }).click();
  100 | 
  101 |     // Verify Customer Deleted
  102 |     await expect(customerRows).toHaveCount(0);
  103 | 
  104 |     console.log('Customer Deleted Successfully');
  105 | 
  106 |     console.log('Deletion Verification Passed');
  107 | 
  108 | });
  109 | 
```