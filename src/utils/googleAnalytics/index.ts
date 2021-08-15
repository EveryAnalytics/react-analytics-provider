import {logEvent} from './event';
import {initializeGA} from './initialize';

export const googleAnalytics = {
  initialize: initializeGA,
  event: logEvent,
};
