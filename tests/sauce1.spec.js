const {test,expect}=require('@playwright/test')
test ('Saucedemo test', async({page}) => {
     
    await page.goto('https://selenium.qabible.in/')
    await page.getByRole('link',{name:'Input Form'}).click()
    await page.getByRole('link',{name :'Checkbox Demo'}).click()
    await page.getByLabel('Click on this check box').check()
    await page.getByRole('link',{name : 'Radio Buttons Demo'}).click()
    
})
