const { expect } = require('@playwright/test');

exports.TC_07_AccountOverview =class TC_07_AccountOverview  {
  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
    this.Overview = page.locator("xpath=//a[@href='overview.htm']");
    this.SpecificAccount = page.locator("xpath=//a[@href='activity.htm?id=14454']");


    //Get the id from previous 
  }

  async login() {
    
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await this.Username.fill("Milo");
    await this.Password.fill("Test@123");
    await this.LoginClick.click();
    await this.Overview.click();
    await this.SpecificAccount.click();
  }
}