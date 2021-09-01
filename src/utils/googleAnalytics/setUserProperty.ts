import {UnknownRecord} from '../../types/common';
import {set} from './set';

export function setUserProperty(params: UnknownRecord) {
  return set('user_properties', params);
}
