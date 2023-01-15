import { test, expect } from "@playwright/test";

test("has button", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const button = page.getByRole("button", { name: /My button/i });

  await expect(button).toBeVisible();
});
