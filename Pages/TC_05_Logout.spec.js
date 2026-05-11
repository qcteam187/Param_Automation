const{expect} = require('@playwright/test')
const config = require('../config/config.json');

exports.TC_05_Logout =class TC_05_Logout  {
  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
  
   this.logout = page.locator("//Ul/li/a[@href='logout.htm']");


   
  }

  async login() {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    await this.Username.fill("Aruns")
    await this.Password.fill("Test@123")
    await this.LoginClick.click();
    await this.logout.click();

   // await this.logout.click();
  
  }
}