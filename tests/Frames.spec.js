import {test,expect,chromium} from '@playwright/test'
import { access } from 'fs'

test('verify frames',async({page})=>{
    let browser=await chromium.launch()
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const frame=page.frameLocator('#courses-iframe')
    await frame.locator("li a[href*='lifetime-access']:visible").click()
    const textCheck=await frame.locator('.text h2').textContent()
    console.log(textCheck.split(" ")[1])
    browser.close()
    page.close()
})