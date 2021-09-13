import * as React from 'react';
import AnalyticsProviderContext from './AnalyticsProviderContext';

export function useAnalytics() {
  return React.useContext(AnalyticsProviderContext);
}
