declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const gtag = function () {
  window.dataLayer.push(arguments);
};

/**
 * Google Analytics를 초기화 합니다.
 */
export const initializeGA = (trackingId: string, additionalConfigInfo: any = {}) => {
  console.info(`✅GA(${trackingId})가 초기화 되었습니다.`);

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

  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', trackingId, additionalConfigInfo);
};
