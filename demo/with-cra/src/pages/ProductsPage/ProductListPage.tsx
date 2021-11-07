import {useNavigate} from 'react-router-dom';

const ProductListPage = ({color, products}: {color: string; products: string[]}) => {
  const naviage = useNavigate();
  return (
    <>
      <h2>{color} fruits</h2>
      <ul>
        {products.map(_product => (
          <li key={_product} onClick={() => naviage(`/products?color=${color}&product=${_product.toLowerCase()}`)}>
            {_product}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductListPage;
