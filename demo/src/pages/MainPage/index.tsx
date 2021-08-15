import {useEffect} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import {getQueryParams} from '../../utils/location';

const MainPage = () => {
  const analytics = useAnalyticsContext();
  const {referrer} = getQueryParams<{referrer: string}>();

  useEffect(() => {
    analytics.onPageView({referrer});
  }, [analytics, referrer]);

  return (
    <>
      <h1>Fruit Store</h1>
    </>
  );
};

export default MainPage;
