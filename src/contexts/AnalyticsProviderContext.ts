import {createContext} from 'react';
import {UnknownRecord} from '../types/common';

export interface AnalyticsProviderContext {
  onPageView(params?: UnknownRecord): void;
  onEvent(name: string, params?: UnknownRecord): void;
  onClick(name: string, params?: UnknownRecord): void;
  onSet(...args: [string, UnknownRecord] | [UnknownRecord]): void;
  onSetUserId(userId: string | null): void;
  onSetUserProperty(params: UnknownRecord): void;
  onException(params?: UnknownRecord): void;
}

export const initialState: AnalyticsProviderContext = {
  onPageView: () => null,
  onEvent: () => null,
  onClick: () => null,
  onSet: () => null,
  onSetUserId: () => null,
  onSetUserProperty: () => null,
  onException: () => null,
};

const AnalyticsProviderContext = createContext<AnalyticsProviderContext>(initialState);

export default AnalyticsProviderContext;
