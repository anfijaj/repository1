const { test,expect } = require("@playwright/test");
test ('Handling drop down using 3 method', async({page}) => {

    await page.goto('https://selenium.qabible.in/select-input.php')
    await page.locator('#single-input-field').selectOption({label:'Red'})

  console.log('Selected the value by label:',await page.locator('#single-input-field').inputValue())

    await page.locator('#single-input-field').selectOption({value:'Yellow'})
    console.log('Selected the value by value:',await page.locator('#single-input-field').inputValue())
   
    await page.locator('#single-input-field').selectOption({index:3})
     console.log('Selected the value by index:',await page.locator('#single-input-field').inputValue())
    

})