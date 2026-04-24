import { expect, test } from "@playwright/test"

const routes = [
  "/",
  "/sobre",
  "/servicos",
  "/servicos/video-games-niteroi",
  "/blog",
  "/blog/playstation-niteroi",
  "/blog/xbox-niteroi",
  "/blog/nintendo-niteroi",
  "/blog/iphone-niteroi",
  "/blog/notebook-niteroi",
  "/blog/notebooks-apple-niteroi",
  "/blog/pc-gamer-niteroi",
  "/blog/gopro-niteroi",
  "/blog/caixas-jbl-niteroi",
  "/blog/tablet-niteroi",
]

const restrictedAltText =
  /assist[eê]ncia\s+t[eé]cnica|assistencia\s+tecnica|consert\w*|repar\w*|manuten[cç]\w*|macbook\w*|t[eé]cnic\w*|tecnic\w*|atendimento|servi[cç]o\w*|servic\w*|diagn[oó]stic\w*|avaliando|atendid\w*|revis[aã]o|revisao/i

test("public image alt text avoids technical support policy wording", async ({ page }) => {
  const violations: string[] = []

  for (const route of routes) {
    await page.goto(route)

    const alts = await page.locator("img[alt]").evaluateAll((images) =>
      images.map((image) => image.getAttribute("alt") ?? ""),
    )

    for (const alt of alts) {
      const match = alt.match(restrictedAltText)

      if (match) {
        violations.push(`${route}: "${alt}" contains "${match[0]}"`)
      }
    }
  }

  expect(violations).toEqual([])
})
