const { test, expect } = require('@playwright/test');
const {TC_03_FogotPassword} = require ('../Pages/TC_03_FogotPassword.spec')

test('Test_Register', async ({ page }) => {
    const login = new TC_03_FogotPassword(page);
    await login.ForgotPasswords();
    
});