const { test,expect } = require("@playwright/test");
test('Date picker',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').click()
    console.log(await page.locator('#datepicker').getAttribute('type'));
    await page.locator('#datepicker').fill('10/12/2026')
    await page.keyboard.press('Enter');

    await page.locator('#txtDate').click()
    console.log(await page.locator('#txtDate').getAttribute('type'));
    await dateField.fill('2026-12-10');
    //await page.locator('#txtDate').fill('01/10/2026')
    await page.keyboard.press('Enter');

})