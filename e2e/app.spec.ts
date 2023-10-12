import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("heading", { name: "Test in react" }).click();
  await page
    .getByRole("heading", { name: "Vite + React + Vitest + testing library" })
    .click();
  await page.getByText("Unit tests with vitest and react").click();
  await page.getByRole("heading", { name: "Playwright" }).click();
  await page.getByText("End to end test with playwright").click();
});
