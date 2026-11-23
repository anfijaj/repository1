# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testData.spec.js >>  Entering Incorrect Value
- Location: tests\testData.spec.js:2:1

# Error details

```
ReferenceError: testData is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test')
  2  | test(" Entering Incorrect Value", async ({ page }) => {
  3  |     await page.goto("https://www.saucedemo.com/");
  4  | 
  5  |     // Invalid username with valid password
> 6  |     await page.locator("#user-name").fill(testData.login.invalidUsername);
     |                                           ^ ReferenceError: testData is not defined
  7  |     await page.locator("#password").fill(testData.login.validPassword);
  8  |     await page.locator("#login-button").click();
  9  | 
  10 |     const error = page.locator("[data-test='error']");
  11 |     console.log(await error.textContent());
  12 |     await expect(error).toContainText("Epic sadface");
  13 |     await expect(error).toHaveText("Epic sadface: Username and password do not match any user in this service");
  14 | 
  15 |     // Recover with a valid username (password is still filled in)
  16 |     await page.locator("#user-name").fill(testData.login.validUsername);
  17 |     await page.locator("#login-button").click();
  18 | 
  19 |     await expect(page).toHaveURL(/inventory/);
  20 | });
  21 | 
  22 | 
```