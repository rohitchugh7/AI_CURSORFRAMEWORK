class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.continueShoppingButton = page.getByRole('button', { name: /Continue Shopping/i });
    this.cartItemTitle = page.locator('.inventory_item_name');
    this.cartQuantity = page.locator('.cart_quantity');
  }

  async checkout() {
    await this.checkoutButton.click();
    await this.page.waitForURL('**/checkout-step-one.html');
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
    await this.page.waitForURL('**/inventory.html');
  }
}

module.exports = { CartPage };
