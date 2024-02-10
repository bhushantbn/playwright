import { test, expect, chromium } from "@playwright/test";

test("HTTP Authentication Heading", async ({ browser,page }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  const heading = await page.$("h3");
  if (heading) {
    console.log(await heading.textContent());
    await expect(page.locator("div.example>h3")).toHaveText("Basic Auth");
  }
});
test("HTTP Authentication Paragraph", async ({ browser,page }) => {
    await page.setViewportSize({width:1920,height:1080})
    const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  const Paragraph = await page.$("p");
  if (Paragraph) {
    console.log(await Paragraph.textContent());
    await expect(page.locator("div.example>p")).toHaveText(
      "Congratulations! You must have the proper credentials."
    );
  }
});
