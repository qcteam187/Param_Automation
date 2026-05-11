const { test, expect } = require('@playwright/test');
const {TC_02_InValidUserLogin} = require ('../Pages/TC_02_InvalidUserLogin.spec')

test('Test_Register', async ({ page }) => {
    const login = new TC_02_InValidUserLogin(page);
    await login.login();
    
});