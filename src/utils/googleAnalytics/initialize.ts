import {UnknownRecord} from '../../types/common';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const gtag = function (..._arg: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments); // gtag.js validates only arguments
};

/**
 * Initialize Google Analytics(GA4)
 * TODO: Support analytics.js(Universal analytics - Legacy version of GA4)
 */
export const initialize = (
  /** Tracking id (e.g. G-YNXXXXX) */
  trackingId: string,
  /** To set values that will be sent with every event for a web page */
  persistentValues?: UnknownRecord,
) => {
  const scriptId = 'ga-gtag';

  if (document.getElementById(scriptId)) return;

  const {head} = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', trackingId, persistentValues);
  console.info(`📊Initialized Google Analytics (${trackingId}).`);
};
