# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Module3Assign\bankManger.spec.js >> Bank Manager - Add Customer, Open Account, Search and Delete
- Location: tests\Module3Assign\bankManger.spec.js:5:1

# Error details

```
ReferenceError: firstName is not defined
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic [ref=f2e4]:
    - button "Home" [ref=f2e5] [cursor=pointer]
    - strong [ref=f2e6]: XYZ Bank
  - generic [ref=f2e8]:
    - generic [ref=f2e9]:
      - button "Add Customer" [ref=f2e10] [cursor=pointer]
      - button "Open Account" [active] [ref=f2e12] [cursor=pointer]
      - button "Customers" [ref=f2e13] [cursor=pointer]
    - form [ref=f2e17]:
      - generic [ref=f2e18]:
        - generic [ref=f2e19]: "First Name :"
        - textbox "First Name" [ref=f2e20]
      - generic [ref=f2e21]:
        - generic [ref=f2e22]: "Last Name :"
        - textbox "Last Name" [ref=f2e23]
      - generic [ref=f2e24]:
        - generic [ref=f2e25]: "Post Code :"
        - textbox "Post Code" [ref=f2e26]
      - button "Add Customer" [ref=f2e27] [cursor=pointer]
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {
  6  | 
  7  |     await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  8  | 
  9  |     //1. Bank Manager Login
  10 |     await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  11 | 
  12 |     // Verify Manager Dashboard
  13 |     await expect(page.getByRole('button', { name: 'Add Customer' }).first()).toBeVisible();
  14 |     await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  15 |     await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();
  16 | 
  17 |     console.log('Bank Manager Login Successful');
  18 | 
  19 | 
  20 |     // 2. Add Customer
  21 |     await page.getByRole('button', { name: 'Add Customer' }).first().click();
  22 | 
  23 |     // Enter Customer Details
  24 |     await page.locator('input[ng-model="fName"]').fill('john');
  25 |     await page.locator('input[ng-model="lName"]').fill('george');
  26 |     await page.locator('input[ng-model="postCd"]').fill('680035');
  27 | 
  28 | 
  29 |    // Alert Handling
  30 | 
  31 | page.on('dialog', async (dialog) => {
  32 |     expect (dialog.message())//.toContain('Customer added successfully with customer id');
  33 | 
  34 |     await dialog.accept();
  35 | 
  36 | });
  37 | await page.locator('button[type="submit"]').click();
  38 | 
  39 | console.log('Bank Account Opened Successfully');
  40 | 
  41 |     // 3. Open Bank Account
  42 |     await page.getByRole('button', { name: 'Open Account' }).click();
  43 | 
  44 |     // Select Newly Created Customer
> 45 |     await page.locator('select[ng-model="custId"]').selectOption({ label: `${firstName} ${lastName}` });
     |                                                                              ^ ReferenceError: firstName is not defined
  46 | 
  47 |     // Select Dollar Currency
  48 |     await page.locator('select[ng-model="currency"]').selectOption({ label: 'Dollar' });
  49 | 
  50 |     // Handle Account Creation Browser Alert
  51 |     
  52 |  // Open Account Alert Handling
  53 | 
  54 | page.on('dialog', async (dialog) => {
  55 |     expect (dialog.message())
  56 | 
  57 |     await dialog.accept();
  58 | 
  59 | });
  60 | 
  61 | await page.locator('button[type="submit"]').click();
  62 | console.log('Bank Account Opened Successfully');
  63 | 
  64 |     // 4. Search and Validate Customer
  65 |     await page.getByRole('button', { name: 'Customers' }).click();
  66 |     const searchBox = page.locator('input[ng-model="searchCustomer"]');
  67 |     await searchBox.fill(lastName);
  68 |     const customerRows = page.locator('table tbody tr').filter({ hasText: lastName });
  69 | 
  70 |     // Verify Exactly One Customer Found
  71 |     await expect(customerRows).toHaveCount(1);
  72 | 
  73 |     // Print Customer Details
  74 |     const customerDetails = await customerRows.first().innerText();
  75 | 
  76 |     console.log('Customer Details:');
  77 |     console.log(customerDetails);
  78 | 
  79 |     console.log('Customer Search Validation Successful');
  80 | 
  81 | 
  82 |     // 5. Delete Customer
  83 |     await customerRows.first().getByRole('button', { name: 'Delete' }).click();
  84 | 
  85 |     // Verify Customer Deleted
  86 |     await expect(customerRows).toHaveCount(0);
  87 | 
  88 |     console.log('Customer Deleted Successfully');
  89 | 
  90 |     console.log('Deletion Verification Passed');
  91 | 
  92 | });
  93 | 
```