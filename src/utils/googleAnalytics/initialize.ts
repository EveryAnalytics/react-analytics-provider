declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

<<<<<<< HEAD
export const gtag = function(..._: any) {
=======
export const gtag = function () {
>>>>>>> b5f1030bf167d6e0e10c185fbc61bf5800e59213
  window.dataLayer.push(arguments);
};

/**
 * Initialize google analytics
 */
<<<<<<< HEAD
export const initializeGA = (
  /** Tracking id (e.g. G-YNXXXXX) */
  trackingId: string,
  /** To set values that will be sent with every event for a web page */
  persistentValues: any = {}
) => {
  const scriptId = "ga-gtag";
=======
export const initializeGA = (trackingId: string, additionalConfigInfo: any = {}) => {
  console.info(`✅GA(${trackingId})가 초기화 되었습니다.`);

  const scriptId = 'ga-gtag';
>>>>>>> b5f1030bf167d6e0e10c185fbc61bf5800e59213

  if (document.getElementById(scriptId)) return;

  const {head} = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  window.dataLayer = window.dataLayer || [];

<<<<<<< HEAD
  gtag("js", new Date());
  gtag("config", trackingId, persistentValues);
  console.info(`📊Initialized Google Analytics (${trackingId}).`);
=======
  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', trackingId, additionalConfigInfo);
>>>>>>> b5f1030bf167d6e0e10c185fbc61bf5800e59213
};
