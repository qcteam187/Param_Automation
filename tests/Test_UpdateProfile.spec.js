const {expect,test} = require("@playwright/test")
const {TC_012_EditProfile} = require('../Pages/TC_012_EditProfile.spec')

test('Test_Register', async ({ page }) => {
        const AO = new TC_012_EditProfile (page);
        await AO.Request();
}

);