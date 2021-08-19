import {UnknownRecord} from '../../types/common';
import {gtag} from './initialize';

/**
 * tracking product impression for enhancing ecommerce data
 * {@link} https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-ecommerce
 * {@link} basic reference for tracking impression data: https://developers.google.com/gtagjs/reference/event
 */
export function impression(eventName: string, productId: string, productName: string, extraParams?: UnknownRecord) {
  console.info(
    `✅GA: impression => ${eventName}, productId: ${productId}, productName: ${productName}, extraParams: ${extraParams}`,
  );
  gtag('event', eventName, {...extraParams, id: productId, name: productName});
}
