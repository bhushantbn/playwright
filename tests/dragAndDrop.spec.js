// @ts-check

const { test, expect } = require("@playwright/test");

test("Test basic drag and drop Locator", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-drag-and-drop")
  await page.locator('#small-box').dragTo(page.locator('.large-box'))

});

test("Test Manual drag and drop Locator", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop")
    await page.locator('#small-box').hover()
    await page.mouse.down()
    await page.locator('.large-box').hover()
    await page.mouse.up()
  });
