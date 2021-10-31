import React, {useCallback} from 'react';
import {useAnalyticsContext} from '../../contexts';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsClickProps {
  children: React.ReactNode;
  name: string;
  params?: UnknownRecord;
}

export const AnalyticsClick = ({children, name, params}: AnalyticsClickProps) => {
  const analytics = useAnalyticsContext();

  const child = React.Children.only(children) as React.ReactElement;

  const handleChildClick = useCallback(() => {
    analytics.click(name, {action_type: 'click', ...params});
  }, [name, params, analytics]);

  return React.cloneElement(child, {
    onClick: handleChildClick,
  });
};
