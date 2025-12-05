# SEO Blueprint

## Prime Directive

Enforce deterministic, architecture-safe, search-optimized structures. No improvisation. No creative SEO. Only strict, reproducible rules.

## Scope

Governs metadata (title, description, OG, Twitter), canonical rules, slugs & URL format, heading hierarchy, keyword placement, indexing (robots, noindex rules), schema / JSON-LD, image alt text rules. Everything else is controlled by other SOPs.

## Non-Negotiable Laws

Metadata MUST be exported from page.tsx. Route-level metadata MUST be used only when page.tsx export is not possible. Title length: 50–60 characters. Description length: 130–160 characters. Titles MUST follow: Primary benefit → qualifier. Descriptions MUST follow: Primary benefit → credibility/supporting detail. No keyword stuffing.

Every page MUST define: og:title, og:description, og:url, og:image (Stripe-grade, deterministic size), Twitter card: summary_large_image. Image MUST follow: /og/[slug].png or official OG generator pattern.

Every landing page MUST define a canonical. Canonical MUST match the final production domain. No query params. No dynamic canonicals. Canonical must be identical across environments except base domain.

Slugs MUST: be lowercase, be hyphenated, avoid stop words, not exceed 60 characters, be deterministic (no random slugs), represent the page's intent clearly.

Exactly one H1 — in the Hero section. All sections MUST start with an H2. Subsections MUST use H3. No skipping levels. No decorative headings. H1 MUST contain the primary keyword once only.

Keywords may appear in: Metadata title, Meta description, H1, First paragraph, One H2 only. Limits: Max 1 keyword per 100 words. No keywords in: component names, alt attributes, JS variables, Tailwind classes, filenames.

Every image MUST have alt text. If decorative: alt="". Alt text MUST describe meaning, not visuals. Filenames MUST be lowercase and hyphenated. No keywords in alt text.

Schema MUST be inserted in a server component only. Schema MUST match page intent: Product page → Product, Software → SoftwareApplication, SaaS LP → WebApplication, Blog → Article. No unverified claims. No dynamic or runtime-generated values. Domain must match canonical URL.

Internal links MUST use semantic anchor text. Only one outbound link allowed above the fold. All external links MUST use rel="noopener noreferrer".

All public landing pages MUST be indexable. Non-canonical or A/B variants MUST include: robots: { index: false, follow: false }. Duplicate or experimental pages MUST reference the canonical.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Canonical correctness, Heading hierarchy compliance, Keyword placement rules, Schema validity, Metadata completeness.

## Process / Flow

Metadata MUST be generated before page structure. Canonical MUST be defined before page completion. Heading hierarchy MUST be validated against Architecture SOP. Keyword placement MUST follow density rules. Schema MUST match page intent. Alt text MUST be validated for all images. Indexing behavior MUST match page intent. All SEO rules MUST be validated before page completion.

## Forbidden Patterns

AI improvising metadata, multiple H1s, canonical mismatches, keywords appearing in wrong places, alt text descriptive of visuals not meaning, incorrect or unverified schema, non-deterministic slugs, keyword stuffing, decorative headings, skipping heading levels.

## Output Requirements

GPT MUST output: Valid metadata (title 50-60 chars, description 130-160 chars), canonical URL, proper heading hierarchy (one H1, H2s for sections, H3s for subsections), keyword placement within limits, valid schema JSON-LD, alt text for all images, correct indexing behavior.

## Quality Gate

Before shipping any landing page, MUST confirm: Title 50–60 chars, Description 130–160 chars, Both contain 1 keyword max, Canonical correct domain, no query params, no environment variation, Exactly one H1, H2 sections aligned with architecture, No H4 unless H3 exists, Valid JSON-LD, Correct business type, No claims, Matches canonical URL, Alt attributes correct, No keyword stuffing, Correct filenames, Keyword density < 1 per 100 words, Appears only in allowed positions. If ANY of these fail → the page is NOT SEO-compliant.

## Failure Modes

SEO breaks when: AI improvises metadata, multiple H1s appear, canonical mismatches occur, keywords appear in wrong places, alt text is descriptive of visuals not meaning, schema is incorrect or unverified, non-deterministic slugs are generated. Fix immediately.

## Definition of Done

A landing page is SEO-complete when: Metadata meets deterministic rules, canonical is correct, H1/H2/H3 hierarchy is valid, keywords follow placement rules, schema is valid, all images have correct alt text, indexing behavior matches intent. Once these are satisfied → SEO is DONE.
