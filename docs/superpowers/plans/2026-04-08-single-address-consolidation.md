# Single Address Consolidation Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the site to a single physical address in Icaraí while preserving the existing contact channels.

**Architecture:** Remove Centro address blocks and duplicate location layouts from shared sections and location-bearing pages, then rewrite shared copy to describe one address plus multiple contact channels. Keep the two phone/WhatsApp numbers, but stop tying them to separate physical units.

**Tech Stack:** Next.js App Router, React Server Components, Playwright E2E

---

## Chunk 1: Red Tests

### Task 1: Capture the single-address behavior

**Files:**
- Create: `tests/e2e/single-address-consolidation.spec.ts`

- [ ] **Step 1: Write the failing test**

Cover:
- `/`, `/contato`, and `/localizacao` do not render the Centro address
- those same pages do render the Icaraí address
- the homepage location section renders a single desktop column with one address block

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test:e2e tests/e2e/single-address-consolidation.spec.ts`
Expected: FAIL because the old Centro address and duplicated location layout are still present.

## Chunk 2: Implementation

### Task 2: Consolidate address-bearing shared components

**Files:**
- Modify: `components/locations-section.tsx`
- Modify: `components/footer.tsx`
- Modify: `components/faq-section.tsx`
- Modify: `components/cta-section.tsx`
- Modify: `components/diagnostic-form.tsx`
- Modify: `components/header.tsx`
- Modify: `components/floating-chat.tsx`
- Modify: `components/order-tracking.tsx`
- Modify: `components/seo-schema.tsx`

- [ ] **Step 1: Remove Centro address blocks and labels**
- [ ] **Step 2: Keep both phone channels without tying them to different physical addresses**
- [ ] **Step 3: Replace placeholder or outdated address data with the Icaraí address**

### Task 3: Consolidate address-bearing app pages and content

**Files:**
- Modify: `app/contato/page.tsx`
- Modify: `app/localizacao/page.tsx`
- Modify: `app/sobre/page.tsx`
- Modify: `app/servicos/page.tsx`
- Modify: `app/politica-de-privacidade/page.tsx`
- Modify: `app/blog/onde-consertar-playstation-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-iphone-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-nintendo-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-tablet-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-xbox-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-notebook-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-macbook-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-pc-gamer-niteroi/page.tsx`
- Modify: `app/blog/onde-consertar-caixas-jbl-niteroi/page.tsx`
- Modify: `lib/chatbot-knowledge-base.ts`

- [ ] **Step 1: Replace duplicated “two units” address copy with single-address wording**
- [ ] **Step 2: Update CTA button labels so phone numbers remain available without referencing Centro/Icaraí units**
- [ ] **Step 3: Remove Centro location data from chatbot knowledge and privacy copy**

## Chunk 3: Green Verification

### Task 4: Verify the consolidated experience

**Files:**
- Test: `tests/e2e/single-address-consolidation.spec.ts`

- [ ] **Step 1: Run the focused test**

Run: `pnpm test:e2e tests/e2e/single-address-consolidation.spec.ts`
Expected: PASS

- [ ] **Step 2: Run homepage regressions**

Run: `pnpm test:e2e tests/e2e/homepage-foundation.spec.ts tests/e2e/homepage-faq.spec.ts`
Expected: PASS

- [ ] **Step 3: Run the production build**

Run: `pnpm build`
Expected: exit code 0
