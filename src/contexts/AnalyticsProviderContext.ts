import {createContext} from 'react';
import {UnknownRecord} from '../types/common';

export interface AnalyticsProviderContext {
  onPageView(params?: UnknownRecord): void;
  onEvent(name: string, params?: UnknownRecord): void;
  onClick(name: string, params?: UnknownRecord): void;
}

export const initialState: AnalyticsProviderContext = {
  onPageView: () => null,
  onEvent: () => null,
  onClick: () => null,
};

const AnalyticsProviderContext = createContext<AnalyticsProviderContext>(initialState);

export default AnalyticsProviderContext;
