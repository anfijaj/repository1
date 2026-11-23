const {test,expect}=require('@playwright/test')
// test('Verify Single Input Field',async({page})=>
// {
//     await page.goto('https://selenium.qabible.in/simple-form-demo.php')
//     const inputfield = await page.locator('#single-input-field')
//     await inputfield.fill('Helloworld')
//     await getbyrole('button',{name :'Show Message'}).click()
//     await expect (page.locator('#message-one')).toContainText('HelloWorld')


    
// })

test('Radio button',async({page})=>
{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php')
    await page.getByRole('radio').check()
    await page.locator('#button-one').nth(0).check()
    await expect(page.getByRole('radio')).toBeChecked()


})

test('Handling check box',async({page})=>
{
    await page.goto('https://selenium.qabible.in/check-box-demo.php')
    const cb = await page.getByRole('checkbox')
    await cb.nth(1).check()
      await cb.nth(2).check()
        await cb.nth(3).check()
          await cb.nth(4).check()

      await expect( cb.nth(1)).toBeChecked
      await expect( cb.nth(2)).toBeChecked
      await expect( cb.nth(3)).toBeChecked
      await expect( cb.nth(4)).toBeChecked
})