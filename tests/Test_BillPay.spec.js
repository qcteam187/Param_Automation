const { test, expect } = require('@playwright/test');
const {TC_09_BillPay} = require ('../Pages/TC_09_BillPay.spec')

test('Test_Register', async ({ page }) => {
    const login = new TC_09_BillPay(page);
    await login.FundTrans();
    
});