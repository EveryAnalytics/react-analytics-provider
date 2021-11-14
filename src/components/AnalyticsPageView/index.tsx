import React, {useEffect} from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';
import {Pathname, UnknownRecord} from '../../types';

export interface AnalyticsPageViewProps {
  children: React.ReactNode;
  params: Pathname | UnknownRecord;
}

export const AnalyticsPageView = ({children, params}: AnalyticsPageViewProps) => {
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.pageView(params);
  }, [analytics, params]);

  return <>{children}</>;
};
