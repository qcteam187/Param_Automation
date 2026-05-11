const {expect} = require('@playwright/test');
exports.TC_012_EditProfile = class TC_012_EditProfile{

  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
    this.Update = page.locator("xpath=//a[@href='updateprofile.htm']");
    this.CustomerFirstName = page.locator('[name="customer.firstName"]');
    this.CustomerLastName = page.locator('[name="customer.lastName"]');
    this.CustomerAddress = page.locator('[name="customer.address.street"]');
    this.CustomerCity = page.locator('[name="customer.address.city"]');
    this.CustomerState = page.locator('[name="customer.address.state"]');
    this.Confirm = page.locator("xpath=//input[@value='Update Profile']")

   
  }

  async Request()
  {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await this.Username.fill("Milo");
    await this.Password.fill("Test@123");
    await this.Update.click();
     await this.CustomerFirstName.fill("Arun");
        await this.CustomerLastName.fill("Turn");
        await this.CustomerAddress.fill("Main Exit Block");
        await this.Confirm.click();

   


  }
}

