import React, {FC, useCallback} from 'react';
import {useAnalyticsContext} from '../../contexts';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsClickProps {
  children: React.ReactNode;
  name: string;
  params?: UnknownRecord;
}

export const AnalyticsClick: FC = (props: AnalyticsClickProps) => {
  const {onClick} = useAnalyticsContext();
  const {children, name, params} = props;

  const child = React.Children.only(children) as React.ReactElement;

  const handleChildClick = useCallback(() => {
    onClick(name, {action_type: 'click', ...params});
  }, [name, params, onClick]);

  return React.cloneElement(child, {
    onClick: handleChildClick,
  });
};
