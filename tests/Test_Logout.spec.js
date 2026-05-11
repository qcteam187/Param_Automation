const { test, expect } = require('@playwright/test');
const {TC_05_Logout} = require ('../Pages/TC_05_Logout.spec')
const {TC_01_ValidUserLogin} = require ('../Pages/TC_01_ValidUserLogin.spec')

test('Test_Register', async ({ page }) => {
    const ValidUserLogout = new TC_05_Logout(page);
    //const login = new TC_01_ValidUserLogin(page);
    //await login.ValidUserlogin();
    await ValidUserLogout.login();
    
});