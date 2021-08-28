import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';
import {UnknownRecord} from '../types/common';

export const useAnalyticsPageView = (params: UnknownRecord) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onPageView(params);
  }, [analytics, params]);
};
