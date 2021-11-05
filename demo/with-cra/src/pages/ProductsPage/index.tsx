import {useEffect} from 'react';
import {getQueryParams} from '../../utils/location';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import ProductNav from '../../components/ProductNav';

const ProductsPage = () => {
  const {color} = getQueryParams<{color: string}>();
  const products = getProductsByColor(color);
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return (
    <ProductNav>
      <h2>{color} fruits</h2>
      <ul>
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </ProductNav>
  );
};

export default ProductsPage;

function getProductsByColor(color: string) {
  switch (color) {
    case 'red':
      return ['Strawberry', 'Tomato'];
    case 'yellow':
      return ['Banana', 'Lemon'];
    default:
      return [];
  }
}
