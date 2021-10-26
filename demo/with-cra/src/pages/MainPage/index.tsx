import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';
import LayoutWithNav from '../../components/LayoutWithNav';
import {getQueryParams} from '../../utils/location';

const MainPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  // Todo: Remove the LayoutWithNav after the main page is complete
  return (
    <LayoutWithNav>
      <h2>Fruit Store</h2>
    </LayoutWithNav>
  );
};

export default MainPage;
