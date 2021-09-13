import {UnknownRecord} from '../types/common';

export interface Analytics {
  onPageView(params?: UnknownRecord): void;
  onEvent(name: string, params?: UnknownRecord): void;
  onClick(name: string, params?: UnknownRecord): void;
  onSet(...args: [string, UnknownRecord] | [UnknownRecord]): void;
  onSetUserId(userId: string | null): void;
  onSetUserProperty(params: UnknownRecord): void;
}
