import {useEffect} from 'react';
import {UnknownRecord} from '..';
import {useAnalyticsContext} from '../contexts/useAnalyticsContext';

export function useAnalyticsPageView(paramsOrCallback: UnknownRecord | (() => Promise<UnknownRecord>)) {
  const analytics = useAnalyticsContext();

  useEffect(() => {
    async function pageView() {
      const params = typeof paramsOrCallback === 'function' ? await paramsOrCallback() : paramsOrCallback;
      analytics.pageView(params);
    }
    pageView();
  }, [analytics, paramsOrCallback]);
}
