const { test, expect } = require('@playwright/test');
const {TC_08_FundTransfer} = require ('../Pages/TC_08_FundTransfer.spec')

test('Test_Register', async ({ page }) => {
    const login = new TC_08_FundTransfer(page);
    await login.FundTrans();
    
});