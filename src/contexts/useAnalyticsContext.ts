import * as React from 'react';
import AnalyticsProviderContext from './AnalyticsProviderContext';

export function useAnalyticsContext() {
  return React.useContext(AnalyticsProviderContext);
}
