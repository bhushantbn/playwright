import {test,expect} from '@playwright/test'

test('Multiple Contexts in a Single Test',async({browser})=>{
    const adminContext=await browser.newContext();
    const userContext=await browser.newContext();

    const adminPage=await adminContext.newPage();
    const userPage=await userContext.newPage();

    await userPage.goto('https://meetanshi.in/m2d1/')
    await adminPage.goto('https://meetanshi.in/m2d1/admin/')
    await adminPage.waitForTimeout(2000)
    await adminPage.locator('#username').selectOption({value:'Missing-Orders'})
    await adminContext.close()
    await userContext.close()
    await adminPage.close()
    await userPage.close()
})