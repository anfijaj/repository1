
const { test, expect } = require('@playwright/test');

test('Verify successful Broccoli order placement', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    const product = page.locator('.product').filter({ hasText: 'Brocolli' });
    await expect(product).toBeVisible();
    await product.getByRole('button', { name: 'ADD TO CART' }).click();
    console.log('Broccoli added to cart successfully');
    await page.locator('.cart-icon').click();
    await page.getByText('PROCEED TO CHECKOUT').click();
    await expect(page.locator('tbody')).toContainText('Brocolli');
    console.log('Product verified in shopping cart');
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.locator('select').selectOption({ label: 'India' });
    await page.locator('.chkAgree').check();
    await page.getByRole('button', { name: 'Proceed' }).click();
    const confirmationMessage = page.getByText(
        'Thank you, your order has been placed successfully'
    );

    await expect(confirmationMessage).toBeVisible();
    console.log('Order Confirmation:',await confirmationMessage.textContent()
    );

});
