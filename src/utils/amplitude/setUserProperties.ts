import amplitude from 'amplitude-js';
import {UnknownRecord} from '../../types/common';

export const setUserProperties = (userProperties: UnknownRecord) => {
  // eslint-disable-next-line import/no-named-as-default-member
  if(Object.entries(userProperties).length == 0) {
      console.warn('[Warning] Amplitude setUserProperties: userProperties is empty Object. Please fill in the user information.')
      return;
  }
  return amplitude.getInstance().setUserProperties(userProperties);
};
