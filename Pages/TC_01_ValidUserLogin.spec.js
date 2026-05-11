const { BasePage } = require('./BasePage.spec');  // ✅ not .spec
const config = require('../config/config.json');

class TC_01_ValidUserLogin extends BasePage {
  constructor(page) {
    super(page);
    this.Username = page.locator('input[name="username"]');
    this.Password = page.locator('input[name="password"]');
    this.LoginClick = page.locator('input[value="Log In"]');
  }

  async ValidUserlogin() {
  
    await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    await this.Username.fill("Aruns")
    await this.Password.fill("Test@123")
    await this.LoginClick.click();
  }
}

module.exports = { TC_01_ValidUserLogin };