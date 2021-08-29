import React from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsVirtualPageViewProps {
  children: React.ReactNode;
  name: string;
  params: UnknownRecord;
}

export const AnalyticsVirtualPageView = ({children, name, params}: AnalyticsVirtualPageViewProps) => {
  const analytics = useAnalyticsContext();
  const path = window.location.pathname + window.location.search;
  const virtualPagePath = path === '/' ? `${path}${name}` : `${path}/${name}`;

  React.useEffect(() => {
    analytics.onVirtualPageView(virtualPagePath, params);
  }, [analytics, virtualPagePath, params]);

  return <>{children}</>;
};
