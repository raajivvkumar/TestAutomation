# Example QA Delivery Report — Template

**Project:** Sample Store (fictional local app)
**Engagement:** Playwright E2E demonstration
**Tester:** Portfolio example
**Environment:** Localhost only
**Execution status:** NOT EXECUTED as part of this document. Populate actual run facts after testing.

## Scope of sample checks

| ID | Scenario | Expected result | Actual result |
| --- | --- | --- | --- |
| QA-001 | Invalid login | Error is visible; login view remains | Not recorded |
| QA-002 | Login and inventory sorting | Products in ascending price order | Not recorded |
| QA-003 | Add to cart and checkout | Order confirmation, no actual payment | Not recorded |
| QA-004 | Empty cart | Checkout disabled | Not recorded |
| QA-005 | Logout | Login view and empty cart on next login | Not recorded |

## Defect reporting format

- **Title:** Concise observable failure
- **Environment:** Browser / version, OS, build, time
- **Preconditions:** Account and test data (never real credentials)
- **Steps to reproduce:** Numbered, minimal, exact
- **Expected:** Business requirement
- **Actual:** What occurred, with redacted evidence
- **Severity:** Blocker / High / Medium / Low, with rationale
- **Evidence:** Sanitized screenshot or trace accessible only to authorized parties
- **Status / owner:** Open, triaged, fixed, retested

## Acceptance and privacy

Do not claim a passing test run without captured execution evidence. Do not place private customer URLs, credentials, screenshots, logs, cookies, or raw response bodies in a public report. Share customer-specific artifacts through a client-approved private system.
