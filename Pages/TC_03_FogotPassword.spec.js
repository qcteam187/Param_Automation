const{expect} = require('@playwright/test');

exports.TC_03_FogotPassword =class TC_03_FogotPassword  {
  constructor(page) {
    this.page = page;
    this.FP = page.getByRole('link', { name: 'Forgot login info?' });
    this.FirstName = page.locator('#firstName');
    this.LastName = page.locator('#lastName');
    this.CustomerAddress = page.locator('[name="address.street"]');
    this.CustomerCity = page.locator('[name="address.city"]');
    this.CustomerState = page.locator('[name="address.state"]');
    this.CustomerZipCode = page.locator('[name="address.zipCode"]');
    this.CustomerSSN = page.locator('[name="ssn"]');
    this.ForgotPassword = page.locator('[name="Find My Login Info"]');
    this.Final= page.locator('xpath=//input[@value="Find My Login Info"]')
  
  }
  async ForgotPasswords() 
  {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    await this.FP.click();
    await this.FirstName.fill("IAm")
    await this.LastName.fill("Liam")
    await this.CustomerAddress.fill("Main Block")
    await this.CustomerCity.fill("Nz")
    await this.CustomerState.fill("KL")
    await this.CustomerZipCode.fill("123")
    await this.CustomerSSN.fill("12334")
    //await this.ForgotPassword.click();
    await this.Final.click();
  }
}
