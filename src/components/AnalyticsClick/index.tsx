import React, {useCallback} from 'react';
import {useAnalytics} from '../../contexts';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsClickProps {
  children: React.ReactNode;
  name: string;
  params?: UnknownRecord;
}

export const AnalyticsClick = ({children, name, params}: AnalyticsClickProps) => {
  const {onClick} = useAnalytics();

  const child = React.Children.only(children) as React.ReactElement;

  const handleChildClick = useCallback(() => {
    onClick(name, {action_type: 'click', ...params});
  }, [name, params, onClick]);

  return React.cloneElement(child, {
    onClick: handleChildClick,
  });
};
