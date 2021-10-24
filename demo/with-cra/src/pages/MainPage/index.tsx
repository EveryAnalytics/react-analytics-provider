import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';
import {getQueryParams} from '../../utils/location';

const MainPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  return (
    <>
      <h2>Fruit Store</h2>
    </>
  );
};

export default MainPage;
