import {AmplitudeClient, Config} from 'amplitude-js';
import {getInstanceSafely} from './getInstanceSafely';

export const initialize = async (
  apiKey: string,
  userId?: string,
  config?: Config,
  callback?: (client: AmplitudeClient) => void,
) => {
  const instance = await getInstanceSafely();
  instance.init(apiKey, userId, config, callback);
  console.info(`📊Initialized Amplitude (${apiKey}).`);
};
