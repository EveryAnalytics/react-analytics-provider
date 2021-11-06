import type {AmplitudeClient, Config} from 'amplitude-js';

export type GoogleAnalyticsSetupParams = {
  trackingId: string;
  persistentValues?: Record<string, unknown>;
};

export type AmplitudeSetupParams = {
  apiKey: string;
  userId?: string;
  config?: Config;
  callback?: (client: AmplitudeClient) => void;
};

export type SetupParams = {
  googleAnalytics?: GoogleAnalyticsSetupParams;
  amplitude?: AmplitudeSetupParams;
};
