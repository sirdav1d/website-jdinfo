import { expect, test } from "@playwright/test"

test("footer service links use generic anchor text", async ({ page }) => {
  await page.goto("/")

  const footer = page.getByRole("contentinfo")
  const serviceLinks = footer.locator("ul").first()

  await expect(serviceLinks.getByRole("link", { name: "PlayStation e consoles" })).toHaveAttribute(
    "href",
    /\/blog\/playstation-niteroi\/?$/,
  )
  await expect(serviceLinks.getByRole("link", { name: "Linha Apple" })).toHaveAttribute(
    "href",
    /\/blog\/iphone-niteroi\/?$/,
  )
  await expect(serviceLinks.getByRole("link", { name: "Áudio portátil" })).toHaveAttribute(
    "href",
    /\/blog\/caixas-jbl-niteroi\/?$/,
  )
  await expect(
    serviceLinks.getByText(/conserto|assist[eê]ncia|reparo|manuten[cç][aã]o|manutencao|macbook|atendimento/i),
  ).toHaveCount(0)
})
