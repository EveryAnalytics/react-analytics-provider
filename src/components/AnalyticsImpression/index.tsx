import React from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';
import {UnknownRecord} from '../../types/common';
import {useOnScreen, useOnScreenProps} from '../../hooks';

export interface AnalyticsImpressionProps extends useOnScreenProps {
  children: React.ReactNode;
  name: string;
  // TODO: modify params type
  params: UnknownRecord;
}

export const AnalyticsImpression = ({
  children,
  name,
  params,
  rootMargin,
  threshold,
  triggerOnce,
  delay,
}: AnalyticsImpressionProps) => {
  const analytics = useAnalyticsContext();
  const [ref, isIntersecting] = useOnScreen<HTMLDivElement>({rootMargin, threshold, triggerOnce, delay});

  React.useEffect(() => {
    if (isIntersecting) analytics.onImpression(name, params);
  }, [analytics, name, params, isIntersecting]);

  return <div ref={ref}>{children}</div>;
};
