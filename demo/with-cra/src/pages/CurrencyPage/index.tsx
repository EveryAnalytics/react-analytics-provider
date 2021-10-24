import {useEffect} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

const CurrencyPage = () => {
  const analytics = useAnalyticsContext();
  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return <h2>Set Currency KRW</h2>;
};

export default CurrencyPage;
