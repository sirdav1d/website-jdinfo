import { expect, test } from "@playwright/test"

test("homepage reviews use generic service labels without restricted terms", async ({ page }) => {
  await page.goto("/")

  const reviewsSection = page.locator("section").filter({
    has: page.getByRole("heading", { name: /Avaliações reais/i }),
  })

  await expect(reviewsSection).toBeVisible()
  await expect(reviewsSection.getByText("Notebook Apple Pro", { exact: true })).toBeVisible()
  await expect(reviewsSection.getByText("Atendimento de Notebook Apple Pro")).toHaveCount(0)
  await expect(reviewsSection.getByText("Reparo de MacBook Pro")).toHaveCount(0)
  await expect(
    reviewsSection.getByText(/conserto|assist[eê]ncia|reparo|manuten[cç][aã]o|manutencao|macbook/i),
  ).toHaveCount(0)
})
