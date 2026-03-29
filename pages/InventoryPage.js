class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addFirstToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.pageTitle = page.getByText('Products');
  }

  async addFirstProductToCart() {
    await this.addFirstToCartButton.waitFor({ state: 'visible' });
    await this.addFirstToCartButton.click();
  }

  async openCart() {
    await this.shoppingCartLink.click();
    await this.page.waitForURL('**/cart.html');
  }
}

module.exports = { InventoryPage };
