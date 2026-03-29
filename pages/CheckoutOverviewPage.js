class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.cancelButton = page.getByRole('button', { name: /Cancel/ });
    this.itemLink = page.locator('.inventory_item_name');
  }

  async finishOrder() {
    await this.finishButton.click();
    await this.page.waitForURL('**/checkout-complete.html');
  }

  async cancelFromOverview() {
    await this.cancelButton.click();
    await this.page.waitForURL('**/inventory.html');
  }
}

module.exports = { CheckoutOverviewPage };
