import { expect, test } from "@playwright/test"

test("homepage hero uses approved store headline", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Loja de Informática em Niterói — Notebooks, PC Gamer e Consoles",
    }),
  ).toBeVisible()
  await expect(
    page.getByText(/Assistência técnica para notebook, MacBook, consoles e PC Gamer/i),
  ).toHaveCount(0)
})
