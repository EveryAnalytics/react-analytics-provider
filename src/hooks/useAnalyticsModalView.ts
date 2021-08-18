import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

export const useAnalyticsModalView = (name: string, params: Record<string, unknown>) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onModalView(name, params);
  }, [analytics, name, params]);
};
