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

Locator: getByRole('paragraph')
Expected substring: "Username is incorrect."
Error: strict mode violation: getByRole('paragraph') resolved to 2 elements:
    1) <p class="text-red-500 text-sm mt-1">Username is incorrect.</p> aka getByText('Username is incorrect.')
    2) <p class="text-red-500 text-sm mt-1">Password is incorrect.</p> aka getByText('Password is incorrect.')

Call log:
  - Expect "toContainText" getByRole('paragraph') with timeout 6000ms
  - waiting for getByRole('paragraph')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
        - /url: /ecommerce
        - img "logo" [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - link "Back to home" [ref=e11] [cursor=pointer]:
        - /url: /
      - generic [ref=e14]:
        - heading "Login" [level=2] [ref=e15]
        - alert [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - heading "Accepted email:" [level=4] [ref=e19]
              - list [ref=e20]:
                - listitem [ref=e21]: test@qabrains.com
                - listitem [ref=e22]: practice@qabrains.com
                - listitem [ref=e23]: student@qabrains.com
            - generic [ref=e24]:
              - heading "Password:" [level=4] [ref=e25]
              - list [ref=e26]:
                - listitem [ref=e27]: Password123
                - listitem [ref=e28]: Password123
                - listitem [ref=e29]: Password123
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: Email*
              - textbox "Email*" [ref=e35]:
                - /placeholder: eg. user@user.com
                - text: wrong@gmail.com
              - paragraph [ref=e36]: Username is incorrect.
            - generic [ref=e37]:
              - generic [ref=e38]: Password*
              - generic [ref=e39]:
                - textbox "Password*" [ref=e40]:
                  - /placeholder: "*******"
                  - text: Wrong123
                - button [ref=e41] [cursor=pointer]
              - paragraph [ref=e48]: Password is incorrect.
          - button "Login" [disabled] [ref=e49]
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e56]:
        - generic [ref=e60]: Neither email nor password matched.
  - alert [ref=e62]
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
> 32 |         await expect(page.getByRole('paragraph')).toContainText('Username is incorrect.');
     |                                                   ^ Error: expect(locator).toContainText(expected) failed
  33 |         //await expect(page.locator('ol')).toContainText('Neither email nor password matched.');
  34 | 
  35 |     });
  36 | 
  37 |     // 3. Sanity Testing
  38 |     test('Verify validation when email is empty @sanity @login', async ({ page }) => {
  39 | 
  40 |         const email = page.getByLabel('Email');
  41 | 
  42 |         // Leave email empty and enter valid password
  43 |         await email.fill('');
  44 |         await page.getByLabel('Password').fill('Password123');
  45 | 
  46 |         await page.getByRole('button', { name: 'Login' }).click();
  47 | 
  48 |         // Verify browser required-field validation
  49 |         // await expect.poll(async () => {
  50 |         //     return await email.evaluate(element => element.validationMessage);
  51 |         // }).not.toBe('');
  52 | await expect(page.getByRole('paragraph')).toContainText('Email is a required field');
  53 |     });
  54 | 
  55 | });
```