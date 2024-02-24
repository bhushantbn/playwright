import { test, expect, chromium } from "@playwright/test";
import { assert, log } from "console";

test("Alert dialog box", async ({ page, browser }) => {
  await page.goto("https://demoqa.com/alerts");
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("You clicked a button");
    await dialog.accept();
  });
  await page.click('//button[@id="alertButton"]');
  await page.waitForTimeout(5000);
  await page.close();
});
test("Confirm dialog box", async ({ page, browser }) => {
  await page.goto("https://demoqa.com/alerts");
  page.on("dialog", async (dialog) => {
    await dialog.accept();
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Do you confirm action?");
    expect(page.locator("#confirmResult")).toHaveText("You selected Ok");
  });
  await page.click('//button[@id="confirmButton"]');
  await page.waitForTimeout(2000);
  await page.close();
});
test("Cancel dialog box", async ({ page, browser }) => {
  await page.goto("https://demoqa.com/alerts");
  page.on("dialog", async (dialog) => {
    assert(dialog.type === "beforeunload");
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Do you confirm action?");
    await dialog.dismiss();
  });
  await page.click('//button[@id="confirmButton"]');
  await expect(page.locator("#confirmResult")).toHaveText(
    "You selected Cancel"
  );
  await page.waitForTimeout(2000);
  await page.close();
});
test("Prompt dialog box", async ({ page, browser }) => {
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name");
        await dialog.accept("Copilot");
        //expect(dialog.defaultValue()).toHaveText("Copilot")
    });
    await page.click("#promtButton");
    await page.waitForTimeout(2000);
    // Check that the page shows a message with the name Copilot
    const message = await page.innerText("#promptResult");
    expect(message).toContain("You entered Copilot");
    await page.close();
  });

  test.only("Cancel Prompt dialog", async ({ page, browser }) => {
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name");
        await dialog.dismiss()
        //expect(dialog.defaultValue()).toHaveText("Copilot")
    });
    await page.click("#promtButton");
    await page.waitForTimeout(2000);
    await page.close()
  });