const { test, expect } = require('@playwright/test');

test('case1', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator('form')).toContainText('Email and Password is required');
})
   
//const { test, expect } = require('@playwright/test');

test('case2 - Login with Email Only', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('sibi@gmail.com');

    await page.locator("//button[@type='submit']").click();
    await expect(page.locator('form')).toContainText('Password is required');


});

//const { test, expect } = require('@playwright/test');

test('case3 - Login with Password Only', async ({ page }) => {

    // Step 1: Navigate to login page
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#password1').fill('sibi@gmail.com');
    await page.locator("//button[@type='submit']").click();

    await expect(page.locator('form')).toContainText('Email is required');

});

test('case4', async ({ page }) => {

    // Step 1: Navigate to login page
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('sib1i@gmail.com');
    await page.locator('#password1').fill('sib1i@gmail.com');
    await page.locator("//button[@type='submit']").click();

    //await expect(page.locator('form')).toContainText('USER Email Doesnt Exist');
   const errorMsg = page.locator("//h2[@class='errorMessage']");

    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("USER Email");
});

