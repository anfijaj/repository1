import{test,expect} from "@playwright/test"
import { readCSV } from "./csvReader.js"
import path from 'path'
const csvData=readCSV(path.join(__dirname,'formcsvData.csv'))
//const data = readCSV(filePath);

//console.log(data);

csvData.forEach(data=>{
test(`form validation - ${data.firstName}`,async({page})=>
    {
    await page.goto('https://automationpracticehubapp.netlify.app/basic-elements')
    await page.getByLabel('username').fill('Admin')
    await page.getByLabel('Password',{exact :true}).fill('Hello@123')
    await page.getByRole('button',{name : "Sign In"}).click()
     await page.getByPlaceholder('Enter your first name').fill(data.firstName);
    await page.getByPlaceholder('Enter your last name').fill(data.lastName);
    await page.getByPlaceholder('Enter your email').fill(data.email);
    await page.getByPlaceholder('Enter your password').fill(data.password);
    await page.getByPlaceholder('Enter your feedback here...').fill(data.Feedback);
    await page.getByRole('button',{name : "Submit"}).first().click()
})

})