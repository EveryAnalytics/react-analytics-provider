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

/**
 * {@link} https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#promotion-data
 */
export interface PromotionParamters {
  /** The promotion ID (e.g. PROMO_1234). */
  id: string;
  /** The name of the promotion (e.g. Summer Sale). */
  name: string;
  /** The creative associated with the promotion (e.g. summer_banner2). */
  creative?: string;
  /** The position of the creative (e.g. banner_slot_1). */
  position?: string;
}

/**
 * @description send promotion data to GA
 */
export function promotion(eventName: string, promotionParams: PromotionParamters) {
  console.info(`✅GA: send promotion data => ${eventName}, promotionParams: ${promotionParams}`);
  gtag('event', eventName, promotionParams);
}

/**
 * {@link} https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#action-data
 */
export interface ActionParameters {
  /** The transaction ID (e.g. T1234). */
  id: string;
  /** The store or affiliation from which this transaction occurred (e.g. Google Store). */
  affiliation?: string;
  /** Specifies the total revenue or grand total associated with the transaction (e.g. 11.99).
   *  This value may include shipping, tax costs, or other adjustments to total revenue that you want to include as part of your revenue calculations.
   * */
  revenue?: number;
  /** The total tax associated with the transaction. */
  tax?: number;
  /** The shipping cost associated with the transaction. */
  shipping?: number;
  /** The transaction coupon redeemed with the transaction. */
  coupon?: string;
  /** The list that the associated products belong to. Optional. */
  list?: string;
  /** A number representing a step in the checkout process. Optional on `checkout` actions. */
  step?: number;
  /** Additional field for checkout and checkout_option actions that can describe option information on the checkout page, like selected payment method. */
  option?: string;
}

/**
 * @description send action data to GA
 */
export function action(eventName: string, actionParams: ActionParameters) {
  console.info(`✅GA: send action data => ${eventName}, actionParams: ${actionParams}`);
  gtag('event', eventName, actionParams);
}
