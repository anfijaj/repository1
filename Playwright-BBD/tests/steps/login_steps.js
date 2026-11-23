// const { createBdd } = require('playwright-bdd');
// const { LoginPage } = require('../pages/loginPage');
// const { expect } = require('@playwright/test');

// const { Given, Then, Before, When } = createBdd();

// let loginPage;

// Before ( async({page})=>{

// loginPage=new LoginPage(page);

// })
// Given('I navigate to {string}',async({},url)=>{
// await loginPage.launchUrl(url);

// })

// Given('I enter the username {string}',async({},username)=>{
// await loginPage.enterUsername(username);

// })

// Given('I enter the password as {string}',async ({},password)=>
//     {
//         await loginPage.enterPassword(password);

//     })
// When('I click on the login button',async ({})=>
//     {
//         await loginPage.clickLoginButton()
//     })

//     Then('I should see the page contains {string}',async ({},expectedText)=>
//     {
//             await expect(loginPage.successMessage).toContainText(expectedText);
//     })


    const { createBdd } = require('playwright-bdd');
// const { LoginPage } = require('../pages/loginPage');
const { expect } = require('playwright/test');
const { Given, When, Then, Before } = createBdd();
const { LoginOutPage } = require('../pages/loginoutPage')

let loginPage;

Before(async ({ page }) => {

  loginPage = new LoginPage(page);

});

Given ('I navigate to {string}', async({},url) =>{

    await loginPage.launchUrl(url);

})

Given ('I enter username {string}', async({},username) =>{

    await loginPage.enterUsername(username);

})

Given ('I enter password {string}', async({},password) =>{

    await loginPage.enterPassword(password);

})

When ('I click on the login button', async({}) => {

    await loginPage.clickLogin();
})

Then ('I should see the page containing {string}', async({},expectedText) => {

    await expect(loginPage.successMessage).toContainText(expectedText);

})

Then('I should see the error message {string}', async ({page}, error) => {

    await expect(page.locator('#error')).toHaveText(error);

});









