import {UnknownRecord} from '../types/common';

export interface Analytics {
  trackPageView(params?: UnknownRecord): void;
  trackEvent(name: string, params?: UnknownRecord): void;
  trackClick(name: string, params?: UnknownRecord): void;
  set(...args: [string, UnknownRecord] | [UnknownRecord]): void;
  setUserId(userId: string | null): void;
  setUserProperty(params: UnknownRecord): void;
}
