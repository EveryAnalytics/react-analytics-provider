import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

export const useAnalyticsPageView = (params: Record<string, unknown>) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onPageView(params);
  }, [analytics, params]);
};
