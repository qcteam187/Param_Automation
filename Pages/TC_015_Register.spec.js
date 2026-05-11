const { expect } = require('@playwright/test');
//const { link } = require('fs');

exports.TC_015_Register = class TC_015_Register
 {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
       
    this.page = page;
    this.RegisterLink = page.getByRole('link', { name: 'Register' });
    this.CustomerFirstName = page.locator('[name="customer.firstName"]');
    this.CustomerLastName = page.locator('[name="customer.lastName"]');
    this.CustomerAddress = page.locator('[name="customer.address.street"]');
    this.CustomerCity = page.locator('[name="customer.address.city"]');
    this.CustomerState = page.locator('[name="customer.address.state"]');
    this.CustomerZip = page.locator('[name="customer.address.zipCode"]');
    this.CustomerSSN = page.locator('[name="customer.ssn"]');
    this.CustomerUserName = page.locator('[name="customer.username"]');
    this.CustomerPassword = page.locator('[name="customer.password"]');
    this.CustomerConfirmPassword = page.locator('[name="repeatedPassword"]');
    this.CustomerSubmit = page.locator('input[value="Register"]'); // or use button text if needed
}

    

    async ValidLoginDetails() {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
       await this.RegisterLink.click();
        await this.CustomerFirstName.fill("Arujn");
        await this.CustomerLastName.fill("Turn");
        await this.CustomerAddress.fill("Main Exit Block");
        await this.CustomerCity.fill("Main");
        await this.CustomerState.fill("UK");
        await this.CustomerZip.fill("123123");
        await this.CustomerSSN.fill("SEN");
         await this.CustomerUserName.fill("Arunsdss");
        await this.CustomerPassword.fill("Test@123");
        await this.CustomerConfirmPassword.fill("Test@123");
        await this.CustomerSubmit.click();
        

    }

    async CustomerZipss()
    {
        console.log("Customer State is: " + await this.CustomerZip.inputValue());
    }
};
