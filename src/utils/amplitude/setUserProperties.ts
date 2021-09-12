import amplitude from 'amplitude-js';
import {UnknownRecord} from '../../types/common';

export const setUserProperties = (userProperties: UnknownRecord) => {
  // eslint-disable-next-line import/no-named-as-default-member
  const isEmptyUserProperties = Object.entries(userProperties).length == 0;
  if (isEmptyUserProperties) {
    console.warn(
      '[Warning] Amplitude setUserProperties: userProperties is empty Object. Please fill in the user information.',
    );
    return;
  }
  amplitude.getInstance().setUserProperties(userProperties);
};
