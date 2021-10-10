import * as faker from 'faker';
import amplitude from 'amplitude-js';
import {amplitudeHelper} from '../../../src/utils';

describe('amplitudeHelper.logEvent', () => {
  const setUp = () => {
    const amplitudeLogEventMock = jest.fn();

    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () =>
        ({
          logEvent: amplitudeLogEventMock,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );
    return {
      amplitudeLogEventMock,
      getInstanceSpy,
    };
  };
  test('should call amplitude logEvent with proper param', async () => {
    const {amplitudeLogEventMock, getInstanceSpy} = setUp();
    const MOCK_TEST_ID = faker.lorem.word();
    const MOCK_EVENT_PROPERTY = {
      [faker.lorem.word()]: faker.datatype.boolean(),
      [faker.lorem.word()]: faker.datatype.boolean(),
    };
    const mockCallback = jest.fn();

    await amplitudeHelper.logEvent(MOCK_TEST_ID, MOCK_EVENT_PROPERTY, mockCallback);

    expect(getInstanceSpy).toHaveBeenCalled();
    expect(amplitudeLogEventMock).toHaveBeenCalledWith(MOCK_TEST_ID, MOCK_EVENT_PROPERTY, mockCallback);
  });
});
