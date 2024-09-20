const { test, expect } = require('@playwright/test');

test.describe('ExpenseForm Tests', () => {
  
  test('should submit the form with valid data', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust URL if necessary
    
    await page.fill('input#title', 'New Laptop');
    await page.fill('input#amount', '999.99');
    await page.fill('input#date', '2024-10-15');
    await page.click('button[type="submit"]');
    
    // Add assertions based on expected behavior after form submission
    // For example, you might want to check if the new expense is displayed in the list
  });

  test('should show error with empty data', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust URL if necessary
    
    await page.click('button[type="submit"]');
    
    const errorModal = await page.locator('.error-modal');
    await expect(errorModal).toBeVisible();
    await expect(errorModal.locator('p')).toHaveText('Please enter a valid title, amount and date (non-empty values).');
  });

  test('should close the form when cancel button is clicked', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust URL if necessary
    
    await page.click('button.cancel');
    
    const form = await page.locator('form');
    await expect(form).toBeHidden();
  });

});
