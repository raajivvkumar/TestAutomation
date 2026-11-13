import type { Page } from '@playwright/test';

export class DemoStorePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async signIn(email = 'demo@example.test', password = 'demo-only'): Promise<void> {
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }

  async sortByLowestPrice(): Promise<void> {
    await this.page.getByLabel('Sort products').selectOption('price-asc');
  }

  productCards() {
    return this.page.getByTestId('product-card');
  }

  async addProduct(name: string): Promise<void> {
    await this.page.getByRole('button', { name: 'Add ' + name }).click();
  }

  async openCart(): Promise<void> {
    await this.page.getByRole('button', { name: 'View cart' }).click();
  }

  async checkout(name: string, address: string): Promise<void> {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
    await this.page.getByLabel('Full name').fill(name);
    await this.page.getByLabel('Address').fill(address);
    await this.page.getByRole('button', { name: 'Place demo order' }).click();
  }
}
