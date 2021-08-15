import {createContext} from 'react';

export interface AnalyticsProviderContext {
  onPageView(params?: {[key: string]: any}): void;
  onEvent(name: string, params?: {[key: string]: any}): void;
  onClick(name: string, params?: {[key: string]: any}): void;
}

export const initialState: AnalyticsProviderContext = {
  onPageView: () => null,
  onEvent: () => null,
  onClick: () => null,
};

const AnalyticsProviderContext = createContext<AnalyticsProviderContext>(initialState);

export default AnalyticsProviderContext;
