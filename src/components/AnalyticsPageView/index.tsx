import React from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsPageViewProps {
  children: React.ReactNode;
  params: UnknownRecord;
}

export const AnalyticsPageView = ({children, params}: AnalyticsPageViewProps) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onPageView(params);
  }, [analytics, params]);

  return <>{children}</>;
};
