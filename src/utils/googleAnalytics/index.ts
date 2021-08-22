import {event} from './event';
import {click} from './click';
import {initialize} from './initialize';
import {set} from './set';
import {impression} from './impression';
import {product} from './product';
import {promotion} from './promotion';
import {action} from './action';

export const googleAnalytics = {
  initialize,
  event,
  click,
  set,
  impression,
  promotion,
  product,
  action,
};
