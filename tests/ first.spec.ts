import {test} from '@playwright/test'

test.beforeEach(async ({page}) => {
     await page.goto('http://localhost:4200/') 
     await page.getByText('Forms').click()
     await page.getByText('Form Layouts').click()
})

test('Locator sintax rules', async ({page}) => {
    // By tag name
    page.locator('input')

    // By id
    await page.locator('#inputEmail1').click()

    // By class
    page.locator('.shape-rectangle')

    // By attribute
    page.locator('[placeholder="Email"]')

    // By class value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    // Combinations
    page.locator('input[placeholder="Email"]')
    page.locator('input[placeholder="Email"].input-full-width')

    // by partial text match
    page.locator(':text("Using the Grid")')

    // by text match
    page.locator(':text-is("Using the Grid")')
})





