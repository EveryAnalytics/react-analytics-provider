import {useEffect} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

const MainPage = () => {
  const analytics = useAnalyticsContext();
  useEffect(() => {
    analytics.onPageView('');
    // analytics.onPageView('', {referrer: 'facebook'});
  }, [analytics]);

  return (
    <>
      <h1>Fruit Store</h1>
    </>
  );
};

export default MainPage;
