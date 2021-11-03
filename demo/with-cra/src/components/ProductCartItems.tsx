import {ProductItem} from '../../types/common';
import React from 'react';
import styled from '@emotion/styled';

interface Props {
  items: ProductItem[];
}

function ProductCartItems({items}: Props) {
  return (
    <ProductCartItemWrapper>
      {items.map((item: ProductItem) => (
        <ProductCartItem key={item.id}>
          <input type={'checkbox'} value={item.id} />
          <img src={item.imageUrl} alt={item.name.ko} />
          <ProductItemInfo>
            <div>{item.name.ko}</div>
            <div>{item.price}</div>
          </ProductItemInfo>
        </ProductCartItem>
      ))}
    </ProductCartItemWrapper>
  );
}

export default ProductCartItems;

const ProductCartItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: #e1e1e1;
`;

const ProductCartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;
  border-radius: 10px;
  background-color: #f1f1f1;
`;

const ProductItemInfo = styled.div``;
