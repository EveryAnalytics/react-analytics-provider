import {createContext} from 'react';

export interface AnalyticsProviderContext {
  onPageView(path: string): void;
}

export const initialState: AnalyticsProviderContext = {
  onPageView: () => null,
};

const AnalyticsProviderContext = createContext<AnalyticsProviderContext>(initialState);

export default AnalyticsProviderContext;
