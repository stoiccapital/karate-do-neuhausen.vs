Prime Directive

Enforce deterministic, reusable, Stripe-grade landing-page architecture for all pages generated in Cursor.

Scope
2. Governs page shell, navbar, canonical section order, hierarchy rules, section schemas, and allowed structural patterns.

Non-Negotiable Laws
3. Page shell MUST follow: Navbar → Main Sections → Final CTA → Footer.
4. Navbar MUST always exist, be independent from Hero, contain only logo + links + optional CTA.
5. Navbar MUST NOT contain H1/H2, forms, long text, media, or content blocks.
6. Main content MUST follow EXACT order: Hero → Social Proof → Value Props → Features → Deep Dives → Use Cases → Testimonials → Pricing(optional) → FAQ → Final CTA.
7. Footer MUST be global, reusable, link-only, no H1/H2, no mixed content.
8. EXACTLY one H1 exists, located in Hero only.
9. Every section MUST begin with an H2.
10. Sub-elements MAY use H3; no H4–H6 permitted.
11. Sections MUST NOT nest other sections.
12. Sections MUST NOT duplicate H2s.
13. Each section MUST represent one intent only.
14. All pages MUST use approved primitives: Section, Container, Grid, Stack, Headline, Subheadline, Paragraph, ValueCard, FeatureCard, TestimonialCard, ImageBlock, VideoBlock, PrimaryButton, SecondaryButton.
15. Custom structural HTML is forbidden.
16. Arbitrary or hybrid section types are forbidden.
17. Canonical sections MUST NOT be reordered, merged, or skipped without explicit allowance.
18. Optional sections MUST be explicitly declared as present or absent.
19. No structural hacks, wrappers, or page-specific exceptions allowed.
20. Architecture MUST be identical across all landing pages.

Section Schemas
21. Hero: H1 → Subheadline → CTA group → optional media.
22. Social Proof: H2 → optional subtitle → logo grid or metrics (max 6).
23. Value Props: H2 → optional subtitle → 3–6 value cards (Icon → Title → Body).
24. Features: H2 → optional subtitle → feature blocks (Icon → Title → Body → optional link) + optional media.
25. Deep Dives: H2 → optional subtitle → 1–3 technical/workflow explanations + optional media.
26. Use Cases: H2 → optional subtitle → 3–6 cards (Title → Body → optional metrics).
27. Testimonials: H2 → optional subtitle → Quote → Name → Role → optional metric.
28. Pricing(optional): H2 → subtitle(optional) → pricing table or plans grid → CTA group.
29. FAQ: H2 → list of FAQ items (Question → Answer).
30. Final CTA: H2 → closing pitch → CTA group.

Reusability Laws
31. Navbar MUST be reusable across pages.
32. Footer MUST be reusable across pages.
33. All section types MUST be reusable without modification.

Determinism Rules
34. Cursor MUST always include a Navbar.
35. Cursor MUST always enforce canonical order.
36. Cursor MUST NOT invent new structures.
37. Cursor MUST NOT reorder, merge, or hybridize sections.
38. Cursor MUST enforce one intent per section.
39. Cursor MUST enforce hierarchy rules before output.

Output Requirements (Cursor)
40. Generate the page shell first (Navbar → Main → Footer).
41. Insert sections in canonical order only.
42. Validate each section against its schema.
43. Enforce one H1 in Hero.
44. Enforce H2 at section start.
45. Enforce use of approved primitives only.
46. Enforce no forbidden constructs.
47. Export sections as reusable modules.
48. Do NOT include design tokens here (architecture only).

Definition of Done
49. Page includes navbar, canonical structure, one H1, correct hierarchies, reusable primitives, and no violations.
50. Architecture is accepted ONLY if all constraints above are satisfied with zero drift.