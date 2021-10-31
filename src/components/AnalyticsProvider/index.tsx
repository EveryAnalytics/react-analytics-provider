import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics} from '../../mixin/analytics';
import {IAnalyticsClient} from '../../interfaces';
import {SetUpParams} from '../../types';

export function AnalyticsProvider({
  initialAnalyticsProps,
  children,
}: {
  initialAnalyticsProps: IAnalyticsClient | SetUpParams;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    if ('init' in initialAnalyticsProps) {
      Analytics.preset(initialAnalyticsProps);
    } else {
      Analytics.setup(initialAnalyticsProps);
    }
  }, [initialAnalyticsProps]);

  return React.useMemo(
    () => <AnalyticsProviderContext.Provider value={Analytics}>{children}</AnalyticsProviderContext.Provider>,
    [children],
  );
}
