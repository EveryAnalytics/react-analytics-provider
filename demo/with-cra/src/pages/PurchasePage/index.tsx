import navigate from '../../router/navigate';
import products from '../../mocks/ecommerce/products.json';
import styled from '@emotion/styled';
import {useAnalyticsPageView} from '@every-analytics/react-analytics-provider';
import ProductCartItems from '../../components/ProductCartItems';
import ProductCartLayout from '../../components/ProductCartLayout';
import {useSearchParams, useNavigate} from 'react-router-dom';

const PurchasePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useAnalyticsPageView({referrer: searchParams.get('referrer') || ''});

  const onClick = () => {
    navigate('/purchase-complete'); // TODO 구매 완료페이지 개발
  };

  const tempProducts = products.slice(0, 3);

  return (
    <ProductCartLayout title="Purchase">
      <ProductCartItems items={tempProducts} useCheckbox={false} />
      <Button onClick={onClick}>Buy Now</Button>
    </ProductCartLayout>
  );
};

export default PurchasePage;

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
