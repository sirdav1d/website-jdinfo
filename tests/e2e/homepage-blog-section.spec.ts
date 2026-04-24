import { expect, test } from "@playwright/test"

test("homepage does not render the blog section", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: /Conteúdo que ajuda a decidir melhor/i,
    }),
  ).toHaveCount(0)
  await expect(page.getByRole("link", { name: /Ver todos os artigos/i })).toHaveCount(0)
  await expect(page.getByText(/Ler artigo em destaque/i)).toHaveCount(0)
})
