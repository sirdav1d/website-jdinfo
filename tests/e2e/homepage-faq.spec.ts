import { expect, test } from "@playwright/test"

test("homepage exposes the FAQ section and points navigation to the home anchor", async ({ page }) => {
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
      name: /Quanto tempo demora para consertar meu equipamento\?/i,
    }),
  ).toBeVisible()

  const faqLinks = page.locator('a[href="/#faq"]')
  await expect(faqLinks).toHaveCount(2)
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
