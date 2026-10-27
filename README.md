
# Playwright Login Automation

## Project Overview
An end-to-end web testing project using Playwright and JavaScript. It validates login and logout behavior on a public practice website.

## Tools and Technologies
- JavaScript
- Node.js and npm
- Playwright Test
- Chromium, Firefox, and WebKit

## Test Scenarios
1. Successful login
2. Invalid password validation
3. Invalid username validation
4. Successful logout
5. Empty login form validation

## Testing Techniques
- Locators and assertions
- Positive and negative test scenarios
- URL and page-heading verification
- Cross-browser testing
- Test setup with `beforeEach()`
- Test organization with `describe()`
- HTML reports and failure debugging
- Screenshots and Trace Viewer

## Setup
- Install dependencies: `npm ci`
- Install Playwright browsers: `npx playwright install`

## Run Login Tests
- All configured browsers: `npx playwright test tests/login.spec.js --workers=1`
- Chromium only: `npx playwright test tests/login.spec.js --project=chromium --workers=1`
- Complete test suite: `npx playwright test --workers=1`

## View the HTML Report
Run `npx playwright show-report`.

## Learning Outcomes
This project demonstrates the fundamentals of writing, running, and debugging browser-based automated tests.

**Note:** This project uses a public practice website and is intended for learning and portfolio demonstration.