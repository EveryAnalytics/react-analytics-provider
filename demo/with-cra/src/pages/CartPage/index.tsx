import ProductCartItems from '../../components/ProductCartItems';
import ProductCartLayout from '../../components/ProductCartLayout';
import {getQueryParams} from '../../utils/location';
import products from '../../mocks/ecommerce/products.json';
import styled from '@emotion/styled';
import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';

const CartPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  return (
    <ProductCartLayout title="My cart list">
      <ProductCartItems items={products} />
    </ProductCartLayout>
  );
};

export default CartPage;
