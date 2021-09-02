import amplitude, {AmplitudeClient, Config} from 'amplitude-js';

export const initialize = (
  apiKey: string,
  userId?: string,
  config?: Config,
  callback?: (client: AmplitudeClient) => void,
) => {
  // eslint-disable-next-line import/no-named-as-default-member
  amplitude.getInstance().init(apiKey, userId, config, callback);
};
