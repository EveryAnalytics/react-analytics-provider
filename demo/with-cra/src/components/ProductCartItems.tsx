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
            <div className="name">{item.name.ko}</div>
            <div className="price">{item.price} KRW</div>
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
  gap: 15px;
  width: 100%;
  //background-color: #e1e1e1;
`;

const ProductCartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-radius: 10px;
  background-color: #f1f1f1;

  input {
    width: 5%;
  }
  img {
    width: 15%;
  }
`;

const ProductItemInfo = styled.div`
  display: flex;

  .name {
    width: 20rem;
    font-size: 2rem;
    font-weight: bold;
  }
  .price {
  }
`;
