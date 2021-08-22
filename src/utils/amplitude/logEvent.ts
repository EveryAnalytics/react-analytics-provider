import amplitude, {Callback} from 'amplitude-js';
import {UnknownRecord} from '../../types/common';

export const logEvent = (event: string, data?: UnknownRecord, callback?: Callback) => {
  return amplitude.getInstance().logEvent(event, data, callback);
};
