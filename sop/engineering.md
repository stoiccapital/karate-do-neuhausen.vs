# Engineering Blueprint

## Prime Directive

Enforce deterministic, production-grade engineering rules for all landing pages. Only one objective: consistent, safe, type-strong, predictable code generation. Engineering SOP MUST enforce architecture and design rules defined in the Design SOP and Architecture SOP.

## Scope

Governs allowed technologies, file boundaries, component rules, TypeScript strict mode, import rules, Tailwind engineering rules, image optimization, server/client behavior separation, spacing and layout control, and deterministic output rules.

## Non-Negotiable Laws

Cursor MUST only use: Next.js App Router, React Server Components by default, TypeScript (strict), Tailwind CSS using design tokens only (as defined in Design SOP), next/image for all images, ES Modules, relative imports only, alias imports only when preconfigured. Forbidden: JavaScript files, CSS modules, inline styles, arbitrary Tailwind values, raw <img>, fetching inside components, server/client mixing.

Cursor MUST enforce: One component per file, one responsibility per file, no business logic inside section components, no layout logic inside UI components, no nested component folders inside routes, no duplicate component logic. File types: Components → .tsx, Utilities → .ts. No .jsx or .js.

All components are server components unless interactivity is required. Server components MUST NOT import client libraries. Server components MUST NOT use "use client". Client components are allowed ONLY if interaction exists. Client components MUST start with "use client", MUST NOT import server-only utilities, MUST NOT fetch, MUST NOT mutate DOM manually, MUST be fully typed. General Component Rules: No any, no inline styles, no margins on the component root, no arbitrary classNames, use internal padding only, props MUST be fully typed, return type inferred or explicit.

Cursor MUST enforce strong typing: No any, no unknown, no implicit any, no untyped function parameters, no untyped arrays, no untyped objects, props must use interfaces or type aliases, all utilities MUST be typed, all arrays MUST have typed elements, only .tsx for components, only .ts for utilities. If Cursor outputs untyped values → MUST self-correct.

Cursor MUST enforce: Relative imports for local files, alias imports only via existing TS paths, no unused imports, no mixing server/client imports, no importing .css files in components. The root `app/layout.tsx` MUST import `./globals.css` for Tailwind and global resets. All other components and files MUST NOT import .css files.

Cursor MUST enforce: Only approved design tokens (as defined in Design SOP), no arbitrary values, no percentage widths unless tokens, no margins on components, only internal padding allowed, spacing controlled by parent layout, no dynamic inline classNames, no className prop overrides unless component-specific policy permits.

Cursor MUST enforce: next/image ONLY, must specify width + height, must specify alt, no raw <img>, no missing dimensions, no remote URL without config.

Server Components: Default for all files, no "use client", no browser APIs, no animations with JS, no interactive state. Client Components: Allowed only when interaction required, MUST begin with "use client", MUST use typed props, CANNOT fetch, CANNOT import server utilities, CANNOT use Node APIs.

Components MUST NOT apply margins. Page-level files define all section spacing. Components can ONLY use internal padding. No external spacing allowed inside reusable UI components. No special casing variants through className hacks.

Cursor MUST enforce consistency: No creative variations, no className improvisation, must use the same engineering patterns for all files, must use same naming patterns for interfaces and props, must generate predictable, reusable, clean TSX, must never introduce new dependencies.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Type safety, Architecture compliance (as defined in Architecture SOP), Design token compliance (as defined in Design SOP), Performance (as defined in Performance SOP), Code consistency.

## Process / Flow

Type safety checks MUST occur before code generation. Architecture compliance MUST be verified against Architecture SOP. Design token usage MUST reference Design SOP. Component structure MUST follow file boundary rules. Server/client separation MUST be enforced. Image optimization MUST follow Performance SOP rules. Spacing MUST be controlled by parent layout only. Code MUST be validated against all engineering rules before completion.

## Forbidden Patterns

Mixing server + client logic, using <img>, using arbitrary Tailwind values, inserting margins in components, creating untyped props, adding unnecessary wrappers, duplicating logic, creating unused files, importing external styling, adding business logic inside components.

## Output Requirements

Cursor MUST output: Fully typed components, deterministic code structure, approved design tokens only, server components by default, client components only when required, next/image with dimensions and alt, no margins, no arbitrary values, no implementation drift.

## Quality Gate

Before completing, Cursor MUST verify: All props typed, no any or implicit any, arrays typed, objects typed, only one component per file, no margins, no inline styles, no random classNames, only approved tokens, no arbitrary values, server component by default, client only when needed, next/image only, width + height + alt specified. If ANY fail → Cursor MUST fix before generating.

## Failure Modes

This SOP fails when: Untyped code is generated, arbitrary Tailwind values appear, margins are added to components, server/client logic is mixed, <img> tags are used instead of next/image, design tokens are not referenced, architecture rules are violated.

## Definition of Done

An output is valid ONLY if: Fully typed, deterministic, no arbitrary utilities, no margins, next/image used correctly, no JS files, no mixed server/client, no drift from these engineering rules, full compliance with Architecture SOP and Design SOP.
