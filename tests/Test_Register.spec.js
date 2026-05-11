const { test, expect } = require('@playwright/test');
const { TC_015_Register } = require('../Pages/TC_015_Register.spec'); 


test('Test_Register', async ({ page }) => {
    const login = new TC_015_Register(page);
    await login.ValidLoginDetails();
    
});
