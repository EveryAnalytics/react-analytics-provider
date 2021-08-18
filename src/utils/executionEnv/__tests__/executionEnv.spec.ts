import executionEnv from '../index';

describe('Execution environment', () => {
  it('should not be client side', () => {
    const result = executionEnv.isClientSide;

    expect(result).toBe(false);
  });

  it('EventListeners should not be available', () => {
    const result = executionEnv.canUseEventListeners;

    expect(result).toBe(false);
  });
});
