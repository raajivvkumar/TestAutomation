import { test, expect } from '../fixtures/store.fixture';

test.describe('Sample Store | public synthetic E2E flows', () => {
  test('rejects invalid demo credentials', async ({ page, store }) => {
    await store.goto();
    await store.signIn('wrong@example.test', 'not-the-demo-password');

    await expect(page.getByRole('alert')).toHaveText('Invalid demo credentials');
    await expect(page.getByRole('heading', { name: 'Demo sign in' })).toBeVisible();
  });

  test('signs in and sorts inventory by ascending price', async ({ page, store }) => {
    await store.goto();
    await store.signIn();

    await expect(page.getByRole('heading', { name: 'Inventory' })).toBeVisible();
    await store.sortByLowestPrice();
    await expect(store.productCards()).toHaveCount(3);
    await expect(store.productCards().first()).toContainText('Notebook');
    await expect(store.productCards().last()).toContainText('Backpack');
  });

  test('adds a product to cart and completes fake checkout', async ({ page, store }) => {
    await store.goto();
    await store.signIn();
    await store.addProduct('Water Bottle');
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('1');

    await store.openCart();
    await expect(page.getByRole('heading', { name: 'Your cart' })).toBeVisible();
    await expect(page.getByRole('list', { name: 'Cart items' })).toContainText('Water Bottle');
    await expect(page.locator('#cart-total')).toHaveText('Total: ₹500');

    await store.checkout('Demo Tester', '123 Example Street');
    await expect(page.getByRole('heading', { name: 'Order confirmed' })).toBeVisible();
  });

  test('does not allow checkout with an empty cart', async ({ page, store }) => {
    await store.goto();
    await store.signIn();
    await store.openCart();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeDisabled();
  });

  test('signs out without retaining cart state', async ({ page, store }) => {
    await store.goto();
    await store.signIn();
    await store.addProduct('Notebook');
    await page.getByRole('button', { name: 'Sign out' }).click();

    await expect(page.getByRole('heading', { name: 'Demo sign in' })).toBeVisible();
    await store.signIn();
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('0');
  });
});
