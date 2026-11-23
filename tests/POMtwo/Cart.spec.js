class Cart{

    constructor(page){

        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cart = page.locator('.cart_item .inventory_item_name');
        this.checkoutButton = page.locator('#checkout');

    }

    async getChecked(){
        await this.cartIcon.click();
    
    }

    async clickCheckout(){
        await this.checkoutButton.click();
    }

}

module.exports = Cart;