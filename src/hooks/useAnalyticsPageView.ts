import React from 'react';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

export function useAnalyticsPageView(pathname: string): void;
export function useAnalyticsPageView(callback: () => string): void;
export function useAnalyticsPageView(callback: () => Promise<string>): void;
export function useAnalyticsPageView(pathnameOrCallback: string | (() => Promise<string> | string)) {
  const analytics = useAnalyticsContext();

  const pageView = async () => {
    const pathname = typeof pathnameOrCallback === 'function' ? await pathnameOrCallback() : pathnameOrCallback;
    analytics.pageView(pathname);
  };

  React.useEffect(() => {
    pageView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analytics]);
}
