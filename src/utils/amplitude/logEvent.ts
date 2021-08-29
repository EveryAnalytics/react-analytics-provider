import amplitude, {Callback} from 'amplitude-js';
import {UnknownRecord} from '../../types/common';

export const logEvent = (event: string, data?: UnknownRecord, callback?: Callback) => {
  // eslint-disable-next-line import/no-named-as-default-member
  return amplitude.getInstance().logEvent(event, data, callback);
};
