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
 *
 * See more detail and example code on {@link https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions}
 *
 * @param exception_parameters
 */
export const exception = (exception_parameters?: ExceptionParameters) => {
  console.info(`⚠️GA: exception`, exception_parameters);
  gtag('event', 'exception', exception_parameters);
};
