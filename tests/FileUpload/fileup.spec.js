const { test,expect } = require("@playwright/test");
test('Multiple File Upload', async({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("#filesToUpload").setInputFiles(['tests\\FileUpload\\sample_640×426.jpg','tests\\FileUpload\\sample_1280×853.jpg']);
    await page.waitForTimeout(5000);
    await page.close();
})
