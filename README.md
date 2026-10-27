
## Setup

- Install dependencies: `npm ci`
- Install Playwright browsers if needed: `npx playwright install`

## Run Login Tests

- All configured browsers: `npx playwright test tests/login.spec.js --workers=1`
- Chromium only: `npx playwright test tests/login.spec.js --project=chromium --workers=1`
- Complete test suite: `npx playwright test --workers=1`

## View the HTML Report

Run `npx playwright show-report`.
