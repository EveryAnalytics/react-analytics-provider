import amplitude, {AmplitudeClient, Config} from 'amplitude-js';

export const initialize = (
  apiKey: string,
  userId?: string,
  config?: Config,
  callback?: (client: AmplitudeClient) => void,
) => {
  amplitude.getInstance().init(apiKey, userId, config, callback);
};
