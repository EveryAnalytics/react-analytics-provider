import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import Card from '../../components/Card';
import Cards from '../../components/Cards';
import ProductNav from '../../components/ProductNav';
import Products from '../../mocks/ecommerce/products.json';
import {AnalyticsViewItemType, ProductType} from '../../types/Product';
import ProductDetailPage from './ProductDetailPage';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const color = searchParams.get('color') || '';
  const product = searchParams.get('product') || '';
  const products = getProductsByColor(color);
  const analytics = useAnalyticsContext();
  const navigate = useNavigate();

  useEffect(() => {
    analytics.pageView();
    analytics.event('view_item_list', {items: makeViewItemListWithProducts(products)});
  }, [analytics, products]);

  const getProductDetailUrl = (product: ProductType): string => {
    return `/products?color=${color}&product=${product.name.en}`;
  };

  return (
    <ProductNav>
      {product ? (
        <ProductDetailPage product={product} />
      ) : (
        <>
          <h2>{color} fruits</h2>
          <Cards>
            {products.map((product: ProductType) => (
              <Card
                key={product.id}
                title={product.name.en}
                onClick={() => {
                  navigate(getProductDetailUrl(product));
                  analytics.event('product', product);
                }}
              />
            ))}
          </Cards>
        </>
      )}
    </ProductNav>
  );
};

export default ProductsPage;

function makeViewItemListWithProducts(products: ProductType[]): AnalyticsViewItemType[] {
  return products.map(
    (product: ProductType): AnalyticsViewItemType => ({
      id: product.id,
      name: product.name.en,
      category: product.categoryId,
      variant: product.categoryId,
      price: product.price,
    }),
  );
}

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
