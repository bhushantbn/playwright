// @ts-nocheck
const {test,expect}=require("@playwright/test");

test('Verify Dropdown',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/signup/')
    await page.locator('#state').selectOption({label:'Goa'}) 
    await page.waitForTimeout(2000)
    await page.locator('#state').selectOption({value:'Himachal Pradesh'})
    await page.waitForTimeout(7000)
    await page.locator('#state').selectOption({index:3})
    const values=await page.locator('#state').textContent()
    console.log("All values:-"+values);
    await expect(values?.includes('Kerala')).toBeTruthy()

    let state=await page.$('#state')
    let allElements=await state?.$$('option')
    // @ts-ignore
    let ddStatus=false;
    for(let i=0;i<allElements.length;i++){
        let element=allElements[i]
        let value=await element.textContent()
        console.log("Value from dropdown using for loop:-",value);

        if(value.includes('Rajasthan')){
            ddStatus=true
            break
        }
        

    }
    await expect(ddStatus).toBeTruthy()
})