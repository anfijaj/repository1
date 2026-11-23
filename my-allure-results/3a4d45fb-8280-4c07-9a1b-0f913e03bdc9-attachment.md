# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PartAssign5\login.spec.js >> QA Brains Login Module >> Verify login with invalid credentials @regression @login
- Location: tests\PartAssign5\login.spec.js:24:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('page')
Expected substring: "Username is incorrect"
Timeout: 6000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('page') with timeout 6000ms
  - waiting for getByRole('page')

```

```yaml
- banner:
  - link "logo (Practice Site)":
    - /url: /ecommerce
    - img "logo"
    - text: (Practice Site)
- link "Back to home":
  - /url: /
  - img
  - text: Back to home
- heading "Login" [level=2]
- alert:
  - heading "Accepted email:" [level=4]
  - list:
    - listitem: test@qabrains.com
    - listitem: practice@qabrains.com
    - listitem: student@qabrains.com
  - heading "Password:" [level=4]
  - list:
    - listitem: Password123
    - listitem: Password123
    - listitem: Password123
- text: Email*
- textbox "Email*":
  - /placeholder: eg. user@user.com
  - text: wrong@gmail.com
- paragraph: Username is incorrect.
- text: Password*
- textbox "Password*":
  - /placeholder: "*******"
  - text: Wrong123
- button:
  - img
- paragraph: Password is incorrect.
- button "Login":
  - text: Login
  - img
- region "Notifications alt+T"
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('QA Brains Login Module', () => {
  4  | 
  5  |     // Navigate before every test case
  6  |     test.beforeEach(async ({ page }) => {
  7  |         await page.goto('https://practice.qabrains.com/ecommerce/login');
  8  |     });
  9  | 
  10 |     // 1. Smoke Testing
  11 |     test('Verify login with valid credentials @smoke @login', async ({ page }) => {
  12 | 
  13 |         await page.getByLabel('Email').fill('test@qabrains.com');
  14 |         await page.getByLabel('Password').fill('Password123');
  15 | 
  16 |         await page.getByRole('button', { name: 'Login' }).click();
  17 | 
  18 |         // Verify successful redirection
  19 |         await expect(page).not.toHaveURL(/\/ecommerce\/login/);
  20 | 
  21 |     });
  22 | 
  23 |     // 2. Regression Testing
  24 |     test('Verify login with invalid credentials @regression @login', async ({ page }) => {
  25 | 
  26 |         await page.getByLabel('Email').fill('wrong@gmail.com');
  27 |         await page.getByLabel('Password').fill('Wrong123');
  28 | 
  29 |         await page.getByRole('button', { name: 'Login' }).click();
  30 |         //await page.getByLabel('Login').click();
  31 |         // Verify error message
> 32 |         await expect(page.getByRole('page')).toContainText('Username is incorrect');
     |                                              ^ Error: expect(locator).toContainText(expected) failed
  33 | 
  34 |     });
  35 | 
  36 |     // 3. Sanity Testing
  37 |     test('Verify validation when email is empty @sanity @login', async ({ page }) => {
  38 | 
  39 |         const email = page.getByLabel('Email');
  40 | 
  41 |         // Leave email empty and enter valid password
  42 |         await email.fill('');
  43 |         await page.getByLabel('Password').fill('Password123');
  44 | 
  45 |         await page.getByRole('button', { name: 'Login' }).click();
  46 | 
  47 |         // Verify browser required-field validation
  48 |         // await expect.poll(async () => {
  49 |         //     return await email.evaluate(element => element.validationMessage);
  50 |         // }).not.toBe('');
  51 | await expect(page.getByRole('paragraph')).toContainText('Email is a required field');
  52 |     });
  53 | 
  54 | });
```