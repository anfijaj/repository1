# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Module3Assign\bankManage.spec.js >> Bank Manager Operations >> TC01 - Add Customer
- Location: tests\Module3Assign\bankManage.spec.js:40:5

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
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | 
  4   | let page;
  5   | 
  6   | // Common Test Data
  7   | const firstName = 'John';
  8   | const lastName = 'QA' + Date.now();
  9   | const postCode = '682001';
  10  | 
  11  | test.describe.serial('Bank Manager Operations', () => {
  12  | 
  13  |     test.setTimeout(60000);
  14  | 
  15  |     // Launch application only once
  16  |     test.beforeAll(async ({ browser }) => {
  17  | 
  18  |         page = await browser.newPage();
  19  | 
  20  |         await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  21  | 
  22  |         // Bank Manager Login
  23  |         await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  24  | 
  25  |         await expect(
  26  |             page.getByRole('button', { name: 'Add Customer' }).first()
  27  |         ).toBeVisible();
  28  | 
  29  |         console.log('Bank Manager Login Successful');
  30  | 
  31  |     });
  32  | 
  33  |     // Close browser after all tests
  34  |     test.afterAll(async () => {
  35  |         await page.close();
  36  |     });
  37  | 
  38  | 
  39  |     // TEST CASE 1: ADD CUSTOMER
  40  |     test('TC01 - Add Customer', async () => {
  41  | 
  42  |         await page.getByRole('button', { name: 'Add Customer' }).first().click();
  43  | 
  44  |         // Enter Customer Details
  45  |         await page.locator('input[ng-model="fName"]').fill(firstName);
  46  | 
  47  |         await page.locator('input[ng-model="lName"]').fill(lastName);
  48  | 
  49  |         await page.locator('input[ng-model="postCd"]').fill(postCode);
  50  | 
  51  |         // Handle Browser Alert
  52  |         const addAlertPromise = page.waitForEvent('dialog');
  53  | 
  54  |         await page.locator('form:visible button[type="submit"]').click();
  55  | 
  56  |         const addAlert = await addAlertPromise;
  57  | 
  58  |         console.log('Add Customer Alert:', addAlert.message());
  59  | 
> 60  |         await addAlert.accept();
      |                        ^ Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
  61  | 
  62  |         console.log('Customer Added Successfully');
  63  | 
  64  |     });
  65  | 
  66  | 
  67  |     // TEST CASE 2: OPEN ACCOUNT
  68  |     test('TC02 - Open Account', async () => {
  69  | 
  70  |         await page.getByRole('button', { name: 'Open Account' }).click();
  71  | 
  72  |         // Select Customer
  73  |         await page.locator('select[ng-model="custId"]')
  74  |             .selectOption({ label: `${firstName} ${lastName}` });
  75  | 
  76  |         // Select Dollar Currency
  77  |         await page.locator('select[ng-model="currency"]')
  78  |             .selectOption({ label: 'Dollar' });
  79  | 
  80  |         // Handle Browser Alert
  81  |         const accountAlertPromise = page.waitForEvent('dialog');
  82  | 
  83  |         await page.locator('form:visible button[type="submit"]').click();
  84  | 
  85  |         const accountAlert = await accountAlertPromise;
  86  | 
  87  |         console.log('Open Account Alert:', accountAlert.message());
  88  | 
  89  |         await accountAlert.accept();
  90  | 
  91  |         console.log('Bank Account Opened Successfully');
  92  | 
  93  |     });
  94  | 
  95  | 
  96  |     // TEST CASE 3: SEARCH CUSTOMER
  97  |     test('TC03 - Search Customer', async () => {
  98  | 
  99  |         await page.getByRole('button', { name: 'Customers' }).click();
  100 | 
  101 |         // Search using Last Name
  102 |         const searchBox = page.locator('input[ng-model="searchCustomer"]');
  103 | 
  104 |         await searchBox.fill(lastName);
  105 | 
  106 |         // Locate Customer Record
  107 |         const customerRows = page.locator('table tbody tr')
  108 |             .filter({ hasText: lastName });
  109 | 
  110 |         // Verify Exactly One Record
  111 |         await expect(customerRows).toHaveCount(1);
  112 | 
  113 |         // Print Customer Details
  114 |         const customerDetails = await customerRows.first().innerText();
  115 | 
  116 |         console.log('Customer Details:');
  117 |         console.log(customerDetails);
  118 | 
  119 |         console.log('Customer Search Successful');
  120 | 
  121 |     });
  122 | 
  123 | 
  124 |     // TEST CASE 4: DELETE CUSTOMER
  125 |     test('TC04 - Delete Customer', async () => {
  126 | 
  127 |         // Customer search page is already open
  128 |         const searchBox = page.locator('input[ng-model="searchCustomer"]');
  129 | 
  130 |         await searchBox.fill(lastName);
  131 | 
  132 |         const customerRows = page.locator('table tbody tr')
  133 |             .filter({ hasText: lastName });
  134 | 
  135 |         await expect(customerRows).toHaveCount(1);
  136 | 
  137 |         // Delete Customer
  138 |         await customerRows.first()
  139 |             .getByRole('button', { name: 'Delete' }).click();
  140 | 
  141 |         // Verify Customer Deleted
  142 |         await expect(customerRows).toHaveCount(0);
  143 | 
  144 |         console.log('Customer Deleted Successfully');
  145 | 
  146 |         console.log('Deletion Verification Passed');
  147 | 
  148 |     });
  149 | 
  150 | });
  151 | 
```