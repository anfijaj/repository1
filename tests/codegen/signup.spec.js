import { test, expect } from '@playwright/test';

test.skip('signup', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('kumaran');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('kuma@email.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('kumaran@123');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).press('Tab');
  await page.getByRole('checkbox', { name: 'JavaScript' }).check();
  await page.getByRole('checkbox', { name: 'PlaywrightTests' }).check();
  await page.getByText('State:Select StateAndhra').click();
  await page.locator('#state').selectOption('Manipur');
  await page.locator('#hobbies').selectOption('Swimming');
  await page.getByRole('button', { name: 'Sign up' }).click();
});

// import { test, expect } from '@playwright/test';

test.skip('add to cart', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Learn Automation Courses', exact: true })).toBeVisible();
  await page.getByRole('heading', { name: 'Learn Automation Courses' }).click();
  await page.getByRole('button', { name: 'Add to Cart right arrow' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart right arrow' }).nth(5).click();
  await expect(page.locator('#root')).toContainText('Add to Cart');
  await expect(page.locator('h1')).toContainText('Learn Automation Courses');
  await page.getByRole('button', { name: 'Cart 2' }).click();
  await expect(page.locator('#root')).toContainText('Remove from Cart');
  await page.getByRole('button', { name: 'Remove from Cart right arrow' }).nth(1).click();
  await page.getByRole('button', { name: 'Enroll Now' }).click();
  await page.getByText('AddressPhone NumberTotal').click();
  await page.getByText('AddressPhone NumberTotal').click();
  await page.locator('#address').click();
  await page.locator('#address').fill('fdfdfdfasdf');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('152874963');
  await page.getByRole('dialog').getByRole('button', { name: 'Enroll Now' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});



test.only('all controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).click();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('india');
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).press('Enter');
  await page.locator('#ui-id-3').click();
  await page.locator('#dropdown-class-example').selectOption('option1');
  await page.locator('#checkBoxOption2').check();
  await page.locator('#checkBoxOption3').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('h1')).toContainText('Invalid SSL certificate');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page2 = await page2Promise;
  await expect(page2.getByRole('banner')).toContainText('Visit cloudflare.com for more information.');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('guest');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  await expect(page.locator('body')).toContainText('Selenium Webdriver with Java Basics + Advanced + Interview Guide');
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('list').nth(1).click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: ' Register' }).click();
  await page.getByText('iFrame Example').click();
});