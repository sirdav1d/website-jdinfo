import { expect, test } from "@playwright/test"

test("homepage exposes the approved token contract", async ({ page }) => {
  await page.goto("/")

  const values = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement)
    const body = getComputedStyle(document.body)
    const header = document.querySelector("header")

    return {
      fontFamily: body.fontFamily,
      background: root.getPropertyValue("--color-background").trim(),
      foreground: root.getPropertyValue("--color-foreground").trim(),
      primary: root.getPropertyValue("--color-primary").trim(),
      accent: root.getPropertyValue("--color-accent").trim(),
      jdblue: root.getPropertyValue("--color-jdblue").trim(),
      jdred: root.getPropertyValue("--color-jdred").trim(),
      radius: root.getPropertyValue("--radius").trim(),
      headerBackground: header ? getComputedStyle(header).backgroundColor : null,
    }
  })

  expect(values.fontFamily).toContain("Geist")
  expect(values.background).toBe("#fafafa")
  expect(values.foreground).toBe("#11192a")
  expect(values.primary).toBe("#081122")
  expect(values.accent).toBe("#fe0000")
  expect(values.jdblue).toBe("#081122")
  expect(values.jdred).toBe("#fe0000")
  expect(values.radius).toBe("1rem")
  expect(values.headerBackground).toBe("rgb(8, 17, 34)")
})
