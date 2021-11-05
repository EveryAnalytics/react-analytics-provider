import {UnknownRecord} from '../../types/common';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const gtag = function (..._arg: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments); // gtag.js validates only arguments
};

/**
 * Initialize Google Analytics(GA4)
 */
export const initialize = async (
  /** Tracking id (e.g. G-YNXXXXX) */
  trackingId: string,
  /** To set values that will be sent with every event for a web page */
  persistentValues?: UnknownRecord,
): Promise<boolean> => {
  const scriptId = 'ga-gtag';

  if (document.getElementById(scriptId)) {
    return true;
  }

  return new Promise((resolve, reject) => {
    const {head} = document;
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    head.insertBefore(script, head.firstChild);
    window.dataLayer = window.dataLayer ?? [];
    gtag('js', new Date());
    gtag('config', trackingId, persistentValues);

    script.addEventListener('load', function () {
      console.info(`📊Initialized Google Analytics (${trackingId}).`);
      resolve(true);
    });
    script.addEventListener('error', function () {
      console.warn(`⚠️Failed to initialize Google Analytics (${trackingId}).`);
      reject(false);
    });
  });
};
