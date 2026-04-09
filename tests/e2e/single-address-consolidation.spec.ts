import { expect, test } from "@playwright/test"

const oldAddress = /Av\. Ernani do Amaral Peixoto, 436/i
const unifiedAddress = /R\. Gen\. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031/i

test("contact page no longer shows the Centro address", async ({ page }) => {
  await page.goto("/contato")
  await expect(page.getByText(oldAddress)).toHaveCount(0)
  await expect(page.getByText(unifiedAddress).first()).toBeVisible()
})
