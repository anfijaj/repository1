const { test,expect } = require("@playwright/test");
test('Multiple File Upload', async({page}) => {
    await page.goto('https://www.onlinenotepad.io/?edit-id=15284bb1-0793-406c-8208-3287a0928475');
    await page.keyboard.type('Welcome to Kerala')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('Enter')
    await page.keyboard.press('Control+V')

})