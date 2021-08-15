import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {initializeGA} from '../../utils/googleAnalytics/initialize';

interface Props {
  gaTrackingId: string;
  googleAnalytics?: {
    trackingId: string;
    persistentValues?: {};
  };
  children: React.ReactNode;
}

export function AnalyticsProvider({googleAnalytics, children}: Props) {
  React.useEffect(() => {
    // NOTE: 추후에는 본인이 원하는 Analytis tools 선택해서 자유롭게 넣을 수 있도록 유연하게 변경
    if (googleAnalytics !== undefined) {
      initializeGA(googleAnalytics.trackingId, googleAnalytics.persistentValues);
    }
  }, []);

  return React.useMemo(
    () => <AnalyticsProviderContext.Provider value={{}}>{children}</AnalyticsProviderContext.Provider>,
    [children],
  );
}
