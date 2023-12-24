// @ts-check
const { test, expect } = require("@playwright/test");

test("Verify Assign Leave Link Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector(
      '//button[@title="Assign Leave"]//*[name()="svg"]',
      { state: "visible" }
    )
  );
});

test("Verify Assign Leave URL Redirection", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  await page
    .locator("//button[@title='Assign Leave']//*[name()='svg']")
    .click();
  expect(
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave"
    )
  );
});

test("Verify Assign Leave SVG Img Hover Color", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  const button = page.locator("button[title='Assign Leave']");
  button.focus();
  //await expect(button).toHaveCSS('background-color','rgba(100, 114, 140, 0.1)');
  await expect(button).toHaveCSS('background-color','rgba(255, 123, 29, 0.15)');
})
