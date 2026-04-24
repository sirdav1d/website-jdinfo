import { readdirSync, readFileSync, statSync } from "node:fs"
import path from "node:path"

import { expect, test } from "@playwright/test"

const scannedRoots = ["app", "components", "lib", "public"]
const scannedExtensions = new Set([
  ".css",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
  ".txt",
  ".webmanifest",
  ".xml",
])

const blockedVocabulary =
  /\b(repar\w*|consert\w*|assist[eê]nci\w*|assistenci\w*|manuten[cç]\w*|macbook\w*|suporte\w*)\b/i

function listScannableFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const entryPath = path.join(directory, entry)
    const stats = statSync(entryPath)

    if (stats.isDirectory()) {
      return listScannableFiles(entryPath)
    }

    if (!scannedExtensions.has(path.extname(entryPath))) {
      return []
    }

    return entryPath
  })
}

test("public site source does not include blocked Google Ads support vocabulary", () => {
  const violations = scannedRoots
    .flatMap((root) => listScannableFiles(path.join(process.cwd(), root)))
    .flatMap((filePath) => {
      const relativePath = path.relative(process.cwd(), filePath)
      const source = readFileSync(filePath, "utf8")
      const pathMatch = relativePath.match(blockedVocabulary)
      const contentMatch = source.match(blockedVocabulary)
      const matches = []

      if (pathMatch) {
        matches.push(`${relativePath}: path contains "${pathMatch[0]}"`)
      }

      if (contentMatch) {
        matches.push(`${relativePath}: content contains "${contentMatch[0]}"`)
      }

      return matches
    })

  expect(violations).toEqual([])
})
