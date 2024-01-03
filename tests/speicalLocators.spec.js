import {test,expect,chromium} from '@playwright/test'

test('Verify Select Control By Label TestCase',async({page})=>{
    const browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByLabel("Check me out if you Love IceCreams!").check()
    await page.getByLabel('Employed').check()
    await page.getByLabel('Gender').selectOption('Male')
    await page.getByPlaceholder("Password").fill('abc123')
    await page.getByRole('button',{name:'Submit'}).click()
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible()
    await browser.close()
    await page.close()
})
