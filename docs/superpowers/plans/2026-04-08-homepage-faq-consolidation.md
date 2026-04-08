# Homepage FAQ Consolidation Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the FAQ content into the homepage, remove the dedicated `/faq` route, and repoint internal navigation to the homepage FAQ anchor.

**Architecture:** Extract the FAQ copy into a small shared content module, render it through a dedicated homepage section component, and remove the standalone page file so Next.js serves the existing not-found experience for `/faq`. Keep the change focused by only updating routes and SEO relevant to the moved content.

**Tech Stack:** Next.js App Router, React Server Components, Playwright E2E, existing shadcn/ui accordion and button primitives

---

## Chunk 1: Red Tests

### Task 1: Capture the desired FAQ behavior

**Files:**
- Create: `tests/e2e/homepage-faq.spec.ts`

- [ ] **Step 1: Write the failing test**

Add coverage that:
- verifies the homepage renders a `#faq` section with the FAQ heading and at least one migrated question
- verifies visiting `/faq` returns the app's not-found experience with HTTP `404`

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test:e2e tests/e2e/homepage-faq.spec.ts`
Expected: FAIL because the homepage does not yet contain the FAQ section and `/faq` still resolves successfully.

## Chunk 2: Implementation

### Task 2: Extract FAQ content and render it on the homepage

**Files:**
- Create: `components/faq-section.tsx`
- Create: `lib/homepage-faq.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add a shared FAQ content module**

Move the current dedicated-page questions into `lib/homepage-faq.ts` as a typed array that can feed both rendering and schema generation.

- [ ] **Step 2: Add a homepage FAQ section component**

Render the accordion UI and contact CTA in `components/faq-section.tsx`, with `id="faq"` on the section root so links can target it directly.

- [ ] **Step 3: Add the FAQ section to the homepage**

Import the section into `app/page.tsx` and add FAQ schema data there using the extracted content.

### Task 3: Remove the dedicated route and repoint internal links

**Files:**
- Delete: `app/faq/page.tsx`
- Modify: `components/header.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/servicos/conserto-video-games-niteroi/page.tsx`

- [ ] **Step 1: Repoint FAQ navigation**

Replace `/faq` links with `/#faq` so existing navigation lands on the homepage section.

- [ ] **Step 2: Remove the standalone FAQ page**

Delete `app/faq/page.tsx` so the route is no longer registered.

## Chunk 3: Green Verification

### Task 4: Verify the behavior end to end

**Files:**
- Test: `tests/e2e/homepage-faq.spec.ts`

- [ ] **Step 1: Run the focused test suite**

Run: `pnpm test:e2e tests/e2e/homepage-faq.spec.ts`
Expected: PASS

- [ ] **Step 2: Run the existing homepage regression suite**

Run: `pnpm test:e2e tests/e2e/homepage-foundation.spec.ts`
Expected: PASS

- [ ] **Step 3: Run the production build**

Run: `pnpm build`
Expected: exit code 0
