import {Callback} from 'amplitude-js';
import {UnknownRecord} from '../../types/common';
import {getInstanceSafely} from './getInstanceSafely';

export const logEvent = async (event: string, data?: UnknownRecord, callback?: Callback) => {
  const instance = await getInstanceSafely();
  return instance.logEvent(event, data, callback);
};
