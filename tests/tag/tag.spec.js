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
   const users_data = [ 
        ["First1", "Last1", "tes1t@tsst.com", "25", "32693", "Eng"],
        ["First2", "Last2", "tes2t@tsst.com", "27", "345435", "IT"],
        ["First3", "Last3", "test3@tsst.com", "30", "354434", "BD"]
    ];
    users_data.forEach(data=>{

    

const {test, expect} = require("@playwright/test");

test.describe('Data driven test', ()=> {

    test(`create user ${data[0]}`, async ({page}) => {
        await page.goto('https://demoqa.com/webtables');
        await expect(page).toHaveTitle(/demosite/i);
        await page.locator('#addNewRecordButton').click();
        await page.getByPlaceholder('First Name').fill(data[0]);
        await page.getByPlaceholder('Last Name').fill(data[1]);
        await page.getByPlaceholder('name@example.com').fill(data[2]);
        await page.locator('#age').fill(data[3]);
        await page.locator('#salary').fill(data[4]);
        await page.locator('#department').fill(data[5]);
        await page.locator('#submit').click();
    })
})

})