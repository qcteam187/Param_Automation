const {test,expect} =  require('@playwright/test');
const {TC_06_AddNewAccount} = require ('../Pages/TC_06_AddNewAccount.spec')

test('Test_Register', async ({ page }) => {
    const NewOne = new TC_06_AddNewAccount(page);
    await NewOne.login();
    
});
