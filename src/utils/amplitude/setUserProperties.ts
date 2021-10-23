import {UnknownRecord} from '../../types/common';
import {getInstanceSafely} from './getInstanceSafely';

export const setUserProperties = async (userProperties: UnknownRecord) => {
  // eslint-disable-next-line import/no-named-as-default-member
  const isEmptyUserProperties = Object.entries(userProperties).length == 0;
  if (isEmptyUserProperties) {
    console.warn(
      '[Warning] Amplitude setUserProperties: userProperties is empty Object. Please fill in the user information.',
    );
    return;
  }
  const instance = await getInstanceSafely();
  instance.setUserProperties(userProperties);
};
