const { test, expect } = require('@playwright/test');
const {TC_04_Nulluser} = require ('../Pages/TC_04_Nulluser.spec')

test('Test_Register', async ({ page }) => {
    const login = new TC_04_Nulluser(page);
    await login.login();
    
});