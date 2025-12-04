# Performance

## Prime Directive

Ensure every landing page meets or exceeds the performance, loading, rendering, and Core Web Vitals thresholds defined for Stripe-grade pages. Performance thresholds MUST be enforced. Cursor MUST block any code that reduces performance.

## Scope

Governs loading performance, rendering performance, Core Web Vitals, image optimization, script control, layout stability, asset weight, bundle size, Next.js optimization rules. Applies to every file in a landing page: components, sections, layout, images, metadata.

## Non-Negotiable Laws

Every landing page MUST hit: LCP (Largest Contentful Paint) ≤ 2.5s, FID (First Input Delay) ≤ 100ms, CLS (Cumulative Layout Shift) ≤ 0.1, INP (Interaction to Next Paint) ≤ 200ms, TTFB ≤ 0.8s. Violating ANY metric → FAIL.

MUST use next/image for all images. MUST define width, height, and alt. MUST use priority for Hero image. MUST use loading="lazy" for all below-the-fold images. MUST use fill correctly inside a positioned parent. NEVER use unoptimized raw <img>. NEVER load images larger than necessary. Violation → FAIL.

No unused JS (Cursor MUST detect & remove). No heavy libraries unless pre-approved. No client-side logic where server-side can be used. No tracking scripts unless allowed by Performance SOP. No blocking synchronous scripts in <head>. Use async or defer always. No polyfills unless automatically needed. Violation → FAIL.

All images MUST have intrinsic sizes. All components MUST avoid shifting layout. Buttons MUST NOT jump on hover. Headings MUST NOT shift during load. Dynamic content MUST reserve space. Avoid fonts that cause layout shift → use next/font. Violation → FAIL.

Components MUST be server components unless interactivity is required. No unnecessary client components. No state management for static sections. Props MUST be serializable. React Suspense boundaries MUST be used for async data loading. React Suspense boundaries MUST NOT be used for static content. Minimize hydration cost. Violation → FAIL.

Total initial load MUST be ≤ 150KB (gzipped). No large JSON payloads on initial render. No blocking CSS. No custom fonts unless subset + optimized. MUST use next/font for font loading. No base64 images unless tiny (≤ 1KB). Violation → FAIL.

All static assets MUST be cached aggressively. Use cache: 'force-cache' when data never changes. Use ISR for semi-static content. No client-side fetching for static content. Metadata MUST be static. Violation → FAIL.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Core Web Vitals thresholds, Image optimization, Layout stability, Bundle size limits, Caching strategy.

## Process / Flow

Performance validation MUST include image optimization scan. JS bundle size analysis MUST be performed. Client vs server component validation MUST occur. Layout shift detection MUST be executed. Core Web Vitals simulation MUST be run. Network request audit MUST be completed. Font loading audit MUST be performed. Script execution cost check MUST be executed. Caching policy evaluation MUST be completed. If ANY validation fails → Overall FAIL.

## Forbidden Patterns

Raw <img>, hover states causing layout shift, arbitrary animation on hero content, client components without reason, libraries > 50KB uncompressed, fonts loaded from external CDNs, unused imports, inline scripts, scripts not marked async or defer, images with no fixed dimensions, hydrating large trees unnecessarily. These MUST NEVER appear in a landing page.

## Output Requirements

Cursor MUST output Performance Compliance Report with exact format: Status PASS/FAIL, Violations by category (Images, JS, CLS, Vitals, Fonts, Network, Caching), Summary by category (PASS/FAIL), Decision APPROVE/BLOCK. If ANY section is FAIL → BLOCK.

## Quality Gate

Before completing, Cursor MUST verify: LCP ≤ 2.5s, FID ≤ 100ms, CLS ≤ 0.1, INP ≤ 200ms, TTFB ≤ 0.8s, all images optimized, no layout shift, no unused JS, minimal client-side hydration, bundle size within limits, all assets optimized. If ANY performance rule is broken → DO NOT SHIP.

## Failure Modes

This SOP fails when: Core Web Vitals thresholds are exceeded, images are not optimized, layout shift occurs, bundle size exceeds limits, unnecessary client components are used, caching is not implemented, performance validation is skipped.

## Definition of Done

A landing page is DONE only when: LCP, FID, INP, CLS all pass, all images optimized, no layout shift, no unused JS, minimal client-side hydration, bundle size within limits, all assets optimized, tracked in Cursor's Performance Report, Cursor returns PASS for EVERY performance category, ZERO violations remain. If ANY performance rule is broken → DO NOT SHIP.
