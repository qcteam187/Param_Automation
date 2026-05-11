const {expect , test} = require("@playwright/test")
const {TC_013_Transactions} = require('../Pages/TC_013_Transactions.spec')

test ('Tra', async ({ page }) => {

const TC = new TC_013_Transactions(driver);
await TC.trans();
 
});

