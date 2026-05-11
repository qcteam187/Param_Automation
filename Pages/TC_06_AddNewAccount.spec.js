const { expect } = require('@playwright/test');

exports.TC_06_AddNewAccount =class TC_06_AddNewAccount  {
  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
    this.NewAaccount = page.locator("xpath=//a[@href='openaccount.htm']");
    this.AddAccount = page.locator("xpath=//input[@value='Open New Account']");
    this.AccountDropdown = page.locator('#type'); 
    

    
  }

  async login() {

   await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    await this.Username.fill("Aruns")
    await this.Password.fill("Test@123")
    await this.LoginClick.click();
    await this.NewAaccount.click();
    await this.AccountDropdown.selectOption('SAVINGS');
    await this.AddAccount.click();    
    
  }
}