import amplitude, {Revenue} from 'amplitude-js';

export {Revenue} from 'amplitude-js';

export const logRevenueV2 = (revenue: Revenue) => {
  // eslint-disable-next-line import/no-named-as-default-member
  return amplitude.getInstance().logRevenueV2(revenue);
};
