import React from 'react';
import {useAnalytics} from '../../contexts/useAnalytics';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsPageViewProps {
  children: React.ReactNode;
  params: UnknownRecord;
}

export const AnalyticsPageView = ({children, params}: AnalyticsPageViewProps) => {
  const analytics = useAnalytics();

  React.useEffect(() => {
    analytics.trackPageView(params);
  }, [analytics, params]);

  return <>{children}</>;
};
