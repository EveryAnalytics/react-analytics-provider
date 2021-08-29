import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

export const useAnalyticsVirtualPageView = (name: string, params: Record<string, unknown>) => {
  const analytics = useAnalyticsContext();
  const path = window.location.pathname + window.location.search;
  const virtualPagePath = path === '/' ? `${path}${name}` : `${path}/${name}`;

  React.useEffect(() => {
    analytics.onVirtualPageView(virtualPagePath, params);
  }, [analytics, virtualPagePath, params]);
};
