import React from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';

export interface AnalyticsPageViewProps {
  children: React.ReactNode;
  params: string;
}

export const AnalyticsPageView = ({children, params}: AnalyticsPageViewProps) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.pageView(params);
  }, [analytics, params]);

  return <>{children}</>;
};
