import {gtag} from './initialize';

export interface ExceptionParameters {
  /**
   * A description of the error.
   */
  description?: string;
  /**
   * true if the error was fatal.
   */
  fatal?: boolean;
}

/**
 * Send an exception event to Google Analytics.
 * {@link https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions API Reference}
 * @param params
 */
export const exception = (params?: ExceptionParameters) => {
  console.info(`⚠️GA: exception`, params);
  gtag('event', 'exception', params);
};
