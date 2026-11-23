

class summaryPage 

{
    constructor(page)
    {
        this.page=page;
        this.subtotal=page.locator('.summary_subtotal_label')
        this.finishbtn=page.locator('#finish')
    }
    async summaryDetails()
    {
        const itemtotal=await this.subtotal.textContent()
        console.log("Item total is ",itemtotal)
        await expect(itemtotal).toContain('Item total :$')

    }
    async clickFinish()
    {
        await this.finishbtn.click()
    }
}
module.exports= summaryPage