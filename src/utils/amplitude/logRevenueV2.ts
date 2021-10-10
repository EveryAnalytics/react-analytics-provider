import {Revenue} from 'amplitude-js';
import {getInstanceSafely} from './getInstanceSafely';

export const logRevenueV2 = async (revenue: Revenue) => {
  const instance = await getInstanceSafely();
  return instance.logRevenueV2(revenue);
};
