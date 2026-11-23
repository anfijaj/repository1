exports.Loginpage =class Loginpage{
constructor(page){

    this.page =page;
    this.loginbutton = '#login2';
    this.username = '#loginusername'
    this.password ='#loginpassword'
    this.loginbutton1="button[onclick='logIn()']";


}
async navlink()
{
    await this.page.goto('https://www.demoblaze.com/index.html')
}
async loginform(un,pass)
{
    await this.page.locator(this.loginbutton).click()
    await this.page.locator(this.username).fill(un)
    await this.page.locator(this.password).fill(pass)
    await this.page.locator(this.loginbutton1).click()

}
}