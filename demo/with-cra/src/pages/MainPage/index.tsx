import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';
import ProductNav from '../../components/ProductNav';
import {getQueryParams} from '../../utils/location';

const MainPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  // Todo: Remove the ProductNav after the main page is complete
  return (
    <ProductNav>
      <h2>Fruit Store</h2>
    </ProductNav>
  );
};

export default MainPage;
