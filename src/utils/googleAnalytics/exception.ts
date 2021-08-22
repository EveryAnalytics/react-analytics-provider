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
 * See more details and examples code on {@link https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions}
 *
 * @param exceptionParameters
 */
export const exception = (exceptionParameters?: ExceptionParameters) => {
  console.info(`⚠️GA: exception`, exceptionParameters);
  gtag('event', 'exception', exceptionParameters);
};
