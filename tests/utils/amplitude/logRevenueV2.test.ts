import amplitude from 'amplitude-js';
import * as faker from 'faker';

import {logRevenueV2} from '../../../src/utils/amplitude/logRevenueV2';

describe('amplitudeHelper.logRevenueV2', () => {
  const setUp = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    const mockRevenue = new amplitude.Revenue()
      .setPrice(faker.datatype.number())
      .setProductId(faker.datatype.uuid())
      .setQuantity(faker.datatype.number())
      .setRevenueType(faker.lorem.word());

    const mockLogRevenueV2 = jest.fn();

    const getInstanceSpy = jest.spyOn(amplitude, 'getInstance').mockImplementation(
      () =>
        ({
          logRevenueV2: mockLogRevenueV2,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );

    return {
      mockRevenue,
      mockLogRevenueV2,
      getInstanceSpy,
    };
  };

  test('should call amplitude logRevenueV2 with proper param', async () => {
    const {mockRevenue, getInstanceSpy, mockLogRevenueV2} = setUp();

    await logRevenueV2(mockRevenue);

    expect(getInstanceSpy).toHaveBeenCalled();
    expect(mockLogRevenueV2).toHaveBeenCalledWith(mockRevenue);
  });
});
