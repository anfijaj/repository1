export async function login(page,un,pass) {
  await page.goto("https://www.saucedemo.com/");   await page.fill("#user-name", username);
    await page.fill("#user-name", un);
    await page.fill("#password", pass);
    await page.click("#login-button");

    
}