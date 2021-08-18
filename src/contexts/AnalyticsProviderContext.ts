import {createContext} from 'react';
import {UnknownRecord} from '../types/common';

export interface AnalyticsProviderContext {
  onModalView(name: string, params?: UnknownRecord): void;
  onPageView(params?: UnknownRecord): void;
  onEvent(name: string, params?: UnknownRecord): void;
  onClick(name: string, params?: UnknownRecord): void;
}

export const initialState: AnalyticsProviderContext = {
  onModalView: () => null,
  onPageView: () => null,
  onEvent: () => null,
  onClick: () => null,
};

const AnalyticsProviderContext = createContext<AnalyticsProviderContext>(initialState);

export default AnalyticsProviderContext;
