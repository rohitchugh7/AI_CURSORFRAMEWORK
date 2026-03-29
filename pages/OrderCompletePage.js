class OrderCompletePage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.getByRole('heading', { name: 'Thank you for your order!' });
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async backHome() {
    await this.backHomeButton.click();
    await this.page.waitForURL('**/inventory.html');
  }
}

module.exports = { OrderCompletePage };
