import {test,expect} from '@playwright/test'
let page;
test.beforeEach(async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.getByRole('button',{name:'Log In'}).click()
})
test.afterEach(async()=>{
    await page.locator('#logout2').click()
})
test('Home page Test',async()=>{
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.getByRole('button',{name:'Log In'}).click()
    const products=await page.$$('.hrefch')
    await page.waitForTimeout(3000)
    expect(products).toHaveLength(9)
    await page.waitForTimeout(3000)
})

test('Add product Test',async()=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:'Samsung galaxy s6'}).click()
    await page.waitForTimeout(3000)
    await page.locator('//a[normalize-space()="Add to cart"]').click()
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    await page.waitForTimeout(3000)
})