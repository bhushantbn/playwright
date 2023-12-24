import { test, expect } from "@playwright/test";

test.skip("has title", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test.skip("has Login URL", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a Login URL
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

test.skip("has Visible Logo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect Logo visiblity.
  const isLogoVisible = await page.waitForSelector("img", { state: "visible" });

  expect(isLogoVisible).toBeTruthy();
});

test.skip("Should Not Visible Logo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect Logo visiblity.
  const isLogoVisible = await page.locator("img");

  expect(isLogoVisible).toHaveAttribute("src", "/web/images/ohrm_logo1.png");
});
test("Verify Login Page Dashboard", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const usernameInput = page.locator("//input[@placeholder='Username']");
  const passwordInput = page.locator("//input[@placeholder='Password']");
  const Button = page.locator("//button[@type='submit']");

  await usernameInput.fill("Admin");
  await passwordInput.fill("admin123");
  await Button.click();

  const nameElement = await page.locator("span.oxd-topbar-header-breadcrumb");

  // Wait for the name element to be visible
  await nameElement.waitFor({ state: "visible" });

  // Assert that the name element is visible
  await expect(nameElement).toBeVisible();
});

test("Verify User Profile Image Alt Text", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const usernameInput = page.locator("//input[@placeholder='Username']");
  const passwordInput = page.locator("//input[@placeholder='Password']");
  const Button = page.locator("//button[@type='submit']");

  await usernameInput.fill("Admin");
  await passwordInput.fill("admin123");
  await Button.click();

  await expect(page.getByAltText("profile picture")).toBeVisible();
});

test("Verify User Profile Name", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  await page.getByAltText("profile picture").click();
  const profileName = await page
    .locator("p.oxd-userdropdown-name")
    .textContent();
  //await profileName.waitFor({state:'visible'});
  await expect(profileName).toContain("Paul Collings");
});
test("Verify Time at Work Section Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector('//p[normalize-space()="Time at Work"]', {
      state: "visible",
    })
  );
});
test("Verify My Actions Section Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector('//p[normalize-space()="My Actions"]', {
      state: "visible",
    })
  );
});
test("Verify Quick Launch Section Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector('//p[normalize-space()="Quick Launch"]', {
      state: "visible",
    })
  );
});
test("Verify Buzz Latest Posts Section Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector('//p[normalize-space()="Buzz Latest Posts"]', {
      state: "visible",
    })
  );
});
test("Verify Employees on Leave Today Section Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector(
      '//p[normalize-space()="Employees on Leave Today"]',
      {
        state: "visible",
      }
    )
  );
});
test("Verify Employee Distribution by Sub Unit Section Visibility", async ({
  page,
}) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector(
      '//p[normalize-space()="Employee Distribution by Sub Unit"]',
      {
        state: "visible",
      }
    )
  );
});
test("Verify Employee Distribution by Location Section Visibility", async ({
  page,
}) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector(
      '//p[normalize-space()="Employee Distribution by Location"]',
      {
        state: "visible",
      }
    )
  );
});
test("Verify Footer Copyright Visibility", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  expect(
    await page.waitForSelector(
      'div[class="oxd-layout-footer"] p:nth-child(2)',
      {
        state: "visible",
      }
    )
  );
});
