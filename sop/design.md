# Design Blueprint

## Prime Directive

Enforce deterministic, token-driven design consistency across all landing pages. Eliminate design variation, arbitrary styling, and implementation drift by defining immutable design system constraints.

## Scope

Governs spacing tokens, typography hierarchy, color tokens, layout patterns, grid systems, alignment rules, component usage, section structure, and visual density constraints. This SOP references design tokens defined in `lib/ui/tokens.ts` and architecture rules defined in `reference/landing-page-architecture-reference.md`.

## Non-Negotiable Laws

All spacing MUST use approved spacing tokens only. Spacing tokens are defined in the design token system. Section vertical spacing MUST use the standard section spacing token. Container horizontal padding MUST use the standard container padding token. Component internal spacing MUST use gap tokens from the approved token set. Spacing MUST NOT use arbitrary values, percentages, or custom calculations.

Typography hierarchy MUST follow H1 → H2 → H3 → body structure. H1 MUST appear in Hero section only. H2 MUST appear once per section as the section heading. Typography sizes MUST use approved text size tokens only. Font weights MUST use approved weight tokens only. Typography MUST NOT use arbitrary sizes or custom font families.

All colors MUST use approved color tokens only. Color tokens are defined in the design token system. Background colors MUST use approved background tokens. Text colors MUST use approved text color tokens. Accent colors MUST use approved accent tokens. Colors MUST NOT use arbitrary hex values, RGB values, or custom color definitions.

Layout patterns MUST follow the canonical architecture defined in the Architecture Reference. Section order MUST match the canonical architecture outline. Grid systems MUST use the 12-column grid pattern. Grid column spans MUST use approved column span tokens. Layout MUST NOT deviate from approved grid patterns.

Component usage MUST reference existing components from the component system. Components MUST use approved token props only. Components MUST NOT accept arbitrary className overrides. Component variants MUST use approved variant tokens only. Component sizes MUST use approved size tokens only.

Alignment MUST use approved alignment tokens only. Alignment tokens are: left, center, right. Text alignment MUST match the alignment token. Flex alignment MUST match the alignment token. Alignment MUST NOT use arbitrary values or custom positioning.

Media containers MUST use approved aspect ratio tokens only. Aspect ratio tokens are defined in the design token system. Media containers MUST specify aspect ratios. Media containers MUST NOT use unbounded dimensions or arbitrary aspect ratios.

Visual density MUST maintain readability constraints. Character-per-line limits MUST be enforced per section type. Section content density MUST not exceed approved limits. Spacing between elements MUST use approved gap tokens. Density MUST NOT compromise readability or hierarchy.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Architecture compliance (as defined in Architecture Reference), Token compliance (as defined in design token system), Component system compliance, Visual consistency, Readability constraints.

## Process / Flow

Design decisions MUST reference the design token system first. Architecture compliance MUST be verified against Architecture Reference. Component selection MUST reference existing component system. Token usage MUST match approved token set. Layout patterns MUST follow canonical architecture. Alignment MUST use approved tokens. Media containers MUST use approved aspect ratios. Visual density MUST be validated against readability constraints. All design choices MUST be validated against design system constraints before implementation.

## Forbidden Patterns

Arbitrary spacing values, custom color definitions, unbounded media containers, non-canonical section order, unapproved grid patterns, arbitrary typography sizes, custom font families, component className overrides, alignment values outside approved set, aspect ratios outside approved set, visual density exceeding readability limits, layout patterns not in canonical architecture.

## Output Requirements

Design specifications MUST reference approved tokens only. Design specifications MUST follow canonical architecture. Design specifications MUST use existing components. Design specifications MUST enforce token compliance. Design specifications MUST NOT include implementation details. Design specifications MUST NOT include arbitrary values.

## Quality Gate

Before completion, design MUST be validated: All spacing uses approved tokens, typography follows hierarchy rules, colors use approved tokens, layout follows canonical architecture, components reference existing system, alignment uses approved tokens, media containers use approved aspect ratios, visual density meets readability constraints, no arbitrary values present, full compliance with Architecture Reference.

## Failure Modes

This SOP fails when: Arbitrary spacing values are used, unapproved colors appear, typography hierarchy is violated, layout deviates from canonical architecture, components are created outside the system, alignment uses unapproved values, media containers lack aspect ratios, visual density exceeds limits, design specifications include implementation details.

## Definition of Done

Design is complete when: All tokens reference approved design token system, all layouts follow canonical architecture, all components exist in component system, all spacing uses approved tokens, all typography follows hierarchy, all colors use approved tokens, all alignment uses approved tokens, all media containers use approved aspect ratios, visual density meets readability constraints, zero arbitrary values, full compliance with Architecture Reference and design token system.

