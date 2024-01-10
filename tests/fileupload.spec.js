import { test, expect } from "@playwright/test";

test("check single File upload", async ({ page }) => {
  await page.goto("https://www.foundit.in/");
  await page.waitForSelector(".mqfihd-upload");
  await page.locator(".mqfihd-upload").click();
  await page
    .locator("#file-upload")
    .setInputFiles("tests/uploadfiles/sample.pdf");
  await page.waitForTimeout(5000);
});

test.only("check mulitple file upload", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/uploadfiles/dummy.pdf",
      "tests/uploadfiles/sample.pdf",
    ]);
  await page.waitForTimeout(3000);
  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "dummy.pdf"
  );
  expect(await page.locator("#fileList li:nth-child(2)")).toHaveText(
    "sample.pdf"
  );
  await page.waitForTimeout(3000)
  await page.locator("#filesToUpload").setInputFiles([])
  await page.waitForTimeout(3000)
  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "No Files Selected"
  )
  await page.waitForTimeout(3000)
});
