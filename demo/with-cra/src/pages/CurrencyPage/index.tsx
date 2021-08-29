import {useEffect} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

const CurrencyPage = () => {
  const analytics = useAnalyticsContext();
  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return <h1>Set Currency KRW</h1>;
};

export default CurrencyPage;
