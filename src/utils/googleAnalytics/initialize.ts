declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const gtag = function(..._: any) {
  window.dataLayer.push(arguments);
};

/**
 * Initialize google analytics
 */
export const initializeGA = (
  /** Tracking id (e.g. G-YNXXXXX) */
  trackingId: string,
  /** To set values that will be sent with every event for a web page */
  persistentValues: any = {}
) => {
  const scriptId = "ga-gtag";

  if (document.getElementById(scriptId)) return;

  const {head} = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  window.dataLayer = window.dataLayer || [];

  gtag("js", new Date());
  gtag("config", trackingId, persistentValues);
  console.info(`📊Initialized Google Analytics (${trackingId}).`);
};
