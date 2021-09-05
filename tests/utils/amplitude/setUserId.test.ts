import * as faker from 'faker';
import amplitude from 'amplitude-js';
import * as setUserIdUtils from '../../../src/utils/amplitude/setUserId';

describe('amplitudeHelper.setUserId', () => {
  const setUp = () => {
    const userId = faker.lorem.word();
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    const amplitudeSetUserIdMock = jest.fn()
    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () => ({
        setUserId: amplitudeSetUserIdMock
      })
    )

    return {
      userId,
      consoleWarnSpy,
      getInstanceSpy,
      amplitudeSetUserIdMock,
    };
  };

  test('should warn if setUserId is called with falsy value', () => {
    const {consoleWarnSpy, getInstanceSpy} = setUp();
    const warning = 'userId is required for setUserId'

    setUserIdUtils.setUserId('')
    setUserIdUtils.setUserId(undefined)
    setUserIdUtils.setUserId(false)
    setUserIdUtils.setUserId(0)

    expect(consoleWarnSpy).toBeCalledTimes(4);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(1, warning);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(2, warning);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(3, warning);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(4, warning);
    expect(getInstanceSpy).toBeCalledTimes(0);
  });

  test('should warn if setUserId is called with incorrect Type', () => {
    const {consoleWarnSpy, getInstanceSpy} = setUp();
    const warning = 'userId must be a string or null'

    setUserIdUtils.setUserId(9999)
    setUserIdUtils.setUserId({})
    setUserIdUtils.setUserId(() => {})

    expect(consoleWarnSpy).toBeCalledTimes(3);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(1, warning);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(2, warning);
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(3, warning);
    expect(getInstanceSpy).toBeCalledTimes(0);
  });

  test(`should call amplitude setUserId with null userId`, () => {
    const {consoleWarnSpy, getInstanceSpy, amplitudeSetUserIdMock} = setUp();

    setUserIdUtils.setUserId(null)

    expect(consoleWarnSpy).toBeCalledTimes(0);
    expect(getInstanceSpy).toBeCalledTimes(1);
    expect(getInstanceSpy).toHaveBeenCalledWith();
    expect(amplitudeSetUserIdMock).toHaveBeenCalledWith(null);
  });

  test(`should call amplitude setUserId with string userId`, () => {
    const {userId, consoleWarnSpy, getInstanceSpy, amplitudeSetUserIdMock} = setUp();

    setUserIdUtils.setUserId(userId)

    expect(consoleWarnSpy).toBeCalledTimes(0);
    expect(getInstanceSpy).toBeCalledTimes(1);
    expect(getInstanceSpy).toHaveBeenCalledWith();
    expect(amplitudeSetUserIdMock).toHaveBeenCalledWith(userId);
  });
});
