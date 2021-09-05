import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';
import {UnknownRecord} from '../types/common';

export function useAnalyticsPageView(params: UnknownRecord): void;
export function useAnalyticsPageView(callback: () => UnknownRecord): void;
export function useAnalyticsPageView(callback: () => Promise<UnknownRecord>): void;
export function useAnalyticsPageView(paramsOrCallback: UnknownRecord | (() => Promise<UnknownRecord> | UnknownRecord)) {
  const analytics = useAnalyticsContext();

  const pageView = async () => {
    const params = typeof paramsOrCallback === 'function' ? await paramsOrCallback() : paramsOrCallback;
    analytics.onPageView(params);
  };

  React.useEffect(() => {
    pageView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analytics]);
}
