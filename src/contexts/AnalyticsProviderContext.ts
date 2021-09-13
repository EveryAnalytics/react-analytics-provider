import {createContext} from 'react';
import {Analytics} from '../core';

const initialState: Analytics = {
  initialize: () => null,
  trackPageView: () => null,
  trackEvent: () => null,
  trackClick: () => null,
  set: () => null,
  setUserId: () => null,
  setUserProperty: () => null,
};

const AnalyticsProviderContext = createContext<Analytics>(initialState);

export default AnalyticsProviderContext;
