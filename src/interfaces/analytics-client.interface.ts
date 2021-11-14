import {Pathname, UnknownRecord} from '../types/common';

export interface AnalyticsClient {
  init: () => void | Promise<void>;

  event: (name: string, data?: UnknownRecord, callback?: (...args: unknown[]) => void) => void;

  pageView?: (data: Pathname | UnknownRecord) => void;
  click?: (eventName: string, data?: UnknownRecord) => void;

  setUserId?: (id: string | number) => void;
  setUserProperties?: (data: UnknownRecord) => void;
}
