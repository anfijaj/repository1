// const { test, expect } = require('@playwright/test');

// test('dynamic element', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/.');
//     const btn = page.locator('.start').click();
//     await btn.wa
// })


// const {  test, expect } = require("@playwright/test");

// test.skip('Flaky Test', async({page}) => {

//     await page.goto('https://testautomationpractice.blogspot.com/.');
//     const btn = page.locator('.start');
//     await btn.waitFor({state : 'visible'});
//     await  btn.click();

// })

// test('Flaky Test', async({page}) => {

//     await page.goto('https://practice.expandtesting.com/dynamic-loading/2');
//     const btn = await page.getbyrole('button',{name:'Start'});
//     await btn.waitFor({state : 'visible'});
//     await  btn.click();
//     await expect(page.getbyrole('heading',{name :'HelloW orld!'})).tobevisible('timeout : 10000')
    
   
// })

const {  test, expect } = require("@playwright/test");
const { timeout } = require("../playwright.config");

test.skip('Flaky Test', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/.');
    const btn = page.locator('.start');
    await btn.waitFor({state : 'visible'});
    await  btn.click();

})

test('Flaky Test1', async({page}) => {

    await page.goto('https://practice.expandtesting.com/dynamic-loading/2');
    const btn = page.getByRole('button', {name : 'Start'});
    await btn.click();
    await expect(page.getByRole('heading', {name : 'Hello World!'})).toBeVisible({timeout : 100000});
    
})

