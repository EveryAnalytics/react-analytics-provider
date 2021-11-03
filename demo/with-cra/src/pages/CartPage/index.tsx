import ProductNav from '../../components/ProductNav';
import {getQueryParams} from '../../utils/location';
import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';

const CartPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  return (
    <ProductNav>
      <h1>Cart</h1>
    </ProductNav>
  );
};

export default CartPage;
