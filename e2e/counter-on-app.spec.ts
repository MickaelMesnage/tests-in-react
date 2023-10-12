import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const wholePage = await page.locator("body");

  await expect(wholePage).not.toContainText("Count is 0");

  await page.getByRole("button", { name: "Show counter" }).click();
  await expect(wholePage).toContainText("Count is 0");

  await page.getByRole("button", { name: "Show counter" }).click();
  await expect(wholePage).not.toContainText("Count is 0");
});
