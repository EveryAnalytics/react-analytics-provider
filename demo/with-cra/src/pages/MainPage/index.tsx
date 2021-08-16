import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';
import {getQueryParams} from '../../utils/location';

const MainPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer})

  return (
    <>
      <h1>Fruit Store</h1>
    </>
  );
};

export default MainPage;
