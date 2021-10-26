import {useEffect} from 'react';
import {getQueryParams} from '../../utils/location';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import LayoutWithNav from '../../components/LayoutWithNav';

const ProductsPage = () => {
  const {color} = getQueryParams<{color: string}>();
  const products = getProductsByColor(color);
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return (
    <LayoutWithNav>
      <h2>{color} fruits</h2>
      <ul>
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </LayoutWithNav>
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
