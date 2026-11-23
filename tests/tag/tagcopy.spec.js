// const { test,expect } = require("@playwright/test");
// test.describe('Dat driven',()=>{
//     test('crate user',async({page}))=>{
//     await page.goto('https://demoqa.com/webtables/');
//     await expect(page).toHaveTitle('/demosite/i')
//     await page.locator('#addNewRecordButton').click()
//     await page.getByPlaceholder('First Name').fill('Anjali')
//     await page.getByPlaceholder('Second Name').fill('Manon')
//     await page.getByPlaceholder('name@example.com').fill('gmail.com')
//    await page.getByPlaceholder('Age').fill('17')
//    await page.locator('#submit').click()

//     })

// })
   
   
const {test, expect} = require("@playwright/test");
var emp_data=require('../../testData.json')

test.describe('Data driven test', ()=> {

     emp_data.forEach(data=>{

    test(`create user ${data.FirstName}`, async ({page}) => {
        await page.goto('https://demoqa.com/webtables');
        await expect(page).toHaveTitle(/demosite/i);
        await page.locator('#addNewRecordButton').click();
        await page.getByPlaceholder('First Name').fill(data.FirstName);
        await page.getByPlaceholder('Last Name').fill(data.LastName);
        await page.getByPlaceholder('name@example.com').fill(data.EmailAddress);
        await page.locator('#age').fill(data.Age);
        await page.locator('#salary').fill(data.Salary);
        await page.locator('#department').fill(data.Depart);
        await page.locator('#submit').click();
    })
})

})