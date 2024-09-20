const { test, expect } = require('@playwright/test');

test.describe('ExpensesFilter Tests', () => {
  
  test('should update filter year correctly', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust URL if necessary
    
    await page.selectOption('select', '2024');
    
    // Add assertions based on expected behavior after year selection
    // For example, you might want to check if the expense list is updated accordingly
  });

});
