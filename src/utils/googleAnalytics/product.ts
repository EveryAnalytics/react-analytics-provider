import {gtag} from './initialize';

/**
 * {@link} https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-data
 */
export interface ProductParameters {
  /** The product ID or SKU (e.g. P67890). */
  id: string;
  /** The name of the product (e.g. Android T-Shirt). */
  name: string;
  /** The brand associated with the product (e.g. Google). */
  brand?: string;
  /** The category to which the product belongs (e.g. Apparel).
   *  Use / as a delimiter to specify up to 5-levels of hierarchy (e.g. Apparel/Men/T-Shirts). */
  category?: string;
  /** The variant of the product (e.g. Black). */
  variant?: string;
  /** The product's position in a list or collection (e.g. 2). */
  position?: number;
  /** The price of a product (e.g. 29.20).  */
  price?: number;
  /** The quantity of a product (e.g. 2). */
  quantity?: number;
  /** The coupon code associated with a product (e.g. SUMMER_SALE13). */
  coupon?: string;
}

/**
 * @description send product data to GA
 */
export function product(eventName: string, productParams: ProductParameters) {
  console.info(`✅GA: send product data => ${eventName}, productParams: ${productParams}`);
  gtag('event', eventName, productParams);
}
