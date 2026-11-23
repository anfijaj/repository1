exports.PlaceholderPage = class PlaceholderPagePage{
constructor (page)
{
    this.page=page;
    this.placeOrderButton = 'button[data-target="#orderModal"]';
    this.username='#name'
    this.country='#country'
    this.city='#city'
    this.card='#card'
    this.month='#month'
    this.year='#year'
    this.purchasebutton='button[onclick="purchaseOrder()"]'
    this.ok='.confirm btn btn-lg btn-primary'
    
}
async clickonplaceOrderButton()
{
    await this.page.locator(this.placeholderButton).click();

}
async fillcustomerdetails(name,country,city,creditcard,month,year)
{
    await this.page.locator(this.username).fill(name)
    await this.page.locator(this.country).fill(country)
    await this.page.locator(this.city).fill(city)
    await this.page.locator(this.card).fill(creditcard)
    await this.page.locator(this.month).fill(month)
    await this.page.locator(this.year).fill(year)

}
async clickonPurchase()
{
    await this.page.locator(this.purchasebutton).click();

}
}