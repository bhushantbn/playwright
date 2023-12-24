const {test,expect,chromium}= require('@playwright/test')

test('Rahul shetty login test case',async({page})=>{
    const browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('#userEmail').fill('bhushan.trivedi@meetanshi.com')
    await page.locator('#userPassword').fill('Ganesh385')
    await page.locator('#login').click()
    await expect(page).toHaveTitle("Let's Shop")
    await browser.close()
    await page.close()
})
test('Rahul shetty logout Link Visibility test case',async({page})=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('#userEmail').type('bhushan.trivedi@meetanshi.com')
    await page.locator('#userPassword').type('Ganesh385')
    await page.locator('[value="Login"]').click()
    await expect (page.getByText('Sign Out')).toBeVisible()
    await context.close()
    await browser.close()
    await page.close()

})
test('Rahul shetty logout Link Click test case',async({page})=>{
    const browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('#userEmail').type('bhushan.trivedi@meetanshi.com')
    await page.locator('#userPassword').type('Ganesh385')
    await page.locator('[value="Login"]').click()
    await page.getByText('Sign Out').click()
    await browser.close()
    await page.close()

})
test('Verify Login Success Message Test case',async({page})=>{
    const browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('#userEmail').type('bhushan.trivedi@meetanshi.com')
    await page.locator('#userPassword').type('Ganesh385')
    await page.locator('[value="Login"]').click()
    await expect(page.locator('.toast-container')).toContainText('Login Successfully')
    await browser.close()
    await page.close()

})
test('Verify Logout Success Message Test case',async({page})=>{
    const browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('#userEmail').type('bhushan.trivedi@meetanshi.com')
    await page.locator('#userPassword').type('Ganesh385')
    await page.locator('[value="Login"]').click()
    await page.getByText('Sign Out').click()
    await expect(page.locator('.toast-container')).toContainText('Logout Successfully')
    await browser.close()
    await page.close()

})
test('Check Logo Text Visible or Not',async({page})=>{
    const browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('#userEmail').type('bhushan.trivedi@meetanshi.com')
    await page.locator('#userPassword').type('Ganesh385')
    await page.locator('[value="Login"]').click()
    await expect(page.getByRole('heading',{name:'Automation'})).toBeVisible()
    await expect(page.getByText('Automation Practice')).toBeVisible()
    await browser.close()
    await page.close()

})
test('@Web Client App login', async ({ page }) => {
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          //add to cart
          await products.nth(i).locator("text= Add To Cart").click();
          break;
       }
    }
  
    await page.locator("[routerlink*='cart']").click();
    //await page.pause();
  
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
  
    await page.locator("[placeholder*='Country']").type("ind");
  
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
       const text = await dropdown.locator("button").nth(i).textContent();
       if (text === " India") {
          await dropdown.locator("button").nth(i).click();
          break;
       }
    }
  
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
  
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
  
  
    for (let i = 0; i < await rows.count(); ++i) {
       const rowOrderId = await rows.nth(i).locator("th").textContent();
       if (orderId.includes(rowOrderId)) {
          await rows.nth(i).locator("button").first().click();
          break;
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  
})
