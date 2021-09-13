import React from 'react';
import {useAnalytics} from '../contexts/useAnalytics';
import {UnknownRecord} from '../types/common';

export function useAnalyticsPageView(params: UnknownRecord): void;
export function useAnalyticsPageView(callback: () => UnknownRecord): void;
export function useAnalyticsPageView(callback: () => Promise<UnknownRecord>): void;
export function useAnalyticsPageView(paramsOrCallback: UnknownRecord | (() => Promise<UnknownRecord> | UnknownRecord)) {
  const analytics = useAnalytics();

  const pageView = async () => {
    const params = typeof paramsOrCallback === 'function' ? await paramsOrCallback() : paramsOrCallback;
    analytics.trackPageView(params);
  };

  React.useEffect(() => {
    pageView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analytics]);
}
