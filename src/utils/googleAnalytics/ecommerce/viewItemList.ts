import {Action} from '../../../types/ecommerce';
import {gtag} from '../initialize';

const VIEW_ITEM_LIST = 'view_item_list';

export function viewItemList(params: Action) {
  console.info(`✅GA: ecommerce view_item_list `, params);
  gtag('event', VIEW_ITEM_LIST, params);
}
