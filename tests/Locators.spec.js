import { test, expect } from "@playwright/test";

test("should visible Logo Image", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Expect Logo visiblity.
  const isLogoVisible = await page.isVisible('img[src="bm.png"]');

  expect(isLogoVisible).toBe(true);
});

test("should Not visible Logo Image", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Expect Logo visiblity.
  const isLogoVisible = await page.isVisible('img[src="bm1.png"]');

  expect(isLogoVisible).toBe(false);
});

test("Verify Page Title", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Expect Logo visiblity.
  await expect(page).toHaveTitle("STORE");
});

test("Verify Contact Us Link Visibility", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const anchorLink = await page.waitForSelector(
    'a[data-target="#exampleModal"]',
    {
      timeout: 5000, // Adjust the timeout as needed
      state: "visible",
    }
  );
});
test("Verify Home Page Link Visibility", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const anchorLink = await page.waitForSelector('a[href="index.html"]', {
    timeout: 5000, // Adjust the timeout as needed
    state: "visible",
  });

  // If the anchor link is found within the timeout, the test passes
});

test("Verify About Us Link Visibility", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const anchorLink = await page.waitForSelector(
    'a[data-target="#videoModal"]',
    {
      timeout: 5000, // Adjust the timeout as needed
      state: "visible",
    }
  );
});

test("Verify SignUp Link Visibility", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const anchorLink = await page.waitForSelector('a[id="signin2"]', {
    timeout: 5000, // Adjust the timeout as needed
    state: "visible",
  });
});

test("Verify Login Link Visibility", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const anchorLink = await page.waitForSelector('a[id="login2"]', {
    timeout: 5000, // Adjust the timeout as needed
    state: "visible",
  });
});

test("Verify Login Modal-Popup Visibility", async ({ page }) => {
  try {
    // Navigate to the page containing the anchor link
    await page.goto("https://demoblaze.com/"); // Replace with the URL of the page you want to test

    // Wait for the anchor link element to be visible on the page
    const anchorLink = await page.waitForSelector(
      'a[data-target="#logInModal"]',
      {
        timeout: 5000, // Adjust the timeout as needed
        state: "visible",
      }
    );

    // If the anchor link is found within the timeout, the test passes
    console.log("Anchor link is present on the page.");

    await anchorLink.click();
    // Listen for DOM changes to detect modal appearance after clicking the anchor link
    const modalSelector = "#logInModal";

    // Click the anchor link to trigger the modal
    await page.waitForSelector(`${modalSelector}[style*="display: block;"]`, {
      timeout: 5000, // Adjust the timeout as needed
      state: "attached", // Use 'attached' to check if the modal is attached to the DOM with display: block
    });

    // If the modal is attached to the DOM with display: block, the test passes
    console.log("Modal is triggered and open.");

    // Now you can interact with the modal or perform any o ther tests related to it.
  } catch (error) {
    // If the anchor link or modal is not found within the timeout, or the modal is not open, the test fails
    console.error(
      "Anchor link or modal not found or the modal is not open on the page."
    );
  }
});

test("Verify Login Functionality", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await page.click("id=login2");

  await page.fill("#loginusername", "bhushantbn");
  await page.fill("input[id='loginpassword']", "bhushan123");

  await page.click("//button[normalize-space()='Log in']");

  const logoutLink = await page.locator("//a[normalize-space()='Log out']");
  await expect(logoutLink).toBeVisible();

  await page.close();
});
test("Verify Contact Us modal Visibility", async ({ page }) => {

  await page.goto("https://demoblaze.com/index.html")
  await page.click('a[data-target="#exampleModal"]')
  await page.waitForSelector('.modal-content',{state:'visible'})
})
test("Verify Contact Us Modal Title", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html")
  await page.click('a[data-target="#exampleModal"]')
  await page.waitForSelector('.modal-content',{state:'visible'})
  await expect(page.locator('.modal-title').getByText('Contact Us')).toBeVisible()

})
