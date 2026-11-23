# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Module3Assign\bankManger.spec.js >> Bank Manager - Add Customer, Open Account, Search and Delete
- Location: tests\Module3Assign\bankManger.spec.js:5:1

# Error details

```
ReferenceError: firstname is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - button "Home" [ref=e5] [cursor=pointer]
    - strong [ref=e6]: XYZ Bank
  - generic [ref=e8]:
    - generic [ref=e9]:
      - button "Add Customer" [active] [ref=e10] [cursor=pointer]
      - button "Open Account" [ref=e12] [cursor=pointer]
      - button "Customers" [ref=e13] [cursor=pointer]
    - form [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: "First Name :"
        - textbox "First Name" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]: "Last Name :"
        - textbox "Last Name" [ref=e23]
      - generic [ref=e24]:
        - generic [ref=e25]: "Post Code :"
        - textbox "Post Code" [ref=e26]
      - button "Add Customer" [ref=e27] [cursor=pointer]
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {
  6  | 
  7  |     const firstName = 'John';
  8  |     const lastName = 'george';
  9  |     const postCode = '682001';
  10 | 
  11 | 
  12 |     await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  13 | 
  14 |     //1. Bank Manager Login
  15 |     await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  16 | 
  17 |     // Verify Manager Dashboard
  18 |     await expect(page.getByRole('button', { name: 'Add Customer' }).first()).toBeVisible();
  19 |     await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  20 |     await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();
  21 | 
  22 |     console.log('Bank Manager Login Successful');
  23 | 
  24 | 
  25 |     // 2. Add Customer
  26 |     await page.getByRole('button', { name: 'Add Customer' }).first().click();
  27 | 
  28 |     // Enter Customer Details
> 29 |     await page.locator('input[ng-model="fName"]').fill(firstname);
     |                                                        ^ ReferenceError: firstname is not defined
  30 |     await page.locator('input[ng-model="lName"]').fill(lastName);
  31 |     await page.locator('input[ng-model="postCd"]').fill(postCode);
  32 | 
  33 | 
  34 |    // Alert Handling
  35 | 
  36 | page.on('dialog', async (dialog) => {
  37 |     expect (dialog.message())//.toContain('Customer added successfully with customer id');
  38 | 
  39 |     await dialog.accept();
  40 | 
  41 | });
  42 | await page.locator('button[type="submit"]').click();
  43 | 
  44 | console.log('Bank Account Opened Successfully');
  45 | 
  46 |     // 3. Open Bank Account
  47 |     await page.getByRole('button', { name: 'Open Account' }).click();
  48 | 
  49 |     // Select Newly Created Customer
  50 |     await page.locator('select[ng-model="custId"]').selectOption({ label: `${firstName} ${lastName}` });
  51 | 
  52 |     // Select Dollar Currency
  53 |     await page.locator('select[ng-model="currency"]').selectOption({ label: 'Dollar' });
  54 | 
  55 |     // Handle Account Creation Browser Alert
  56 |     
  57 |  // Open Account Alert Handling
  58 | 
  59 | page.on('dialog', async (dialog) => {
  60 |     expect (dialog.message())
  61 | 
  62 |     await dialog.accept();
  63 | 
  64 | });
  65 | 
  66 | await page.locator('button[type="submit"]').click();
  67 | console.log('Bank Account Opened Successfully');
  68 | 
  69 |     // 4. Search and Validate Customer
  70 |     await page.getByRole('button', { name: 'Customers' }).click();
  71 |     const searchBox = page.locator('input[ng-model="searchCustomer"]');
  72 |     await searchBox.fill(lastName);
  73 |     const customerRows = page.locator('table tbody tr').filter({ hasText: lastName });
  74 | 
  75 |     // Verify Exactly One Customer Found
  76 |     await expect(customerRows).toHaveCount(1);
  77 | 
  78 |     // Print Customer Details
  79 |     const customerDetails = await customerRows.first().innerText();
  80 | 
  81 |     console.log('Customer Details:');
  82 |     console.log(customerDetails);
  83 | 
  84 |     console.log('Customer Search Validation Successful');
  85 | 
  86 | 
  87 |     // 5. Delete Customer
  88 |     await customerRows.first().getByRole('button', { name: 'Delete' }).click();
  89 | 
  90 |     // Verify Customer Deleted
  91 |     await expect(customerRows).toHaveCount(0);
  92 | 
  93 |     console.log('Customer Deleted Successfully');
  94 | 
  95 |     console.log('Deletion Verification Passed');
  96 | 
  97 | });
  98 | 
```