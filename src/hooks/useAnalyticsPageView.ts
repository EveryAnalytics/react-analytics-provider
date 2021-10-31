import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

export function useAnalyticsPageView(params: string): void;
export function useAnalyticsPageView(callback: () => string): void;
export function useAnalyticsPageView(callback: () => Promise<string>): void;
export function useAnalyticsPageView(paramsOrCallback: string | (() => Promise<string> | string)) {
  const analytics = useAnalyticsContext();

  const pageView = async () => {
    const params = typeof paramsOrCallback === 'function' ? await paramsOrCallback() : paramsOrCallback;
    analytics.pageView(params);
  };

  React.useEffect(() => {
    pageView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analytics]);
}
