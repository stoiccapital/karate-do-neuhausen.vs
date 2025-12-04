# Accessibility

## Prime Directive

Enforce deterministic, WCAG-compliant accessibility rules for all landing pages. Eliminate accessibility barriers by defining immutable accessibility constraints.

## Scope

Governs semantic HTML usage, ARIA attributes, keyboard navigation, focus management, color contrast, text alternatives, form accessibility, heading structure, and screen reader compatibility.

## Non-Negotiable Laws

All interactive elements MUST be keyboard accessible. All interactive elements MUST have visible focus indicators. Focus order MUST follow logical document flow. Tab order MUST not skip interactive elements. Keyboard shortcuts MUST not conflict with browser defaults.

All images MUST have alt text. Decorative images MUST use alt="". Informative images MUST have descriptive alt text. Complex images MUST have long descriptions. Alt text MUST describe meaning, not visuals.

Color contrast MUST meet WCAG AA standards: 4.5:1 for normal text, 3:1 for large text. Color MUST NOT be the only means of conveying information. Interactive elements MUST have non-color indicators.

All form inputs MUST have associated labels. Labels MUST be programmatically associated with inputs. Error messages MUST be associated with inputs. Required fields MUST be indicated. Form validation MUST be accessible.

Heading hierarchy MUST be logical and sequential. H1 MUST be the page title. Headings MUST not skip levels. Headings MUST describe section content. No decorative headings.

All interactive elements MUST have accessible names. Buttons MUST have text or aria-label. Links MUST have descriptive text. Icons MUST have text alternatives or aria-label. Form controls MUST have labels.

ARIA attributes MUST be used only when semantic HTML is insufficient. ARIA roles MUST match element behavior. ARIA labels MUST not duplicate visible text. ARIA live regions MUST be used for dynamic content updates.

Page language MUST be declared in html lang attribute. Language changes MUST be marked with lang attribute. Screen reader announcements MUST be in correct language.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Keyboard accessibility, Semantic HTML correctness, ARIA attribute accuracy, Color contrast compliance, Text alternative completeness.

## Process / Flow

Semantic HTML MUST be used before ARIA attributes. Keyboard accessibility MUST be verified for all interactive elements. Color contrast MUST be validated against WCAG AA standards. Alt text MUST be provided for all images. Form accessibility MUST be verified. Heading hierarchy MUST be validated. Screen reader compatibility MUST be tested. All accessibility rules MUST be validated before page completion.

## Forbidden Patterns

Keyboard-inaccessible interactive elements, missing alt text on informative images, color-only information conveyance, unlabeled form inputs, skipped heading levels, decorative headings, missing focus indicators, incorrect ARIA usage, inaccessible dynamic content, missing language declarations.

## Output Requirements

GPT MUST output: Keyboard-accessible interactive elements, proper alt text for all images, WCAG AA compliant color contrast, labeled form inputs, logical heading hierarchy, accessible names for all interactive elements, correct ARIA usage, declared page language, screen reader compatible content.

## Quality Gate

Before completing, MUST verify: All interactive elements keyboard accessible, all images have alt text, color contrast meets WCAG AA, all form inputs labeled, heading hierarchy is logical, all interactive elements have accessible names, ARIA attributes are correct, page language is declared, screen reader compatibility is maintained. If ANY accessibility rule is broken → DO NOT SHIP.

## Failure Modes

This SOP fails when: Interactive elements are not keyboard accessible, images lack alt text, color contrast is insufficient, form inputs are unlabeled, heading hierarchy is broken, ARIA attributes are incorrect, page language is not declared, screen reader compatibility is broken.

## Definition of Done

A landing page is accessibility-complete when: All interactive elements are keyboard accessible, all images have proper alt text, color contrast meets WCAG AA, all form inputs are labeled, heading hierarchy is logical, all interactive elements have accessible names, ARIA attributes are correct, page language is declared, screen reader compatibility is verified. Once these are satisfied → Accessibility is DONE.

