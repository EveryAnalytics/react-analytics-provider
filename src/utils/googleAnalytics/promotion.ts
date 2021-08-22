import {gtag} from './initialize';

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
