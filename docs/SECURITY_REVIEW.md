# Public portfolio security review

Review date: 2026-11-13. Scope: the public GitHub repository `raajivvkumar/TestAutomation`.

## Review performed

- Inspected the current repository file tree and all 12 reachable commits' file-tree listings on `main`.
- Examined commit change details and the current Playwright tests, POM, package metadata, workflow, and example Allure output.
- Checked available source/history change text for common secret signatures such as private-key markers, GitHub/AWS token formats, and obvious credential assignments. This was a **targeted review, not a certified exhaustive secret scan**.
- No recognizable *live* API credential was identified in the inspected material. This does **not** prove the entire Git history or third-party dependencies are free from secrets.

## Additional content scan

- Scanned 50 current text blobs smaller than 100 KB for recognizable private-key markers and common GitHub, AWS and OpenAI/Stripe token signatures; no matching live-token patterns were detected. The scan confirmed a sample password string and old machine hostname in committed test results.
- A generated minified JavaScript bundle (~630 KB) and a binary icon were not covered by the small-text scan. Historic commit patches were inspected separately; this is still **not** a substitute for a dedicated full-history scanner.
- The old test password was demonstrative input in a public practice page, not proof of a live credential.

## Findings

1. Generated `allure-report/` and `allure-results/` had been committed. These contain test steps, illustrative password strings, an example email, and a local machine hostname. They should not be published as portfolio evidence.
2. Existing test code uses a hardcoded **demo input** password. This is not evidence of a real login credential; do not reuse real account passwords as test data.
3. The public demo domain in the original POM and legacy tests is an external test website. Do not substitute client URLs or customer data into public tests.
4. The original `package.json` had repository metadata pointing to a different GitHub owner.
5. The original CI ran on every push to `main` or `master` and on pull requests, potentially consuming Actions minutes. The portfolio workflow is manual-only while billing/limits are uncertain.

## Mitigation on this branch

- Remove tracked generated report files from this branch's **current tree** and ignore future generated artifacts.
- Provide a self-contained local demo, fake-only data, and deterministic tests; no API keys, external credentials or customer data.
- Keep `main` unchanged until reviewed. No history rewriting and no force-push.
- Do not automatically run GitHub Actions on push or PR; use the manual Actions workflow only when budget allows.

## Important: historical exposure

Deleting files from the current tree does **not** remove them from earlier Git commits, caches or forks. If any real secret was ever committed, revoke/rotate it first, then plan a coordinated history rewrite or a clean new repository. A rewrite is destructive and has **not** been performed.

## Follow-up before public client outreach

- Check repository history using a dedicated secret scanner (for example, Gitleaks) in a trusted local environment and review any findings.
- Verify no employer/client IP, access tokens, personal details or confidential URLs are present in README, test data, screenshots, logs, artifacts, or commit history.
- Make only approved, sanitized portfolio screenshots and reports public.
