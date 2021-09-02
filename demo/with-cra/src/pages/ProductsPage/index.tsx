import {useEffect} from 'react';
import {getQueryParams} from 'utils/location';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

const ProductsPage = () => {
  const {color} = getQueryParams<{color: string}>();
  const products = getProductsByColor(color);
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return (
    <>
      <h1>{color} fruits</h1>
      <ul>
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </>
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
