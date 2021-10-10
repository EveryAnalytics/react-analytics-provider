import {AmplitudeClient} from 'amplitude-js';

export const getInstanceSafely = async (): Promise<AmplitudeClient> => {
  // eslint-disable-next-line import/no-named-as-default-member
  // amplitude.getInstance().init(apiKey, userId, config, callback);
  return new Promise((resolve, reject) => {
    if (typeof window !== undefined) {
      import('amplitude-js')
        .then(ampPackage => {
          resolve(ampPackage.getInstance());
        })
        .catch(() => reject(null));
    }
  });
};
