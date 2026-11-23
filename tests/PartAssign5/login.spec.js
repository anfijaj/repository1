import { test, expect } from '@playwright/test';

test.describe('QA Brains Login Module', () => {

    // Navigate before every test case
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.qabrains.com/ecommerce/login');
    });

    // 1. Smoke Testing
    test('Verify login with valid credentials @smoke @login', async ({ page }) => {

        await page.getByLabel('Email').fill('test@qabrains.com');
        await page.getByLabel('Password').fill('Password123');

        await page.getByRole('button', { name: 'Login' }).click();

        // Verify successful redirection
        await expect(page).toHaveURL(/ecommerce/);

    });

    // 2. Regression Testing
    test('Verify login with invalid credentials @regression @login', async ({ page }) => {

        await page.getByLabel('Email').fill('wrong@gmail.com');
        await page.getByLabel('Password').fill('Wrong123');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.locator('ol')).toContainText('Neither email nor password matched.');

    });

    // 3. Sanity Testing
    test('Verify validation when email is empty @sanity @login', async ({ page }) => {

        const email = page.getByLabel('Email');
        // Leave email empty and enter valid password
        await email.fill('');
        await page.getByLabel('Password').fill('Password123');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByRole('paragraph')).toContainText('Email is a required field');
    });

});