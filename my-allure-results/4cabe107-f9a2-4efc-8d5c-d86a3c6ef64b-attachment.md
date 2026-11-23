# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PartAssign5\login.spec.js >> QA Brains Login Module >> Verify validation when email is empty @sanity @login
- Location: tests\PartAssign5\login.spec.js:37:5

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not ""

Call Log:
- Timeout 6000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - textbox "Email*" [active] [ref=e35]:
                - /placeholder: eg. user@user.com
              - paragraph [ref=e36]: Email is a required field
            - generic [ref=e37]:
              - generic [ref=e38]: Password*
              - generic [ref=e39]:
                - textbox "Password*" [ref=e40]:
                  - /placeholder: "*******"
                  - text: Password123
                - button [ref=e41] [cursor=pointer]
          - button "Login" [ref=e48] [cursor=pointer]
  - region "Notifications alt+T"
  - alert [ref=e51]
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
  30 | 
  31 |         // Verify error message
  32 |         await expect(page.getByText('Invalid email or password')).toBeVisible();
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
  48 |         await expect.poll(async () => {
  49 |             return await email.evaluate(element => element.validationMessage);
> 50 |         }).not.toBe('');
     |                ^ Error: expect(received).not.toBe(expected) // Object.is equality
  51 | 
  52 |     });
  53 | 
  54 | });
```