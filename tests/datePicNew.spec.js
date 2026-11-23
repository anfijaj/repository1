const { test,expect } = require("@playwright/test");
test('Date picker New',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Datepicker.html')
    await page.locator('#datepicker1').click()
    const exp_yr = '2026';
    const exp_mt = 'August';
    const exp_day = '20';
   while(true){

        const month = await page.locator(".ui-datepicker-month").textContent();
        const year = await page.locator(".ui-datepicker-year").textContent();
        
        if( year == exp_yr && month == exp_mt){
            break;
        }
        
        await page.locator("//a[@data-handler='prev']").click();
    }

    await page.locator(`//a[@class='ui-state-default' and text()='${exp_day}']`).click();
})