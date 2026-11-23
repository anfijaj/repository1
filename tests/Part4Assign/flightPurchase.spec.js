
const { test, expect } = require('@playwright/test');

test('End to End Flight Purchase', async ({ page }) => {

    // Step 1: Open BlazeDemo website
    await page.goto('https://blazedemo.com/');

    
    await page.locator('select[name="fromPort"]').selectOption('Boston');
    await page.locator('select[name="toPort"]').selectOption('New York');

    
    await expect(page.locator('select[name="fromPort"]'))
        .toHaveValue('Boston');

    await expect(page.locator('select[name="toPort"]'))
        .toHaveValue('New York');

   
    await page.getByRole('button', { name: 'Find Flights' }).click();

    // Step 2: Select Lufthansa flight
    const flightRow = page.locator('table tbody tr')
        .filter({ hasText: 'Lufthansa' });

    await expect(flightRow).toHaveCount(1);

    await flightRow.getByRole('button', {
        name: 'Choose This Flight'
    }).click();

    // Step 3: Verify purchase page
    await expect(page).toHaveURL(/purchase/);
    await expect(page).toHaveTitle(/purchase/i);

    // Step 4: Verify flight details
    
  await expect(page.locator('body')).toContainText('Airline: United');
  await expect(page.locator('body')).toContainText('Flight Number: UA954');
  await expect(page.locator('body')).toContainText('Price: 400');
  await expect(page.locator('body')).toContainText('Arbitrary Fees and Taxes: 514.76');
  await expect(page.locator('body')).toContainText('Total Cost: 914.76');
  

    // Step 5: Fill passenger details
    await page.locator('#inputName').fill('Playwright JS');

    await page.locator('#address').fill('Bangalore');

    await page.locator('#state').fill('Karnataka');

   
    await page.locator('#cardType').selectOption({ label: 'American Express' });

    
    await page.locator('#creditCardNumber')
        .fill('556622337788');

   
    await page.locator('#creditCardYear').fill('2025');

    
    await page.locator('#nameOnCard').fill('Playwright By Microsoft');
        await page.waitForTimeout(5000);

    // Step 6: Verify Remember Me checkbox
    await page.locator('#rememberMe').check();

    await expect(page.locator('#rememberMe'))
        .toBeChecked();


    await expect(page.locator('#inputName'))
        .toHaveValue('Playwright JS');

    await expect(page.locator('#address'))
        .toHaveValue('Bangalore');

    await expect(page.locator('#state'))
        .toHaveValue('Karnataka');

    await expect(page.locator('#cardType'))
        .toHaveValue('amex');

    await expect(page.locator('#creditCardNumber'))
        .toHaveValue('556622337788');

    await expect(page.locator('#creditCardYear'))
        .toHaveValue('2025');

    await expect(page.locator('#nameOnCard'))
        .toHaveValue('Playwright By Microsoft');

        await page.waitForTimeout(5000);

    // Step 7: Purchase flight
    await page.getByRole('button', {
        name: 'Purchase Flight'
    }).click();

    // Step 8: Verify confirmation page
    await expect(page).toHaveURL(/confirmation/);

    await expect(page.getByRole('heading', {
        name: 'Thank you for your purchase today!'
    })).toBeVisible();

   
    const orderID = page.locator('table tbody tr')
        .first()
        .locator('td')
        .nth(1);

    const generatedOrderID = (await orderID.textContent()).trim();


    expect(generatedOrderID).not.toBeNull();
    expect(generatedOrderID).not.toBe('');
    expect(generatedOrderID).toMatch(/\S/);


    console.log('Generated Order ID:', generatedOrderID);

});
