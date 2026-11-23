# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Module3Assign\bankManger.spec.js >> Bank Manager - Add Customer, Open Account, Search and Delete
- Location: tests\Module3Assign\bankManger.spec.js:4:1

# Error details

```
Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - button "Home" [ref=e5] [cursor=pointer]
    - strong [ref=e6]: XYZ Bank
  - generic [ref=e8]:
    - generic [ref=e9]:
      - button "Add Customer" [ref=e10] [cursor=pointer]
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
      - button "Add Customer" [active] [ref=e27] [cursor=pointer]
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
  34 |     //await page.locator('button[type="submit"]').click();
  35 |     await page.locator('form button[type="submit"]').click();
  36 | 
  37 |     const addAlert = await addAlertPromise;
  38 |     console.log('Add Customer Alert:', addAlert.message());
  39 | 
> 40 |     await addAlert.accept();
     |                    ^ Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
  41 | 
  42 |     console.log('Customer Added Successfully');
  43 | 
  44 |     // 3. Open Account
  45 |     await page.getByRole('button', { name: 'Open Account' }).click();
  46 | 
  47 |     // Select Newly Created Customer
  48 |     await page.locator('select[ng-model="custId"]')
  49 |         .selectOption({ label: `${firstName} ${lastName}` });
  50 | 
  51 |     // Select Dollar Currency
  52 |     await page.locator('select[ng-model="currency"]')
  53 |         .selectOption({ label: 'Dollar' });
  54 | 
  55 |     // Handle Open Account Alert
  56 |     const accountAlertPromise = page.waitForEvent('dialog');
  57 | 
  58 |     await page.getByRole('button', { name: 'Process' }).click();
  59 | 
  60 |     const accountAlert = await accountAlertPromise;
  61 |     console.log('Open Account Alert:', accountAlert.message());
  62 | 
  63 |     await accountAlert.accept();
  64 | 
  65 |     console.log('Bank Account Opened Successfully');
  66 | 
  67 |     // 4. Search and Validate Customer
  68 |     await page.getByRole('button', { name: 'Customers' }).click();
  69 | 
  70 |     const searchBox = page.locator('input[ng-model="searchCustomer"]');
  71 | 
  72 |     await searchBox.fill(lastName);
  73 | 
  74 |     // Find matching customer row
  75 |     const customerRows = page.locator('table tbody tr')
  76 |         .filter({ hasText: lastName });
  77 | 
  78 |     // Verify exactly one matching record
  79 |     await expect(customerRows).toHaveCount(1);
  80 | 
  81 |     // Print Customer Details
  82 |     const customerDetails = await customerRows.first().innerText();
  83 | 
  84 |     console.log('Customer Details:');
  85 |     console.log(customerDetails);
  86 | 
  87 |     // 5. Delete Customer
  88 |     await customerRows.first().getByRole('button', { name: 'Delete' }).click();
  89 | 
  90 |     // Verify Customer is Deleted
  91 |     await expect(customerRows).toHaveCount(0);
  92 | 
  93 |     console.log('Customer Deleted Successfully');
  94 |     console.log('Deletion Verification Passed');
  95 | 
  96 | });
  97 | 
```