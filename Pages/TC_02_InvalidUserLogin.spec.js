const { expect } = require('@playwright/test');


export class TC_02_InValidUserLogin  {
  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
  }

  async login() {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    await this.Username.fill("Arunsasda");
    await this.Password.fill("Test@123");
    await this.LoginClick.click();
  }
}