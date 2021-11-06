import React, {useEffect} from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';

export interface AnalyticsPageViewProps {
  children: React.ReactNode;
  pathname: string;
}

export const AnalyticsPageView = ({children, pathname}: AnalyticsPageViewProps) => {
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.pageView(pathname);
  }, [analytics, pathname]);

  return <>{children}</>;
};
