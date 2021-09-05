import * as faker from 'faker';
import amplitude from 'amplitude-js';
import * as setUserIdUtils from '../../../src/utils/amplitude/setUserId';

describe('amplitudeHelper.setUserId', () => {
  const setUp = () => {
    const userId = faker.lorem.word();
    const consoleWarnSpy = jest.spyOn(console, 'info');
    const amplitudeSetUserIdMock = jest.fn();
    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () =>
        ({
          setUserId: amplitudeSetUserIdMock,
        } as any),
    );

    return {
      userId,
      consoleWarnSpy,
      getInstanceSpy,
      amplitudeSetUserIdMock,
    };
  };

  test(`should call amplitude setUserId with null userId`, () => {
    const {consoleWarnSpy, getInstanceSpy, amplitudeSetUserIdMock} = setUp();
    const userId = null;

    setUserIdUtils.setUserId(userId);

    expect(consoleWarnSpy).toBeCalledTimes(0);
    expect(getInstanceSpy).toBeCalledTimes(1);
    expect(getInstanceSpy).toHaveBeenCalledWith();
    expect(amplitudeSetUserIdMock).toHaveBeenCalledWith(userId);
  });

  test(`should call amplitude setUserId with string userId`, () => {
    const {userId, consoleWarnSpy, getInstanceSpy, amplitudeSetUserIdMock} = setUp();

    setUserIdUtils.setUserId(userId);

    expect(consoleWarnSpy).toBeCalledTimes(0);
    expect(getInstanceSpy).toBeCalledTimes(1);
    expect(getInstanceSpy).toHaveBeenCalledWith();
    expect(amplitudeSetUserIdMock).toHaveBeenCalledWith(userId);
  });
});
