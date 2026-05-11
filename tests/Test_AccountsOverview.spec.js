const {test,expect} = require('@playwright/test');
const {TC_07_AccountOverview} = require('../Pages/TC_07_AccountsOverview.spec')

test('Test_Register', async ({ page }) => {
        const AO = new TC_07_AccountOverview(page);
        await AO.login();
}

);





