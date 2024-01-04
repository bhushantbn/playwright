import {test,expect} from '@playwright/test'

test('Verify hidden dropdwon fields',async({page})=>{
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@placeholder="Username"]').fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123");
    await page.locator("//button[@type='submit']").click()
    await page.locator('//span[normalize-space()="PIM"]').click()
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div').click()
    
    await page.waitForTimeout(3000)
    const options=await page.$$("//div[@role='listbox']//span")
    for(let option of options){
        const jobTitle=await option.textContent()
        if(jobTitle.includes("QA Engineer")){
            await option.click()
            break
        }
        //console.log(jobTitle);
    }
})