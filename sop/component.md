# Landing Page Component System

## Prime Directive

Enforce deterministic, reusable component architecture for all landing pages. Eliminate component duplication and inconsistency by defining immutable component system rules.

## Scope

Governs component structure, component boundaries, component composition, prop interfaces, component naming, component organization, component reusability, and component dependencies.

## Non-Negotiable Laws

One component per file. One responsibility per component. Components MUST be server components unless interactivity is required. Components MUST NOT contain business logic. Components MUST NOT contain layout logic. Components MUST be fully typed.

Component names MUST be PascalCase. Component files MUST match component names. Component exports MUST be default exports. Component props MUST use interfaces or type aliases. Component props MUST be fully typed. No any types allowed.

Components MUST be organized by category: actions (buttons, CTAs), content (headlines, paragraphs, badges), conversion (feature cards, pricing cards, testimonials), media (images, videos), navigation (navbar, footer), structural (container, grid, section, split, stack).

Components MUST NOT apply margins. Components can ONLY use internal padding. Spacing MUST be controlled by parent layout. Components MUST use approved design tokens only (as defined in Design SOP). No arbitrary Tailwind values.

Reusable components MUST be in /components directory. Section-specific components MUST be in /app/(marketing)/landing/sections directory. Shared structural components MUST be in /components/structural directory. No duplicate component logic.

Component composition MUST follow: Structural components wrap content, content components provide text/headlines, action components provide CTAs, media components provide images/videos, conversion components combine content + actions. No mixing of concerns.

Components MUST reference other components through imports only. Components MUST NOT duplicate other component logic. Components MUST be composable. Components MUST accept children when appropriate. Components MUST have single responsibility.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Component reusability, Type safety, Design token compliance (as defined in Design SOP), Architecture compliance (as defined in Architecture SOP), Performance (as defined in Performance SOP).

## Process / Flow

Component structure MUST be defined before implementation. Component props MUST be typed before component body. Component composition MUST follow category rules. Component spacing MUST reference parent layout. Component tokens MUST reference Design SOP. Component validation MUST occur before use. Component reusability MUST be verified.

## Forbidden Patterns

Multiple components per file, business logic in components, layout logic in components, untyped props, any types, margins on components, arbitrary Tailwind values, duplicate component logic, mixing component concerns, unorganized component structure.

## Output Requirements

GPT MUST output: Single component per file, fully typed props, proper component organization, approved design tokens only, no margins, internal padding only, composable component structure, reusable component architecture.

## Quality Gate

Before completing, MUST verify: One component per file, one responsibility per component, fully typed props, proper component organization, no margins, approved tokens only, no duplicate logic, proper component composition, full compliance with Design SOP and Architecture SOP. If ANY component rule is broken → DO NOT SHIP.

## Failure Modes

This SOP fails when: Multiple components per file, untyped props appear, margins are added to components, arbitrary values are used, duplicate component logic exists, component organization is incorrect, component concerns are mixed.

## Definition of Done

A component is complete when: Single component per file, fully typed, properly organized, uses approved tokens only, no margins, composable, reusable, full compliance with Design SOP and Architecture SOP. Once these are satisfied → Component is DONE.

