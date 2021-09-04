import * as faker from 'faker';
import amplitude from 'amplitude-js';
import {amplitudeHelper} from '../../../../src/utils';

describe('amplitudeHelper.initialize', () => {
  const setUp = () => {
    const amplitudeInitializeMock = jest.fn();

    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () =>
        ({
          init: amplitudeInitializeMock,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );
    return {
      amplitudeInitializeMock,
      getInstanceSpy,
    };
  };
  test('should call amplitude initialize with proper param', () => {
    const {amplitudeInitializeMock, getInstanceSpy} = setUp();
    const MOCK_TEST_ID = faker.lorem.word();
    const MOCK_USER_ID = faker.lorem.word();
    const MOCK_OPTION = {
      saveEvents: faker.datatype.boolean(),
      includeUtm: faker.datatype.boolean(),
      includeReferrer: faker.datatype.boolean(),
    };
    const mockCallback = jest.fn();

    amplitudeHelper.initialize(MOCK_TEST_ID, MOCK_USER_ID, MOCK_OPTION, mockCallback);

    expect(getInstanceSpy).toHaveBeenCalled();
    expect(amplitudeInitializeMock).toHaveBeenCalledWith(MOCK_TEST_ID, MOCK_USER_ID, MOCK_OPTION, mockCallback);
  });
});
