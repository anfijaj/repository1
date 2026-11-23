import { test, expect } from '@playwright/test';
import{Loginpage} from "./Loginpage"
import { HomePage } from './homePage';
import { CartPage } from './CartPage';
import{PlaceholderPage} from './PlaceholderPage'



//Login
test('Launch application',async({page})=>{
    const login = new Loginpage(page)
    await login.navlink()
    await login.loginform('sibivarughese', 'test@123')

//Home
const home = new HomePage(page);
await home.addProductToCart("Nexus 6");
await page.waitForTimeout(3000)
await home.gotoCart();

//cartpage
const cart= new CartPage(page)
await page.waitForTimeout(50000)
const status = await cart.checkProductInCart("Nexus 6");

//placeholder
const order = new PlaceholderPage(page)
await order.clickonplaceOrderButton()
await order.fillcustomerdetails('jifna','india','kerala','152463','25','2026');
await order.clickonPurchase();

})