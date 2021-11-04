import ProductCartItems from '../../components/ProductCartItems';
import ProductCartLayout from '../../components/ProductCartLayout';
import {getQueryParams} from '../../utils/location';
import navigate from '../../router/navigate';
import products from '../../mocks/ecommerce/products.json';
import styled from '@emotion/styled';
import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';

const CartPage = () => {
  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  const onClick = () => {
    navigate.push('/purchase'); //TODO: 구매페이지 router 이름에 맞게 수정하기
  };

  return (
    <ProductCartLayout title="My cart list" buttonContent="Buy Now">
      <ProductCartItems items={products} />
      <Button onClick={onClick}>Buy Now</Button>
    </ProductCartLayout>
  );
};

export default CartPage;

const Button = styled.button`
  margin: auto;
  text-align: center;
  width: 300px;
  height: 50px;
  margin-top: 50px;
  background-color: #293ad2;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
`;
