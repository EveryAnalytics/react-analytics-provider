import {useEffect} from 'react';
import {useAnalytics} from '@every-analytics/react-analytics-provider';

const CurrencyPage = () => {
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return <h1>Set Currency KRW</h1>;
};

export default CurrencyPage;
