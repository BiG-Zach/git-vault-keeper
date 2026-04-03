# LOVABLE Operations Guardrails

- Never change: desktop (≥768px), routing, api/**, env vars, analytics, Tailwind config.
- Mobile-only rule: all mobile CSS must live in src/mobile/*.module.css and be wrapped by:
  @media (max-width: 767.98px) { … }
- Component wiring rule: only import the mobile module and APPEND classNames to existing elements; do not alter structure/logic/IDs/field names.
- PR policy: every PR must include PLAN → PATCH DIFF → Files Touched → QA (iPhone 14) and the sentence “No desktop diffs.”
- Fail-closed: if a target component isn’t found, skip gracefully.
