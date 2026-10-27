import { test, expect } from '@playwright/test';

test.describe('Login functionality', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
});

test('User can log in successfully', async ({ page }) => {

 

  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByRole('heading', { name: 'Secure Area', exact: true })
  ).toBeVisible();
  await expect(page).toHaveURL(
    'https://the-internet.herokuapp.com/secure'
);

});

test('Invalid password shows an error', async ({ page }) => {


  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('WrongPassword123!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#flash'))
    .toContainText('Your password is invalid!');
await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

});

test('Invalid username shows an error', async ({ page }) => {


  await page.locator('#username').fill('wronguser');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#flash'))
    .toContainText('Your username is invalid!');
await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});

test('User can log out successfully', async ({ page }) => {


  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Logout' }).click();
await expect(page).toHaveURL(
  'https://the-internet.herokuapp.com/login'
);
  await expect(page.locator('#flash'))
    .toContainText('You logged out of the secure area!');

  await expect(
    page.getByRole('heading', { name: 'Login Page', exact: true })
  ).toBeVisible();
});

test('Empty login form shows an error', async ({ page }) => {


  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#flash'))
    .toContainText('Your username is invalid!');
});
});