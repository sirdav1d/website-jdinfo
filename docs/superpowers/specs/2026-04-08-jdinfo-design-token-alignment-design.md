# JDINFO Design Token Alignment

## Context

This project will align its Tailwind CSS design token foundation with the existing visual system used by `https://empresarial.jdinformatica.com.br/`.

The goal is not a full visual redesign in one pass. The goal is to establish a shared token contract so future UI changes, starting with the hero section, inherit the same brand foundation and semantic system.

## Decision Summary

- The reference site `empresarial.jdinformatica.com.br` becomes the visual source of truth for design tokens.
- This project will adopt the same primitive tokens and semantic tokens used by that reference.
- Existing local brand aliases such as `jdblue` and `jdred` will be preserved for compatibility, but they will point to the new shared token values.
- Token alignment will be implemented first in `app/globals.css`, then consumed gradually by sections and components.

## Reference Tokens

The following values were observed directly from the reference site on April 8, 2026.

- `font-sans`: `Geist`
- `background`: `#fafafa`
- `foreground`: `#11192a`
- `primary`: `#081122`
- `secondary`: `#e5eaf3`
- `accent`: `#fe0000`
- `radius`: `1rem`

The following values are design inferences based on visible UI behavior and should be treated as part of the alignment contract unless contradicted by future implementation evidence.

- `primary-foreground`: `#fafafa`
- `secondary-foreground`: `#11192a`
- `accent-foreground`: `#fafafa`
- `border`: `#cad2e0`
- `input`: same family as `border`, on light surfaces
- `card`: white or near-white elevated surface
- `popover`: white or near-white elevated surface
- `muted`: derived from `secondary`
- `ring`: derived from the `accent` family for focus and interactive emphasis

## Primitive Token Contract

This project should normalize its Tailwind theme around these primitives:

- Typography
  - Base font family uses `Geist`
- Color
  - Background and surface neutrals align with the reference site
  - Foreground uses the same deep slate tone as the reference site
  - Primary is the dark brand authority color
  - Accent is the bright red action color
- Shape
  - Base radius becomes `1rem`
- Surface
  - Borders, cards, inputs, and popovers must sit in the same light-system family

## Semantic Token Contract

The semantic meaning of the tokens should also align with the reference site.

- `primary`
  - Use for authority, trust, dark hero surfaces, header surfaces, strong institutional sections, and primary CTAs
- `accent`
  - Use for action, urgency, callouts, hover emphasis, badges, and selective commercial highlights
- `secondary`
  - Use for supportive surfaces, soft backgrounds, and low-emphasis containers
- `muted`
  - Use for helper surfaces, separators, and low-contrast support areas
- `background`
  - Use as the default page canvas
- `card` and `popover`
  - Use as elevated surfaces above the page canvas
- `border` and `input`
  - Use for subtle structure and form boundaries
- `ring`
  - Use for focus states and interactive accessibility feedback

## Compatibility Layer

To avoid unnecessary churn in the current codebase:

- `jdblue` will remain available as a brand alias, but its value should match `primary`
- `jdred` will remain available as a brand alias, but its value should match `accent`

This allows existing components that already use `text-jdblue`, `bg-jdblue`, `text-jdred`, or `bg-jdred` to move onto the new system without an immediate class rename campaign.

## Component-Level Usage Rules

- Primary button
  - Dark `primary` background with light foreground
- Secondary button
  - Light surface with subtle border and `foreground` text
- Urgency CTA
  - `accent` background used selectively, not as the dominant page color
- Inputs and selects
  - Light backgrounds, soft borders, focus rings tied to the `accent` family
- Cards
  - Light surfaces, soft borders, `1rem` radius, restrained shadows if used
- Links and microinteractions
  - `accent` is preferred for emphasis, hover, and active states
- Editorial and blog sections
  - May continue using `jdblue` and `jdred`, but these aliases must resolve to the aligned shared values

## Scope of This Consolidation

Included now:

- Primitive token alignment
- Semantic token alignment
- Brand alias compatibility
- Reference-site-based design system contract
- Initial implementation target in `app/globals.css`

Explicitly out of scope for this first step:

- Rewriting all components in one pass
- Redesigning layouts and section structure
- Changing copy
- Choosing animations or motion language
- Rebuilding spacing scales comprehensively
- Prioritizing dark mode as part of this first alignment

## Implementation Order

1. Update `app/globals.css` so the Tailwind `@theme` matches this contract.
2. Preserve alias compatibility for existing project-specific class usage.
3. Apply the new semantic tokens gradually to visible sections, starting with the hero and other high-visibility components.
4. Audit remaining components for hard-coded color usage and migrate them onto the shared token system.

## Notes

- The reference extraction was based on observed rendered values from the live site on April 8, 2026.
- Border and some surface roles were inferred from the rendered UI and should be validated during implementation.
- This document defines the design-system contract for upcoming work. It does not itself authorize a full UI rewrite.
