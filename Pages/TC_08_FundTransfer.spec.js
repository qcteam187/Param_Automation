const { expect } = require ('@playwright/test');

exports.TC_08_FundTransfer = class TC_08_FundTransfer
{
    constructor(page)
    {
        this.page = page;
        this.Username = page.locator('xpath=//input[@name="username"]');
        this.Password = page.locator('xpath=//input[@name="password"]');
        this.LoginClick = page.locator("xpath=//input[@value='Log In']");
        this.FundTr = page.locator("xpath=//a[@href='transfer.htm']")
        this.Amouint = page.locator("xpath=//input[@id='amount']")
        this.Transfer = page.locator("xpath=//input[@value='Transfer']");
    }

    async FundTrans()
    {

    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await this.Username.fill("Milo");
    await this.Password.fill("Test@123");
    await this.LoginClick.click();
    await this.FundTr.click();
    await this.Amouint.fill("1000");
    await this.Transfer.click();

    }
    
}