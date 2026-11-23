const { expect } = require('@playwright/test');
class shippingDetails
{
constructor(page)
{
    this.page=page;
    this.fname=page.locator('#first-name')
    this.lname=page.locator('#last-name')
    this.postalcode=page.locator('#postal-code')
    this.continuebtn=page.locator('#continue')
}
async shipment(fname,lname,postalcode)
{
    await this.fname.fill(fname)
    await this.lname.fill(lname)
    await this.postalcode.fill(postalcode)

}
async submitshipping(){
    await this.continuebtn.click()
}
}

module.exports=shippingDetails