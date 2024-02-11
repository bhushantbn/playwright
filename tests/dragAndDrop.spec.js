import { test, expect, chromium } from "@playwright/test";
import { error } from "console";

test("Test basic drag and drop Locator", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-drag-and-drop");
  await page.locator("#small-box").dragTo(page.locator(".large-box"));
});

test("Test Manual drag and drop Locator", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-drag-and-drop");
  await page.locator("#small-box").hover();
  await page.mouse.down();
  await page.locator(".large-box").hover();
  await page.mouse.up();
});
test("drag and drop function", async ({ page }) => {
  let browser = await chromium.launch();
  await page.goto("https://letcode.in/dropable");
  const src = await page.$("#draggable");
  const dest = await page.$("#droppable");
  if (src && dest) {
    const srcBound = await src.boundingBox();
    const destBound = await dest.boundingBox();
    if (srcBound && destBound) {
      await page.mouse.move(
        srcBound.x,
        srcBound.width / 2,
        srcBound.y,
        srcBound.height / 2
      );
      await page.mouse.down();
      await page.mouse.move(
        destBound.x,
        destBound.width / 2,
        destBound.y,
        destBound.height / 2
      );
      await page.mouse.down();
    } else {
      throw new Error("Somthing went wrong. No element found");
    }
  }
});

test("drag and drop in frame", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  const frame = await page.frame({url:
    "https://jqueryui.com/droppable/resources/demos/droppable/default.html"
  });
  const src = await frame.$("#draggable");
  const dest = await frame.$("#droppable");

  const srcBound = await src.boundingBox();
  const destBound = await dest.boundingBox();
 
  if (frame) {
    const srcBound = await src.boundingBox();
    const destBound = await dest.boundingBox();
    if (srcBound && destBound) {
      await page.mouse.move(
        srcBound.x,
        srcBound.width / 2,
        srcBound.y,
        srcBound.height / 2
      );
      await page.mouse.down();
      await page.mouse.move(
        destBound.x,
        destBound.width / 2,
        destBound.y,
        destBound.height / 2
      );
      await page.mouse.down();
    } else {
      throw new Error("Somthing went wrong. No element found");
    }
  }
});
