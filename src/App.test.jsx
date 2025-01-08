import { expect, test } from 'vitest';

test('App includes "Mahfujur Rahman" text', async () => {
  const app = await import('./App?raw');
  expect(app.default).toContain('Mahfuzur Rahman');
});

