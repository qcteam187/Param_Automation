const { test, expect } = require('@playwright/test');
const {TC_01_ValidUserLogin} = require ('../Pages/TC_01_ValidUserLogin.spec')

test('Test_Register', async ({ page }) => {
    const login = new TC_01_ValidUserLogin(page);
    await login.ValidUserlogin();
    
});

