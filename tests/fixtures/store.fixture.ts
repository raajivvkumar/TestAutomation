import { test as base, expect } from '@playwright/test';
import { DemoStorePage } from '../page-objects/demoStorePage';

type DemoFixtures = {
  store: DemoStorePage;
};

export const test = base.extend<DemoFixtures>({
  store: async ({ page }, use) => {
    await use(new DemoStorePage(page));
  }
});

export { expect };
