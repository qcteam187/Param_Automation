const {test,expect} = require('@playwright/test');
const {TC_011_RequestLoan} = require('../Pages/TC_011_RequestLoan.spec')

test('Test_Register', async ({ page }) => {
        const AO = new TC_011_RequestLoan(page);
        await AO.Request();
}

);

