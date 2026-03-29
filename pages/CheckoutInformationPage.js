class CheckoutInformationPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.postalCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.cancelButton = page.getByRole('button', { name: /Cancel/ });
    this.errorBanner = page.locator('[data-test="error"]');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
    await this.page.waitForURL('**/checkout-step-two.html');
  }

  async submitEmptyForm() {
    await this.firstNameInput.fill('');
    await this.lastNameInput.fill('');
    await this.postalCodeInput.fill('');
    await this.continueButton.click();
  }

  async cancelToCart() {
    await this.cancelButton.click();
    await this.page.waitForURL('**/cart.html');
  }
}

module.exports = { CheckoutInformationPage };
