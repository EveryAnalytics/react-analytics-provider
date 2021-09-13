import React, {useCallback} from 'react';
import {useAnalytics} from '../../contexts';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsClickProps {
  children: React.ReactNode;
  name: string;
  params?: UnknownRecord;
}

export const AnalyticsClick = ({children, name, params}: AnalyticsClickProps) => {
  const {trackClick} = useAnalytics();

  const child = React.Children.only(children) as React.ReactElement;

  const handleChildClick = useCallback(() => {
    trackClick(name, {action_type: 'click', ...params});
  }, [name, params, trackClick]);

  return React.cloneElement(child, {
    onClick: handleChildClick,
  });
};
