import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics} from '../../core';

interface Props {
  analytics: Analytics;
  children: React.ReactNode;
}

export function AnalyticsProvider({analytics, children}: Props) {
  React.useEffect(() => {
    analytics.initialize();
  }, [analytics]);

  return React.useMemo(
    () => <AnalyticsProviderContext.Provider value={analytics}>{children}</AnalyticsProviderContext.Provider>,
    [children, analytics],
  );
}
