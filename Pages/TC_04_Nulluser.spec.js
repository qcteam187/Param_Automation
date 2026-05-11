const{expect} = require('@playwright/test')

exports.TC_04_Nulluser =class TC_04_Nulluser  {
  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
  }

  async login() {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    await this.Username.fill("");
    await this.Password.fill("@123");
    await this.LoginClick.click();
  }
}