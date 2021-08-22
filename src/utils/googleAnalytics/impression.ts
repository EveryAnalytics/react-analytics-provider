import {gtag} from './initialize';

/**
 * tracking product impression for enhancing ecommerce data
 * {@link} https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-ecommerce
 * {@link} basic reference for tracking impression data: https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#impression-data
 */

export interface ImpressionParameters {
  /** The product ID or SKU (e.g. P67890).  */
  id: string;
  /** The name of the product (e.g. Android T-Shirt).  */
  name: string;
  /** The list or collection to which the product belongs (e.g. Search Results) */
  list?: string;
  /** The brand associated with the product (e.g. Google). */
  brand?: string;
  /** The category to which the product belongs (e.g. Apparel). Use / as a delimiter to specify up to 5-levels of hierarchy (e.g. Apparel/Men/T-Shirts). */
  category?: string;
  /** The variant of the product (e.g. Black).  */
  variant?: string;
  /** The product's position in a list or collection (e.g. 2). */
  position?: number;
  /** The price of a product (e.g. 29.20). */
  price?: number;
}

/**
 * @description send impressiong data to GA
 */
export function impression(eventName: string, impressionParams: ImpressionParameters) {
  console.info(`✅GA: send impression data => ${eventName}, impressionParams: ${impressionParams}`);
  gtag('event', eventName, impressionParams);
}
