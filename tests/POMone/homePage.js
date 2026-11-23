exports.HomePage = class HomePage{

    constructor(page){

        this.page = page;
        this.productList = "//*[@id='tbodyid']";
        this.addToCartButton = "a[onclick='addToCart(3)']";
        this.cartIcon = "#cartur";

    }

    async addProductToCart(productName){

        await this.page.waitForSelector(this.productList);
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
            if(productName == await product.textContent()){
                await product.click();
                break;
            }
        }

        this.page.on('dialog', async dialog =>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })

        await this.page.locator(this.addToCartButton);
    }

    async gotoCart(){
        
        await this.page.locator(this.cartIcon).click();
    }
    
}