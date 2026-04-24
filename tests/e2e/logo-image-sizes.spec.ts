import { readFileSync } from "node:fs"
import path from "node:path"

import { expect, test } from "@playwright/test"

const filesWithLogoImages = ["components/header.tsx", "components/footer.tsx"]

test("logo images rendered with fill declare sizes", () => {
  const missingSizes = filesWithLogoImages.flatMap((filePath) => {
    const source = readFileSync(path.join(process.cwd(), filePath), "utf8")
    const logoImageBlocks = source.match(/<Image[\s\S]*?src=['"]\/logo\.png['"][\s\S]*?\/>/g) ?? []

    return logoImageBlocks
      .filter((block) => /\sfill(?:\s|>|\/)/.test(block) && !/\ssizes=/.test(block))
      .map(() => filePath)
  })

  expect(missingSizes).toEqual([])
})
