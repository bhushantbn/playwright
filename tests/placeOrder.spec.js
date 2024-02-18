import { test, expect, request } from "@playwright/test";
import { apiUtils } from "./utils/apiUtils";
const loginPayload = {
  userEmail: "bhushan.trivedi@meetanshi.com",
  userPassword: "Ganesh385",
};
const orderPayLoad = {
  orders: [{ country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0" }],
};
let token;
let orderId;
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new apiUtils(apiContext, loginPayload);
  apiUtils.createOrder(orderPayload);
});

test("Place the order", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  const email = "";
  const productName = "Zara Coat 4";
  await page.goto("https://rahulshettyacademy.com/client/");
  const products = page.locator(".card-body");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click();
  await page.pause();
});
