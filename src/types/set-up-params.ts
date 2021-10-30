import type {AmplitudeClient, Config} from 'amplitude-js';

export type GoogleAnalyticsSetUpParams = {
  trakingId: string;
  persistentValues?: Record<string, unknown>;
};

export type AmplitudeSetUpParams = {
  apiKey: string;
  userId?: string;
  config?: Config;
  callback?: (client: AmplitudeClient) => void;
};

export type SetUpParams = {
  googleAnalytics?: GoogleAnalyticsSetUpParams;
  amplitude?: AmplitudeSetUpParams;
};
