import { expect, test } from "@playwright/test"

test("homepage services cards use generic labels and icons", async ({ page }) => {
  await page.goto("/")

  const servicesSection = page.locator("section").filter({
    has: page.getByRole("heading", {
      level: 2,
      name: /Atuação especializada/i,
    }),
  })

  await expect(
    servicesSection.getByRole("heading", { name: /PlayStation e consoles/i }),
  ).toBeVisible()
  await expect(
    servicesSection.getByRole("heading", { name: /Consoles e acessórios/i }),
  ).toBeVisible()
  await expect(
    servicesSection.getByRole("heading", { name: /Linha Apple/i }),
  ).toBeVisible()
  await expect(
    servicesSection.getByRole("heading", { name: /Portáteis e tablets/i }),
  ).toBeVisible()
  await expect(
    servicesSection.getByRole("heading", { name: /Câmeras de ação/i }),
  ).toBeVisible()
  await expect(
    servicesSection.getByRole("heading", { name: /Áudio portátil/i }),
  ).toBeVisible()

  await expect(servicesSection.getByAltText(/Logo da/i)).toHaveCount(0)
  await expect(servicesSection.getByText(/conserto/i)).toHaveCount(0)
})
