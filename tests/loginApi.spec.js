import { test, expect, request } from "@playwright/test";
const loginPayload = {
  userEmail: "bhushan.trivedi@meetanshi.com",
  userPassword: "Ganesh385",
};
let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayload,
    }
  );
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJSON = await loginResponse.json();
  token = loginResponseJSON.token;
  console.log(token);
});

test("Client App login", async ({ page }) => {
  
  page.addInitScript(value => {
    window.localStorage.setItem("token", value);
  }, token);

  const email = "";
  const productName = "Zara Coat 4";
  await page.goto("https://rahulshettyacademy.com/client/")
  const products = page.locator(".card-body");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();
  for (let i = 0; i <= count; i++) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click();
  await page.pause();

  // await page.locator("div li").first().waitFor();
  // const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
  // expect(bool).toBeTruthy();
  // await page.locator("text=Checkout").click();

  // await page.locator("[placeholder*='Country']").type("ind");

  // const dropdown = page.locator(".ta-results");
  // await dropdown.waitFor();
  // const optionsCount = await dropdown.locator("button").count();
  // for (let i = 0; i < optionsCount; ++i) {
  //   const text = await dropdown.locator("button").nth(i).textContent();
  //   if (text === " India") {
  //     await dropdown.locator("button").nth(i).click();
  //     break;
  //   }
  // }

  // expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  // await page.locator(".action__submit").click();
  // await expect(page.locator(".hero-primary")).toHaveText(
  //   " Thankyou for the order. "
  // );
  // const orderId = await page
  //   .locator(".em-spacer-1 .ng-star-inserted")
  //   .textContent();
  // console.log(orderId);
});
