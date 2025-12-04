# Mock UI

## Prime Directive

Create deterministic, approved, token-perfect UI states that can be exported into mock images. Mock UI must remain 100% aligned with the real design system and product architecture.

## Scope

Governs mock UI built in Figma or staging React screens, temporary UI states used to generate mock images, placeholder UI used before backend exists, all blueprint UI used for landing pages, docs, marketing, and product previews. This SOP does NOT govern: The final exported mock images, marketing image layout, copywriting, real screenshots from production.

## Non-Negotiable Laws

Mock UI MUST NOT include any UI elements that do not exist in the real product: No fake charts, no unapproved components, no imaginary panels, no random displays. Everything must follow the product's actual design system.

Every part of mock UI MUST use: Approved spacing tokens (as defined in Design SOP), approved color tokens (as defined in Design SOP), approved typography (as defined in Design SOP), approved border radii (as defined in Design SOP), approved layout grid (as defined in Design SOP). If a token doesn't exist in the system → you cannot use it.

Mock UI must not use: Real user data, fake names, fake analytics, fake companies, fake amounts. Instead, use neutral placeholders. Explicitly allowed placeholders: "Driver 001", "Vehicle A1", "Entry #04", "Chart sample values".

Mock UI cannot show: Full cluttered dashboard states, overflowing tables, collapsed sidebars, noisy cards, red/yellow alerts. Mock UI MUST show exactly one feature state. Mock UI MUST remove all non-essential UI elements.

Every mock UI element must come from: /components/ui/*, the official design system (Figma or code), token-driven layout rules (as defined in Design SOP). No custom CSS. No random Tailwind. No "one-off" designs.

Use only shadows/effects defined in the design system. No random shadows.

Mock UI must follow: 8px spacing grid (as defined in Design SOP), container widths (as defined in Design SOP), 12-column layout (as defined in Design SOP), vertical rhythm rules (as defined in Design SOP). No freehand alignment.

Mock UI aspect ratios MUST match approved design system ratios. Mock UI aspect ratios MUST NOT deviate from approved set.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Design system compliance (as defined in Design SOP), Token compliance (as defined in Design SOP), Feature clarity, Visual simplicity.

## Process / Flow

Feature definition MUST precede component location. Component location MUST reference existing design system only. UI construction MUST use real components from design system. Token usage MUST reference Design SOP. Placeholder data MUST be neutral. UI cleaning MUST remove non-essential elements. Aspect ratio alignment MUST match approved ratios. QA validation MUST verify all compliance rules before export.

## Forbidden Patterns

Busy real dashboards, unapproved colors, overly complex tables, data that looks real, new UI that doesn't exist anywhere, experimental layouts, marketing-only components, real user avatars/names/emails, fake companies, fake money amounts, random opacity or gradients, animations, fantasy UI elements, custom CSS, random Tailwind, one-off designs.

## Output Requirements

GPT MUST output: Mock UI state using only approved design system components, approved tokens only, neutral placeholder data, single feature state representation, clean simplified UI, proper aspect ratio alignment, full compliance with Design SOP.

## Quality Gate

Before exporting, MUST verify: No fantasy UI, tokens correct (as defined in Design SOP), colors correct (as defined in Design SOP), spacing correct (as defined in Design SOP), layout grid aligned (as defined in Design SOP), placeholder data only, clean and simplified, deterministic state, aspect ratio matches approved set, all components from real design system.

## Failure Modes

This SOP fails when: Fantasy UI elements appear, unapproved tokens are used, real user data is included, design system components are not used, aspect ratios deviate from approved set, UI is cluttered or complex, non-essential elements remain.

## Definition of Done

Mock UI is complete when: All elements from real design system, all tokens approved and correct, neutral placeholder data only, single feature state shown, clean and simplified, aspect ratio matches approved set, full compliance with Design SOP, ready for mock image export.
