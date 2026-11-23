const { test, expect } = require('@playwright/test');
const Login = require('./LoginPage.spec.js');
const Dashboard = require('./dashboardPage.spec.js')
const Cart =require('./Cart.spec.js')
const shippingDetails=require('./ShippingDetailspage.spec.js')
const summaryDetails =require('./SummaryPage.spec.js')

test('End to end', async ({ page }) => {

    const username = 'standard_user';
    const password = 'secret_sauce';

    const productName = 'Sauce Labs Backpack';
    const login = new Login(page);

    await login.gotoNavigation();
    await login.validLogin(username, password);

    // Dashboard
    const dashboard = new Dashboard(page);

    await dashboard.printProducts();
    await dashboard.selectProduct(productName);
    //Cart
    const cart = new Cart(page)
    await cart.getChecked()
    await cart.clickCheckout()

    //shipping Details
    const shipped=new shippingDetails(page);
    await shipped.shipment('Anu','thomas','65234')
    await shipped.submitshipping()

    //summary
    const sum=new summaryDetails(page)
    await sum.summaryDetails()
    await sum.clickFinish()


    });
