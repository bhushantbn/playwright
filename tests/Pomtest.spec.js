import {test,expect, chromium} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";

test("Login Page object model",async({page})=>{

    let browser=await chromium.launch()

    //LoginPage
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    //HomePage
    const home=new HomePage(page);
    await home.addProductToCart('Nexus 6')
    await page.waitForTimeout(3000)
    await home.gotoCart()

    //CartPage
    const cartPage=new CartPage(page)
    await page.waitForTimeout(3000)
    const status=await cartPage.checkProductInCart('Nexus 6')
    expect(await status).toBe(true)
    browser.close()
    page.close()

    
})
