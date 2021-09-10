import {canUseEventListeners, isClientSide} from '../../src/utils/executionEnv';

describe('executionEnv', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const setUp = () => {
    return {
      path: '../../src/utils/executionEnv',
    };
  };

  test('should be client side environment with JSDOM', () => {
    expect(isClientSide).toBe(true);
  });

  test('should not be client side environment', () => {
    const {path} = setUp();

    jest.doMock(path, () => {
      return {
        isClientSide: false,
      };
    });

    return import(path).then(module => {
      expect(module.isClientSide).toBe(false);
    });
  });

  test('eventListeners should be available with JSDOM', () => {
    expect(canUseEventListeners).toBe(true);
  });

  test('eventListeners should not be available', () => {
    const {path} = setUp();

    jest.doMock(path, () => {
      return {
        canUseEventListeners: false,
      };
    });

    return import(path).then(module => {
      expect(module.canUseEventListeners).toBe(false);
    });
  });
});
