const { test, expect } = require('@playwright/test');

test.describe('ExpenseItem Tests', () => {
  
  test('should update title when button is clicked', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust URL if necessary
    
    const initialTitle = await page.locator('h2').textContent();
    await page.click('button.change-title');
    
    await expect(page.locator('h2')).toHaveText('Updated!');
  });

});
