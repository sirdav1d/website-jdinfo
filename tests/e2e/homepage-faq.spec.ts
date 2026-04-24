import { expect, test } from "@playwright/test"

test("homepage exposes a generic FAQ section without restricted terms", async ({ page }) => {
  await page.goto("/")

  const faqSection = page.locator("#faq")

  await expect(faqSection).toBeVisible()
  await expect(
    faqSection.getByRole("heading", {
      level: 2,
      name: /Perguntas Frequentes/i,
    }),
  ).toBeVisible()
  await expect(
    faqSection.getByRole("button", {
      name: /Como funciona o contato com a JD Info\?/i,
    }),
  ).toBeVisible()
  await expect(
    faqSection.getByText(/conserto|assist[eê]ncia|reparo|manuten[cç][aã]o|manutencao/i),
  ).toHaveCount(0)

  await expect(page.locator("header").getByRole("link", { name: /FAQ/i })).toHaveCount(0)
})

test("faq route no longer exists", async ({ page }) => {
  const response = await page.goto("/faq")

  expect(response).not.toBeNull()
  expect(response?.status()).toBe(404)

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Página não encontrada/i,
    }),
  ).toBeVisible()
})
