import React from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsModalViewProps {
  children: React.ReactNode;
  name: string;
  params: UnknownRecord;
}

export const AnalyticsModalView = ({children, name, params}: AnalyticsModalViewProps) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onModalView(name, params);
  }, [analytics, name, params]);

  return <>{children}</>;
};
