# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POMtwo\pom2test.spec.js >> End to end
- Location: tests\POMtwo\pom2test.spec.js:7:1

# Error details

```
ReferenceError: Login is not defined
```

# Test source

```ts
  1  | 
  2  | 
  3  | const { test,expect } = require("@playwright/test");
  4  | const login = require('./Login.spec');
  5  | 
  6  | 
  7  | test('End to end',async({page})=>{
  8  | const username = 'standard_user'
  9  | const password ='secret_sauce'
  10 | const productName='Sauce Labs Backpack'
> 11 | const login =new Login(page)
     |              ^ ReferenceError: Login is not defined
  12 | await login.gotoNavigation();
  13 | await login.validLogin(username,password);
  14 | 
  15 | 
  16 | })
  17 | 
```