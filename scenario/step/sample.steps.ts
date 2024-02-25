import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomWorld } from './helper/custom-world'

Given('User visits playwright homepage', async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('https://playwright.dev/')
})

Then('Expect a title "to contain" a substring', async function (this: ICustomWorld) {
    const page = this.page!
    await expect(page).toHaveTitle(/Playwright/);
})

When('Get started link', async function (this: ICustomWorld) {
    const page = this.page!
    await page.getByRole('link', { name: 'Get started' }).click();
  })

Then('Expects page to have a heading with the name of Installation', async function (this: ICustomWorld) {
    const page = this.page!
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})