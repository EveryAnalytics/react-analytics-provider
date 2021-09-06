import {createContext} from 'react';
import {UnknownRecord} from '../types/common';

export interface AnalyticsProviderContext {
  onPageView(params?: UnknownRecord): void;
  onEvent(name: string, params?: UnknownRecord): void;
  onClick(name: string, params?: UnknownRecord): void;
  onSet(...args: [string, UnknownRecord] | [UnknownRecord]): void;
  onSetUserId(userId: string | null): void;
  onSetUserProperty(params: UnknownRecord): void;
  // TODO: modify params type
  onImpression(name: string, params?: UnknownRecord): void;
}

export const initialState: AnalyticsProviderContext = {
  onPageView: () => null,
  onEvent: () => null,
  onClick: () => null,
  onSet: () => null,
  onSetUserId: () => null,
  onSetUserProperty: () => null,
  onImpression: () => null,
};

const AnalyticsProviderContext = createContext<AnalyticsProviderContext>(initialState);

export default AnalyticsProviderContext;
