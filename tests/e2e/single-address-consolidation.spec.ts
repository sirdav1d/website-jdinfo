import { expect, test } from "@playwright/test"

const oldAddress = /Av\. Ernani do Amaral Peixoto, 436/i
const unifiedAddress = /R\. Gen\. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031/i

test("homepage exposes a single full-width location block", async ({ page }) => {
  await page.goto("/")

  const section = page.locator("section").filter({
    has: page.getByRole("heading", { level: 2, name: /Nosso endereço em Niterói/i }),
  })

  await expect(section).toBeVisible()
  await expect(section.getByText(oldAddress)).toHaveCount(0)
  await expect(section.getByText(unifiedAddress)).toBeVisible()

  const cards = section.locator('[data-slot="card"]')
  await expect(cards).toHaveCount(1)

  const gridTemplateColumns = await section.locator(".grid").first().evaluate((node) => {
    return getComputedStyle(node).gridTemplateColumns
  })

  expect(gridTemplateColumns.trim().split(/\s+/)).toHaveLength(1)
})

test("contact and location pages no longer show the Centro address", async ({ page }) => {
  for (const path of ["/contato", "/localizacao"]) {
    await page.goto(path)
    await expect(page.getByText(oldAddress)).toHaveCount(0)
    await expect(page.getByText(unifiedAddress).first()).toBeVisible()
  }
})
