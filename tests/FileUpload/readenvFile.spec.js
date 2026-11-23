import {test,expect} from "@playwright/test"
import dotenv from 'dotenv';
dotenv.config()
const users =[
    {
        username :"standard_user"
    },
    {
        username:"error_user"
    },
    {
        username:"visual_user"
    }
]
for(const user of users)
{
    test (`Login with ${user.username}`,async({page})=>{
    await page.goto(process.env.URL)
    await page.fill('#user-name',user.username)
    await page.fill('#password',process.env.PASSWORD)
    await page.click('#login-button')
    await expect(page).toHaveURL(/inventory/)
})
}