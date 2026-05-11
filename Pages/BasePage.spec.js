const config = require('../config/config.json');  // Load JSON instead of .properties

class BasePage {
  constructor(page) {
    this.page = page;
    this.config = config; // Store config globally
  }

  async navigateTo() {
    const URL = this.config.baseURL
    await this.page.goto(URL);
  }
}

module.exports = { BasePage };
