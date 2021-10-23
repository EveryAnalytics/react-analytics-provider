import {event} from './event';
import {exception} from './exception';
import {click} from './click';
import {initialize} from './initialize';
import {pageView} from './pageView';
import {set} from './set';
import {setUserProperty} from './setUserProperty';

export const googleAnalyticsHelper = {
  initialize,
  pageView,
  event,
  exception,
  click,
  set,
  setUserProperty,
};
