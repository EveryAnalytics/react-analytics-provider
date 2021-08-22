import {gtag} from './initialize';

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
