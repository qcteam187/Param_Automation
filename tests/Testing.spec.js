const { test, expect } = require('@playwright/test');

const { TC_TEsting } = require('../Pages/TC_TEsting.spec');

test('Test_Register', async ({ page }) => {
    const login = new TC_TEsting(page);
    await login.login();
    
});