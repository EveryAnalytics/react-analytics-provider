import {useEffect} from 'react';
import {getQueryParams} from '../../utils/location';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

import navigate from '../../router/navigate';
import Products from '../../mocks/ecommerce/products.json';
import {ProductType} from '../../types/Product';

import ProductNav from '../../components/ProductNav';
import Cards from '../../components/Cards';
import Card from '../../components/Card';

const ProductsPage = () => {
  const {color} = getQueryParams<{color: string}>();
  const products: ProductType[] = getProductsByColor(color);
  const analytics = useAnalyticsContext();

  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  const getProductDetailUrl = (product: ProductType): string => {
    return `/product?color=${color}&product=${product.name.en}`;
  };

  return (
    <ProductNav>
      <h2>{color} fruits</h2>
      <Cards>
        {products.map((product: ProductType) => (
          <Card
            title={product.name.en}
            onClick={() => {
              navigate.push(getProductDetailUrl(product));
            }}
          />
        ))}
      </Cards>
    </ProductNav>
  );
};

export default ProductsPage;

function getProductsByColor(color: string): ProductType[] {
  switch (color) {
    case 'red':
      return Products.filter((product: ProductType) => product.categoryId === 'RED');
    case 'yellow':
      return Products.filter((product: ProductType) => product.categoryId === 'YELLOW');
    case 'green':
      return Products.filter((product: ProductType) => product.categoryId === 'GREEN');
    default:
      return Products;
  }
}
