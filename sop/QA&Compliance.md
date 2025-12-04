# QA & Compliance

## Prime Directive

Enforce deterministic quality assurance and compliance validation for all landing pages. Eliminate quality drift by defining immutable QA and compliance rules.

## Scope

Governs quality gates, compliance checks, validation workflows, error detection, rule enforcement, testing requirements, and approval processes across all SOPs.

## Non-Negotiable Laws

All landing pages MUST pass all applicable SOP quality gates before completion. Copy SOP quality gate MUST be passed. Engineering SOP quality gate MUST be passed. Performance SOP quality gate MUST be passed. SEO SOP quality gate MUST be passed. Accessibility SOP quality gate MUST be passed. Design SOP compliance MUST be verified. Architecture SOP compliance MUST be verified.

Quality gates MUST be executed in this order: Architecture compliance, Design compliance, Engineering compliance, Copy compliance, SEO compliance, Performance compliance, Accessibility compliance. If ANY quality gate fails → page MUST NOT be completed.

All violations MUST be documented. All violations MUST be fixed before completion. No exceptions allowed. Violation documentation MUST include: SOP violated, specific rule violated, file location, proposed fix.

Compliance validation MUST reference all applicable SOPs. Compliance validation MUST not skip any required checks. Compliance validation MUST produce deterministic results. Compliance validation MUST block completion on failure.

Testing MUST verify: All SOP rules are followed, all quality gates are passed, no violations remain, all cross-SOP conflicts are resolved, all dependencies are met.

## Decision Hierarchy

When rules conflict, hierarchy MUST be respected in this order: Architecture compliance (as defined in Architecture SOP), Design compliance (as defined in Design SOP), Engineering compliance (as defined in Engineering SOP), Performance compliance (as defined in Performance SOP), Copy compliance (as defined in Copy SOP), SEO compliance (as defined in SEO SOP), Accessibility compliance (as defined in Accessibility SOP).

## Process / Flow

Architecture compliance MUST be verified first. Design compliance MUST be verified second. Engineering compliance MUST be verified third. Copy compliance MUST be verified fourth. SEO compliance MUST be verified fifth. Performance compliance MUST be verified sixth. Accessibility compliance MUST be verified seventh. All violations MUST be documented. All violations MUST be fixed. Final validation MUST confirm all quality gates passed. Page completion MUST be blocked if any quality gate fails.

## Forbidden Patterns

Skipping quality gates, ignoring violations, completing pages with violations, skipping compliance checks, non-deterministic validation, allowing exceptions, incomplete violation documentation.

## Output Requirements

GPT MUST output: QA Compliance Report with status PASS/FAIL, violations documented by SOP, fixes proposed for all violations, validation results for all quality gates, final approval status. If ANY quality gate fails → Status MUST be FAIL and completion MUST be blocked.

## Quality Gate

Before completing, MUST verify: Architecture compliance passed, Design compliance passed, Engineering compliance passed, Copy compliance passed, SEO compliance passed, Performance compliance passed, Accessibility compliance passed, all violations fixed, all quality gates passed, final validation successful. If ANY quality gate fails → DO NOT SHIP.

## Failure Modes

This SOP fails when: Quality gates are skipped, violations are ignored, pages are completed with violations, compliance checks are incomplete, validation is non-deterministic, exceptions are allowed, violation documentation is incomplete.

## Definition of Done

A landing page is QA-complete when: All quality gates passed, all violations fixed, all compliance checks verified, all SOPs complied with, final validation successful, QA Compliance Report shows PASS status. Once these are satisfied → QA is DONE.

