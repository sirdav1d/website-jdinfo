# Hero Video Corner Mask Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hide the Google Drive top-right action icon shown inside the hero video embed without replacing the video source.

**Architecture:** Keep the existing Google Drive `iframe` preview and add a small positioned overlay inside the hero video container so the unwanted corner action is visually masked. Verify the change with focused Playwright coverage against the overlay element on the homepage.

**Tech Stack:** Next.js App Router, React Server Components, Playwright E2E

---

## Chunk 1: Red Tests

### Task 1: Capture the hero video mask behavior

**Files:**
- Modify: `tests/e2e/homepage-foundation.spec.ts`

- [ ] **Step 1: Write the failing test**

Assert the homepage hero video renders a visible corner mask element over the embed.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test:e2e tests/e2e/homepage-foundation.spec.ts`
Expected: FAIL because the overlay does not exist yet.

## Chunk 2: Implementation

### Task 2: Add the mask overlay to the hero embed

**Files:**
- Modify: `components/hero-video-embed.tsx`

- [ ] **Step 1: Make the embed container positioning-friendly**
- [ ] **Step 2: Add a top-right overlay mask with a stable test id**
- [ ] **Step 3: Keep the existing iframe behavior unchanged otherwise**

## Chunk 3: Green Verification

### Task 3: Verify the homepage embed

**Files:**
- Test: `tests/e2e/homepage-foundation.spec.ts`

- [ ] **Step 1: Run the focused homepage regression**

Run: `pnpm test:e2e tests/e2e/homepage-foundation.spec.ts`
Expected: PASS

- [ ] **Step 2: Run the production build**

Run: `pnpm build`
Expected: exit code 0
