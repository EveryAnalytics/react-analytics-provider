import * as faker from 'faker';
import amplitude from 'amplitude-js';
import {amplitudeHelper} from '../../../src/utils';

describe('amplitudeHelper.setUserProperties', () => {
  const setUp = () => {
    const amplitudeSetUserPropertiesMock = jest.fn();
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => null);

    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () =>
        ({
          setUserProperties: amplitudeSetUserPropertiesMock,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );

    return {
      amplitudeSetUserPropertiesMock,
      getInstanceSpy,
      consoleWarnMock,
    };
  };

  test('should call amplitude setUserProperties with proper userProperties', () => {
    const {amplitudeSetUserPropertiesMock, getInstanceSpy} = setUp();

    const MOCK_USER_PROPERTY = {
      name: faker.name.lastName(),
      city: faker.address.city(),
      company: faker.company.companyName(),
      [faker.lorem.word()]: faker.datatype.boolean(),
    };

    amplitudeHelper.setUserProperties(MOCK_USER_PROPERTY);

    expect(getInstanceSpy).toHaveBeenCalled();
    expect(amplitudeSetUserPropertiesMock).toHaveBeenCalledWith(MOCK_USER_PROPERTY);
  });

  test('should call amplitude setUserProperties with empty userProperties', () => {
    const {consoleWarnMock} = setUp();

    amplitudeHelper.setUserProperties({});

    expect(consoleWarnMock).toHaveBeenCalled();
  });
});
