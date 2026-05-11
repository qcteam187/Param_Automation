const {expect} = require('@playwright/test')
exports.TC_09_BillPay = class TC_09_BillPay

{
    constructor(page)
    {
        this.page = page;
        this.Username = page.locator('xpath=//input[@name="username"]');
        this.Password = page.locator('xpath=//input[@name="password"]');
        this.LoginClick = page.locator("xpath=//input[@value='Log In']");
        this.FundTr = page.locator("xpath=//a[@href='billpay.htm']");
        this.Name = page.locator("xpath=//input[@name='payee.name']")
        this.Address = page.locator("xpath=//input[@name='payee.address.street']")
        this.City = page.locator("xpath=//input[@name='payee.address.city']")
        this.State = page.locator("xpath=//input[@name='payee.address.state']")
        this.Zip = page.locator("xpath=//input[@name='payee.address.zipCode']")
        this.Phone = page.locator("xpath=//input[@name='payee.phoneNumber']")
        this.AccountNum = page.locator("xpath=//input[@name='payee.accountNumber']")
        this.VerifyAccount = page.locator("xpath=//input[@name='verifyAccount']")
        this.Amount = page.locator("xpath=//input[@name='amount']")
        this.Confirm = page.locator("xpath=//input[@value='Send Payment']")
    }

    async FundTrans()
    {

    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await this.Username.fill("Tim");
    await this.Password.fill("Test@123");
    await this.LoginClick.click();
    await this.FundTr.click();
    await this.Name.fill("Xar");
    await this.Address.fill("123");
    await this.City.fill("Ts");
    await this.State.fill("KER");
    await this.Zip.fill("1231");
    await this.Phone.fill("123123");
    await this.AccountNum.fill("123");
    await this.VerifyAccount.fill("123");
    await this.Amount.fill("132");
    await this.Confirm.click();

    }
    
}