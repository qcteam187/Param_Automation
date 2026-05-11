const {expect} = require('@playwright/test')

exports.TC_011_RequestLoan =class TC_011_RequestLoan{
  constructor(page) {
    this.page = page;
    this.Username = page.locator('xpath=//input[@name="username"]');
    this.Password = page.locator('xpath=//input[@name="password"]');
    this.LoginClick = page.locator("xpath=//input[@value='Log In']");
    this.RequestLoanClick = page.locator("xpath=//a[@href='requestloan.htm']");
    this.Amount = page.locator('xpath=//input[@name="amount"]');
    this.DownPayment = page.locator('xpath=//input[@id="downPayment"]');
    this.Confirm= page.locator('xpath=//input[@value="Apply Now"]')
  }

  async Request()
  {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await this.Username.fill("Milo");
    await this.Password.fill("Test@123");
    await this.RequestLoanClick.click();
    await this.Amount.fill("121233");
    await this.DownPayment.fill("1123");
    await this.Confirm.click();


  }
}