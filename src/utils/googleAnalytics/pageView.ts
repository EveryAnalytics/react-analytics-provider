import {gtag} from './initialize';

export function pageView(trackingId: string, pathname: string) {
  console.info(`✅GA: pageView ${pathname}`);

  gtag('config', trackingId, {
    page_path: pathname,
  });
}
