import executionEnv from '../index';

describe('execution environment', () => {
  test('should be client side environment with JSDOM', () => {
    const result = executionEnv.isClientSide;

    expect(result).toBe(true);
  });

  test('should not be client side environment', () => {
    executionEnv.isClientSide = false;
    const result = executionEnv.isClientSide;

    expect(result).toBe(false);
  });

  test('eventListeners should be available with JSDOM', () => {
    const result = executionEnv.canUseEventListeners;

    expect(result).toBe(true);
  });

  test('eventListeners should be available', () => {
    executionEnv.canUseEventListeners = false;
    const result = executionEnv.canUseEventListeners;

    expect(result).toBe(false);
  });
});
