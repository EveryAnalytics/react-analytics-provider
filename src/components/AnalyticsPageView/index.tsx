import React, {useEffect} from 'react';
import {UnknownRecord} from '../..';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';

export interface AnalyticsPageViewProps {
  children: React.ReactNode;
  params?: UnknownRecord;
}

export const AnalyticsPageView = ({children, params}: AnalyticsPageViewProps) => {
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.pageView(params);
  }, [analytics, params]);

  return <>{children}</>;
};
