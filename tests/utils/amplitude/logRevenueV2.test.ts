import amplitude from 'amplitude-js';

import {Revenue, logRevenueV2} from '../../../src/utils/amplitude/logRevenueV2';

describe('amplitudeHelper.logRevenueV2', () => {
  const setUp = () => {
    const revenue = new Revenue();

    const logRevenueV2Mock = jest.fn();

    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () =>
        ({
          logRevenueV2: logRevenueV2Mock,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );

    return {
      revenue,
      logRevenueV2Mock,
      getInstanceSpy,
    };
  };

  test('should call amplitude logRevenueV2 with proper param', () => {
    const {revenue, logRevenueV2Mock, getInstanceSpy} = setUp();

    logRevenueV2(revenue);

    expect(getInstanceSpy).toHaveBeenCalled();
    expect(logRevenueV2Mock).toHaveBeenCalledWith(revenue);
  });
});
