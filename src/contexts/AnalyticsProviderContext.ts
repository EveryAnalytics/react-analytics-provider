import {createContext} from 'react';
import {Analytics} from '../core';

const initialState: Analytics = {
  onPageView: () => null,
  onEvent: () => null,
  onClick: () => null,
  onSet: () => null,
  onSetUserId: () => null,
  onSetUserProperty: () => null,
};

const AnalyticsProviderContext = createContext<Analytics>(initialState);

export default AnalyticsProviderContext;
