# JDINFO Design Token Alignment Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align this site with the design-token system from `empresarial.jdinformatica.com.br`, then apply that system to the highest-visibility homepage surfaces starting with the header, hero, CTA, and shared UI primitives.

**Architecture:** Treat `app/globals.css` as the source of truth for Tailwind v4 tokens, `app/layout.tsx` as the typography and document-shell entry point, and shared UI primitives as the semantic bridge for components. Add Playwright end-to-end checks first so the token contract, hero media placement, and homepage section styling are verified with rendered output instead of inferred from class names alone.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS v4 `@theme`, shadcn/ui primitives, pnpm, Playwright

---

## Baseline Notes

- `app/layout.tsx` currently uses `Inter` and still exposes `themeColor: '#0f1e40'`.
- `app/globals.css` currently defines `jdblue` as `#0f1e40`, `jdred` as `#ff0000`, and a `0.5rem` base radius.
- The homepage still relies on hardcoded `bg-white`, `bg-gray-50`, `text-gray-*`, and manual CTA form styling.
- `pnpm lint` is **not currently usable**. It fails immediately because `eslint` is not installed/configured. Do not use lint as the quality gate in this plan.
- The worktree is already dirty with local changes, including `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and an untracked `components/ui/hero-video-dialog.tsx`. Do not overwrite or delete those changes unless they are explicitly adopted during implementation.
- There is already a recorded content source in `docs/copy-notebook-macbook-pc-gamer-niteroi.md` and a hero media source in `docs/hero-video-reference.md`.

## Chunk 1: Verification and Theme Foundation

### Task 1: Add Rendered UI Verification for Tokens and Hero Media

**Files:**
- Modify: `package.json`
- Create: `playwright.config.ts`
- Create: `tests/e2e/design-token-alignment.spec.ts`
- Create: `tests/e2e/homepage-foundation.spec.ts`

- [ ] **Step 1: Add Playwright as the verification harness**

Run:

```bash
pnpm add -D @playwright/test
pnpm exec playwright install chromium
```

Update `package.json` so it includes the scripts below:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed"
  }
}
```

- [ ] **Step 2: Create `playwright.config.ts`**

```ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'pnpm dev',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
```

- [ ] **Step 3: Write the failing token contract test**

Create `tests/e2e/design-token-alignment.spec.ts`:

```ts
import { expect, test } from '@playwright/test'

test('homepage exposes the approved token contract', async ({ page }) => {
  await page.goto('/')

  const values = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement)
    const body = getComputedStyle(document.body)
    const header = getComputedStyle(document.querySelector('header')!)

    return {
      fontFamily: body.fontFamily,
      background: root.getPropertyValue('--color-background').trim(),
      foreground: root.getPropertyValue('--color-foreground').trim(),
      primary: root.getPropertyValue('--color-primary').trim(),
      accent: root.getPropertyValue('--color-accent').trim(),
      jdblue: root.getPropertyValue('--color-jdblue').trim(),
      jdred: root.getPropertyValue('--color-jdred').trim(),
      radius: root.getPropertyValue('--radius').trim(),
      headerBackground: header.backgroundColor,
    }
  })

  expect(values.fontFamily).toContain('Geist')
  expect(values.background).toBe('#fafafa')
  expect(values.foreground).toBe('#11192a')
  expect(values.primary).toBe('#081122')
  expect(values.accent).toBe('#fe0000')
  expect(values.jdblue).toBe('var(--color-primary)')
  expect(values.jdred).toBe('var(--color-accent)')
  expect(values.radius).toBe('1rem')
  expect(values.headerBackground).toBe('rgb(8, 17, 34)')
})
```

- [ ] **Step 4: Write the failing homepage structure test**

Create `tests/e2e/homepage-foundation.spec.ts`:

```ts
import { expect, test } from '@playwright/test'

test('hero renders copy first and an inline centered video below it', async ({ page }) => {
  await page.goto('/')

  const hero = page.locator('main section').first()
  await expect(hero.getByRole('heading', { level: 1 })).toBeVisible()

  const iframe = hero.locator('iframe[title="JDINFO hero video"]')
  await expect(iframe).toBeVisible()
  await expect(iframe).toHaveAttribute(
    'src',
    /drive\.google\.com\/file\/d\/1VogucP--s4Mazkd2itWN15k6rj3b7uzP\/preview/,
  )
})
```

- [ ] **Step 5: Run the new tests to confirm the current UI fails**

Run:

```bash
pnpm exec playwright test tests/e2e/design-token-alignment.spec.ts tests/e2e/homepage-foundation.spec.ts
```

Expected:

- `design-token-alignment.spec.ts` fails because the app still uses `Inter`, `#0f1e40`, `#ff0000`, and `0.5rem`
- `homepage-foundation.spec.ts` fails because the hero does not yet render an inline centered video iframe

- [ ] **Step 6: Commit the test harness**

```bash
git add package.json playwright.config.ts tests/e2e/design-token-alignment.spec.ts tests/e2e/homepage-foundation.spec.ts
git commit -m "test: add design token alignment regression coverage"
```

### Task 2: Align the Global Theme and Document Shell

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Switch the document font from `Inter` to `Geist`**

Update `app/layout.tsx`:

```tsx
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-geist',
})
```

Then update the root markup:

```tsx
<html lang="pt-BR" className={geist.variable} suppressHydrationWarning>
  <body className={geist.className} suppressHydrationWarning>
```

Also update `viewport.themeColor` to:

```ts
themeColor: '#081122'
```

- [ ] **Step 2: Rewrite the Tailwind v4 token contract in `app/globals.css`**

Replace the current token block with aligned values:

```css
@theme {
  --font-sans: var(--font-geist);

  --color-background: #fafafa;
  --color-foreground: #11192a;

  --color-card: #ffffff;
  --color-card-foreground: #11192a;
  --color-popover: #ffffff;
  --color-popover-foreground: #11192a;

  --color-primary: #081122;
  --color-primary-foreground: #fafafa;
  --color-secondary: #e5eaf3;
  --color-secondary-foreground: #11192a;
  --color-muted: #eef2f7;
  --color-muted-foreground: #4b5870;
  --color-accent: #fe0000;
  --color-accent-foreground: #fafafa;
  --color-destructive: hsl(0 84.2% 60.2%);
  --color-destructive-foreground: #fafafa;
  --color-border: #cad2e0;
  --color-input: #cad2e0;
  --color-ring: #fe0000;

  --color-jdblue: var(--color-primary);
  --color-jdred: var(--color-accent);

  --radius: 1rem;
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
```

- [ ] **Step 3: Normalize global body and editorial styles to semantic colors**

Adjust the global styles so they stop depending on hardcoded Tailwind grays:

```css
body {
  @apply bg-background text-foreground antialiased;
}

.blog-article {
  @apply text-base leading-relaxed text-muted-foreground;
}

.blog-article a {
  @apply text-accent hover:underline;
}

.blog-article blockquote {
  @apply my-4 border-l-4 border-primary py-2 pl-4 italic text-muted-foreground;
}

.blog-article .cta-section {
  @apply rounded-[var(--radius)] bg-primary text-primary-foreground;
}
```

- [ ] **Step 4: Run the token contract test and confirm it passes**

Run:

```bash
pnpm exec playwright test tests/e2e/design-token-alignment.spec.ts
```

Expected:

- PASS
- `homepage-foundation.spec.ts` may still fail because the hero media slot has not been implemented yet

- [ ] **Step 5: Commit the foundation changes**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: align global theme tokens with empresarial site"
```

## Chunk 2: Shared Primitives and Homepage Adoption

### Task 3: Align Shared UI Primitives with the New Semantics

**Files:**
- Modify: `components/ui/button.tsx`
- Modify: `components/ui/card.tsx`
- Modify: `components/ui/input.tsx`
- Modify: `components/ui/textarea.tsx`
- Modify: `components/ui/select.tsx`
- Modify: `tests/e2e/homepage-foundation.spec.ts`

- [ ] **Step 1: Expand the homepage test to cover primitive-driven surfaces**

Update `tests/e2e/homepage-foundation.spec.ts` to assert a homepage card and CTA form surface now inherit the token system:

```ts
test('cards and form surfaces inherit the shared token primitives', async ({ page }) => {
  await page.goto('/')

  const firstCard = page.locator('[data-slot="card"]').first()
  await expect(firstCard).toBeVisible()

  const styles = await firstCard.evaluate((node) => {
    const card = getComputedStyle(node)
    return {
      radius: card.borderRadius,
      background: card.backgroundColor,
      border: card.borderColor,
    }
  })

  expect(styles.radius).toBe('16px')
  expect(styles.background).toBe('rgb(255, 255, 255)')
  expect(styles.border).toBe('rgb(202, 210, 224)')
})
```

- [ ] **Step 2: Run the expanded test and confirm it fails before the primitive refactor**

Run:

```bash
pnpm exec playwright test tests/e2e/homepage-foundation.spec.ts
```

Expected:

- FAIL because the current card primitive uses `rounded-xl` and not the exact `1rem` contract

- [ ] **Step 3: Refactor the shared primitives to consume the semantic tokens cleanly**

Make the following targeted changes:

```tsx
// components/ui/card.tsx
className={cn(
  'bg-card text-card-foreground flex flex-col gap-6 rounded-[var(--radius)] border border-border py-6 shadow-[0_1px_2px_rgba(8,17,34,0.06)]',
  className,
)}
```

```tsx
// components/ui/button.tsx
variant: {
  default: 'bg-primary text-primary-foreground hover:bg-primary/92',
  outline: 'border-border bg-card text-foreground shadow-xs hover:bg-secondary hover:text-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/85',
  ghost: 'hover:bg-secondary hover:text-foreground',
  link: 'text-accent underline-offset-4 hover:underline',
}
```

```tsx
// components/ui/input.tsx and components/ui/textarea.tsx
className={cn(
  'border-border bg-card text-foreground placeholder:text-muted-foreground ...',
  'focus-visible:border-ring focus-visible:ring-ring/20 focus-visible:ring-[3px]',
  className,
)}
```

```tsx
// components/ui/select.tsx
className={cn(
  'border-border bg-card text-foreground ... focus-visible:ring-ring/20 ...',
  className,
)}
```

- [ ] **Step 4: Re-run the homepage primitive test**

Run:

```bash
pnpm exec playwright test tests/e2e/homepage-foundation.spec.ts --grep "cards and form surfaces"
```

Expected:

- PASS

- [ ] **Step 5: Commit the primitive updates**

```bash
git add components/ui/button.tsx components/ui/card.tsx components/ui/input.tsx components/ui/textarea.tsx components/ui/select.tsx tests/e2e/homepage-foundation.spec.ts
git commit -m "feat: align shared ui primitives with token semantics"
```

### Task 4: Apply the New System to the Header, Hero, CTA, and Homepage Shell

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/header.tsx`
- Modify: `components/hero-section.tsx`
- Create: `components/hero-video-embed.tsx`
- Modify: `components/cta-section.tsx`
- Modify: `tests/e2e/homepage-foundation.spec.ts`

- [ ] **Step 1: Update the homepage test to lock the new hero and homepage shell behavior**

Extend `tests/e2e/homepage-foundation.spec.ts` so it verifies the homepage shell and hero-specific contract:

```ts
test('header, hero, and cta adopt the new token system', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header')
  await expect(header).toBeVisible()

  const hero = page.locator('main section').first()
  await expect(
    hero.getByRole('heading', {
      name: /Conserto de Notebook, MacBook e PC Gamer em Niterói/i,
    }),
  ).toBeVisible()

  const iframe = hero.locator('iframe[title="JDINFO hero video"]')
  await expect(iframe).toBeVisible()

  const cta = page.getByRole('heading', { name: /Precisa de assistência técnica/i })
  await expect(cta).toBeVisible()
})
```

- [ ] **Step 2: Run the updated homepage test and confirm it fails**

Run:

```bash
pnpm exec playwright test tests/e2e/homepage-foundation.spec.ts --grep "header, hero, and cta"
```

Expected:

- FAIL because the current hero still uses the old copy, a side image, and no inline video embed

- [ ] **Step 3: Create an inline hero video component instead of using the untracked dialog draft**

Create `components/hero-video-embed.tsx`:

```tsx
interface HeroVideoEmbedProps {
  src: string
  title: string
}

export function HeroVideoEmbed({ src, title }: HeroVideoEmbedProps) {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[calc(var(--radius)+0.5rem)] border border-border bg-card shadow-[0_24px_80px_rgba(8,17,34,0.12)]">
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
```

Use the embed URL derived from the approved doc:

```ts
const HERO_VIDEO_EMBED_URL =
  'https://drive.google.com/file/d/1VogucP--s4Mazkd2itWN15k6rj3b7uzP/preview'
```

- [ ] **Step 4: Refactor the homepage shell and sections to consume the aligned semantics**

Apply the following implementation rules:

- `app/page.tsx`
  - replace `bg-white` with `bg-background`
  - replace homepage `bg-gray-50` bands with `bg-secondary/40`
- `components/header.tsx`
  - shift from opaque `bg-jdblue` to a darker `primary`-based surface with light text
  - prefer `border-border/30` and `backdrop-blur-md` to approximate the reference-site shell
- `components/hero-section.tsx`
  - replace the current two-column image layout with a copy-first stack
  - use the H1 and intro paragraph from `docs/copy-notebook-macbook-pc-gamer-niteroi.md`
  - surface 3 short highlights from the approved “Destaques” list
  - keep the main CTA buttons, but style them with the new semantic tokens
  - render `HeroVideoEmbed` centered below the copy
- `components/cta-section.tsx`
  - keep the dark section background, but convert it to `bg-primary text-primary-foreground`
  - replace hardcoded `gray` and `white` utilities with semantic token classes where possible
  - replace the raw `<textarea>` with the shared `Textarea` primitive
  - restyle the native `<select>` using `border-border`, `bg-card`, `text-foreground`, and token-based focus states unless a Radix select is explicitly desired

Recommended hero data shape:

```tsx
const heroHighlights = [
  'Orçamento gratuito e sem compromisso',
  'Diagnóstico rápido do problema',
  'Garantia em todos os serviços realizados',
]
```

- [ ] **Step 5: Run the homepage regression tests and production build**

Run:

```bash
pnpm exec playwright test tests/e2e/homepage-foundation.spec.ts
pnpm build
```

Expected:

- all homepage Playwright tests PASS
- `pnpm build` exits `0`

- [ ] **Step 6: Commit the homepage adoption changes**

```bash
git add app/page.tsx components/header.tsx components/hero-section.tsx components/hero-video-embed.tsx components/cta-section.tsx tests/e2e/homepage-foundation.spec.ts
git commit -m "feat: apply aligned tokens to homepage shell and hero"
```

## Final Verification Checklist

- Run:

```bash
pnpm exec playwright test
pnpm build
```

- Confirm in the browser at `http://127.0.0.1:3000`:
  - the body font renders as `Geist`
  - the page canvas uses the new `#fafafa` background
  - the header reads as `primary`/dark, not the legacy `#0f1e40`
  - the hero uses the approved notebook/macbook/pc gamer H1
  - the hero video is inline, centered, and below the copy
  - homepage cards use the new `1rem` radius family
  - the CTA uses semantic colors and shared input styling

## Deferred Work

Do **not** expand this implementation pass into a full-site repaint. Leave the following for later, separate plans unless the user explicitly pulls them into scope:

- blog article pages
- secondary content pages (`/sobre`, `/contato`, `/faq`, `/rastreamento`, etc.)
- motion language and animations
- dark mode redesign
- lint-tooling repair beyond what is strictly needed for this feature
