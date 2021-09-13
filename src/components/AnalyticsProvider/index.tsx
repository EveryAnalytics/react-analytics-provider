import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics} from '../../core';

interface Props {
  onInitialize(): void;
  analytics: Analytics;
  children: React.ReactNode;
}

export function AnalyticsProvider({
  onInitialize,
  analytics,
  children,
}: Props) {
  React.useEffect(() => {
    onInitialize();
  }, [onInitialize]);

  return React.useMemo(
    () => <AnalyticsProviderContext.Provider value={analytics}>{children}</AnalyticsProviderContext.Provider>,
    [children, analytics],
  );
}
