import {UnknownRecord} from '../types/common';

export interface IAnalyticsClient {
  init: () => void | Promise<void>;

  event: (name: string, data?: UnknownRecord, callback?: (...args: unknown[]) => void) => void;

  pageView?: (pathname: string) => void;
  click?: (eventName: string, data?: UnknownRecord) => void;

  setUserId?: (id: string | number) => void;
  setUserProperties?: (data: UnknownRecord) => void;
}
