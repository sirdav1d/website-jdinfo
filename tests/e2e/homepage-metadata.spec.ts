import { expect, test } from "@playwright/test"

const expectedTitle = "JD Info — Loja de Informática em Niterói"
const expectedDescription =
  "Loja de informática em Niterói com computadores, acessórios, componentes, upgrades, diagnóstico e atendimento presencial em Icaraí."

test("homepage metadata matches Google Ads copy guidance", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(expectedTitle)
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    expectedDescription,
  )
})
