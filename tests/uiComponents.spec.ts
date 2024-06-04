import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/') 
});

test.describe('Forms Layoyt Page', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    });
    test('Input Fields', async ({page}) => {
        const singTheGridEmailInput =  page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox', {name: 'Email'})
       
       
        
        await singTheGridEmailInput.fill('aludmila.gdev@gmail.com')
        await singTheGridEmailInput.clear()

        await singTheGridEmailInput.pressSequentially('aludmila2.gdev@gmail.com', {delay: 100})

        
        //Generic assertions 
        const inputValue = await singTheGridEmailInput.inputValue()
        expect(inputValue).toBe('aludmila2.gdev@gmail.com')
        
        //Locator assertions 
        
        await expect(singTheGridEmailInput).toHaveValue('aludmila2.gdev@gmail.com')
    })
})

