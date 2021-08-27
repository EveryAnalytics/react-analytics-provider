import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

// TODO: modify params type
export const useAnalyticsImpression = (name: string, params: Record<string, unknown>) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onImpression(name, params);
  }, [analytics, name, params]);
};
