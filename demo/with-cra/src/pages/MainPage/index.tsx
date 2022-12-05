import {AnalyticsPageView} from '@every-analytics/react-analytics-provider';
import {getQueryParams} from '../../utils/location';

const MainPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();

  // Todo: Remove the ProductNav after the main page is complete
  return (
    <AnalyticsPageView params={{referrer}}>
      <h2>Fruit Store</h2>
    </AnalyticsPageView>
  );
};

export default MainPage;
