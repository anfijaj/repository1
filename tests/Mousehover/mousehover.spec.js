 const { test,expect } = require("@playwright/test");
// test('Iframe', async({page}) => {

//     await page.goto('https://the-internet.herokuapp.com/hovers');
//     const user1=page.locator("xpath=//img[@alt='User Avatar']").nth(0)
//      const user2=page.locator("xpath=//img[@alt='User Avatar']").nth(1)
//       const user3=page.locator("xpath=//img[@alt='User Avatar']").nth(2)
// await user1.hover()
// await user2.hover()
// await user3.hover()
// await page.waitForTimeout(2000)
// await page.close()


// })

// const { test,expect } = require("@playwright/test");
//  test.skip('Iframe', async({page}) => {
// await page.goto('https://qa-practice.netlify.app/double-click');
// await page.locator('#double-click-btn').dblclick
//  await page.waitForTimeout(5000)
// await page.close()

//  })
//const { test,expect } = require("@playwright/test")
// test.skip('Verify right click', async ({page})=> {
//  await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
//  const button= page.locator(".context-menu-one");//  //span[@class='context-menu-one btn btn-neutral']
//  await button.click({button: "right"})
//  await page.waitForTimeout(2000)
//  await page.close()

// })
//const { test,expect } = require("@playwright/test")
//test.skip('Verify right click', async ({page})=> {
//  await page.goto('https://jqueryui.com/droppable/');
//     const iFrame = page.frameLocator(".demo-frame");

//     const toDrag = await iFrame.locator("#draggable");

//     const toDrop = await iFrame.locator("#droppable");
    
//     await toDrag.dragTo(toDrop);
    
//     await page.waitForTimeout(3000)


// })

// test.skip('JavaScript Confirm Alert Test', async ({ page }) => {

//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//     page.on("dialog", (dia) => {

//         expect(dia.message()).toBe("I am a JS Confirm");
//         dia.accept();
//     })

//      await page.locator("//button[@onclick='jsConfirm()']").click();
//      await expect(page.locator('#result')).toHaveText('You clicked: Ok');
     
// })

test('Promt Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", (dia) => {

        expect(dia.message()).toBe("I am a JS prompt");
        dia.accept("Welcome to Testing.");
    })

     await page.locator("//button[@onclick='jsPrompt()']").click();
     await expect(page.locator('#result')).toHaveText('You entered: Welcome to Testing.');

})

