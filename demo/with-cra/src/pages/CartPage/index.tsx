import ProductCartItem from '../../components/ProductCartItem';
import ProductCartLayout from '../../components/ProductCartLayout';
import {getQueryParams} from '../../utils/location';
import styled from '@emotion/styled';
import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';

const CartPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  return (
    <ProductCartLayout>
      <h1>Cart</h1>
      <ProductCartItems>
        <ProductCartItem />
      </ProductCartItems>
    </ProductCartLayout>
  );
};

export default CartPage;

const ProductCartItems = styled.div``;
