# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POMtwo\pom2test.spec.js >> End to end
- Location: tests\POMtwo\pom2test.spec.js:9:1

# Error details

```
ReferenceError: Cannot access 'login' before initialization
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | import { Loginpage } from '../POMone/Loginpage';
  6  | 
  7  | const login=require('./Login.spec')
  8  | 
  9  | test('End to end',async({page})=>{
  10 | const username = 'standard_user'
  11 | const password ='secret_sauce'
  12 | const productName='Sauce Labs Backpack'
> 13 | const login =new login(page)
     |              ^ ReferenceError: Cannot access 'login' before initialization
  14 | await login.gotoNavigation();
  15 | await login.validLogin();
  16 | 
  17 | 
  18 | })
  19 | 
```