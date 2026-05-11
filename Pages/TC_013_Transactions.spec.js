const {expect} = require("@playwright/test")
exports.TC_013_Transactions = class TC_013_Transactions
{
constructor(page)
{
this.page = this.page;
this.Username = page.locator('xpath=//input[@name="username"]');
this.Password = page.locator('xpath=//input[@name="password"]');
this.LoginClick = page.locator("xpath=//input[@value='Log In']");
this.Update = page.locator("xpath=//a[@href='updateprofile.htm']");
this.TransID= page.locator("xpath=//input[@id='transactionId']")
this.TransIDButton= page.locator("xpath=//button[@id='findById']")
this.TransDate= page.locator("xpath=//input[@id='transactionDate']")
this.TransDateButton= page.locator("xpath=//button[@id='findByDate']")
this.FromDate= page.locator("xpath=//input[@id='fromDate']")
this.ToDate= page.locator("xpath=//input[@id='toDate']")   
this.TransDateRangeButton= page.locator("xpath=//button[@id='findByDateRange']")
this.Amount= page.locator("xpath=//input[@id='amount']")
this.AmountButton =page.locator("xpath=//button[@id='findByAmount']")
this.dpList = page.locator("xpath=//select[@id='accountId']")

}




async trans()
{

    await this.dpList.selectOption('123')

}

}

