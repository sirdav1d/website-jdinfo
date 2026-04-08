import { expect, test } from "@playwright/test"

test("hero renders approved copy with an inline centered video below it", async ({ page }) => {
  await page.goto("/")

  const hero = page.locator("main section").first()

  await expect(
    hero.getByRole("heading", {
      level: 1,
      name: /Conserto de Notebook, MacBook e PC Gamer em Niterói/i,
    }),
  ).toBeVisible()

  const iframe = hero.locator('iframe[title="JDINFO hero video"]')

  await expect(iframe).toBeVisible()
  await expect(iframe).toHaveAttribute(
    "src",
    /drive\.google\.com\/file\/d\/1VogucP--s4Mazkd2itWN15k6rj3b7uzP\/preview/,
  )

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: /Precisa de assistência técnica\?/i,
    }),
  ).toBeVisible()
})

test("homepage cards and inputs inherit the shared token primitives", async ({ page }) => {
  await page.goto("/")

  const firstCard = page.locator('[data-slot="card"]').first()
  await expect(firstCard).toBeVisible()

  const cardStyles = await firstCard.evaluate((node) => {
    const styles = getComputedStyle(node)
    return {
      radius: styles.borderRadius,
      background: styles.backgroundColor,
      border: styles.borderColor,
    }
  })

  expect(cardStyles.radius).toBe("16px")
  expect(cardStyles.background).toBe("rgb(255, 255, 255)")
  expect(cardStyles.border).toBe("rgb(202, 210, 224)")

  const firstInput = page.locator('[data-slot="input"]').first()
  await expect(firstInput).toBeVisible()

  const inputStyles = await firstInput.evaluate((node) => {
    const styles = getComputedStyle(node)
    return {
      radius: styles.borderRadius,
      border: styles.borderColor,
      background: styles.backgroundColor,
    }
  })

  expect(inputStyles.radius).toBe("14px")
  expect(inputStyles.border).toBe("rgb(202, 210, 224)")
  expect(inputStyles.background).toBe("rgb(255, 255, 255)")
})
