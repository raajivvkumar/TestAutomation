# QA Automation Portfolio — Playwright + TypeScript

A **public-safe, demonstrable E2E automation portfolio** designed to show reliable UI testing, Page Object Model (POM), custom fixtures, cross-browser setup, HTML/Allure reports, and GitHub Actions.

> **Demo disclaimer:** The included Sample Store is a fictional, local-only website. All products, identities, addresses, passwords, and orders are fabricated. No real purchases, customer accounts, employer code, paid services, or third-party API keys are used.

## What a client can evaluate

| Capability | Evidence |
| --- | --- |
| End-to-end workflow coverage | Login validation, sorting, add to cart, disabled empty checkout, checkout, logout |
| Maintainable automation | Page object at tests/page-objects/demoStorePage.ts |
| Reusable fixtures | tests/fixtures/store.fixture.ts |
| Fast and reproducible sample app | demo/index.html with demo/server.mjs; runs only on 127.0.0.1 |
| Cross-browser configuration | Playwright Chromium, Firefox, and WebKit projects |
| Reports and diagnostics | Playwright HTML, Allure, trace, screenshot, and video on failure |
| CI | Manual GitHub Actions workflow with read-only repository permission |

The existing external SQA Tools tests and POM are preserved for optional manual execution. They are **not** part of the default portfolio suite.

## Quick start (Node.js 20+)

    npm ci
    npx playwright install chromium
    npm run test:portfolio -- --project=chromium

For local HTML reporting:

    npx playwright show-report

For Allure reporting (requires Java):

    npm run allure:generate
    npm run allure:open

For all three browser engines, install the required browsers and run:

    npx playwright install
    npm run test:portfolio

To run the older external public demo tests separately (requires internet, and may be subject to third-party availability):

    npm run test:external

To open the fictional Sample Store without running Playwright:

    node demo/server.mjs

Then navigate to http://127.0.0.1:4173. Demo login: **demo@example.test / demo-only**. These are fictional demo input values, not secrets.

## Test coverage

| Test scenario | Expected outcome |
| --- | --- |
| Invalid demo login | Accessible error message, login remains visible |
| Valid demo login and sort | Inventory visible, low-price sorting changes product order |
| Cart and checkout | Item appears in cart, fake order success confirmation |
| Empty cart | Checkout button disabled |
| Logout | Returns to sign-in and clears in-memory cart |

Test source: tests/portfolio/store.spec.ts. The app is intentionally deterministic; no real external services are invoked.

## Running in GitHub Actions

The workflow at .github/workflows/playwright.yml is **manual-only** (workflow_dispatch) to avoid running paid/budget-limited CI jobs automatically on pushes or PRs. When your GitHub Actions budget permits, open **Actions → Portfolio Playwright Tests → Run workflow** and select the branch. Reports are uploaded for 7 days. A configured workflow is **not evidence of a successful run**.

The default npm test runs the self-contained portfolio. Older code and scripts are kept accessible via test:external.

## Public safety and scope

- **Do not commit** real auth cookies, client environments, access tokens, screenshots containing private data, .env, or test reports from private systems.
- Generated report folders are excluded through .gitignore and removed from this branch's current Git tree.
- Historic commits on main include old test output; removing them from a new commit does **not** erase Git history. Read docs/SECURITY_REVIEW.md before sharing this repository professionally.
- This is an example test harness, not a production e-commerce application and not evidence of paid client work.
- If you customize the demo, keep any customer data outside public repositories.

## Evidence and client-facing deliverables

- Sample report template: docs/QA_SAMPLE_REPORT.md
- Security review: docs/SECURITY_REVIEW.md
- Existing Allure guide: docs/ALLURE_INTEGRATION_GUIDE.md
- Original external automation: tests/automationPractice.spec.ts and tests/automationPracticeAlerts.spec.ts

## Suggested freelance offering

**Fixed-scope Playwright smoke testing for SaaS release workflows:** clarify critical scenarios with a client, automate agreed flows in their permitted environment, run tests, deliver a concise defect report, and give maintainable instructions. The demo shows the testing approach only; actual project scope, rates, and delivery terms are agreed with each client.
