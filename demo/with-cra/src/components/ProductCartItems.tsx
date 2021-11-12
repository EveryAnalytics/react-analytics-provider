import {ProductItem} from '../../types/common';
import styled from '@emotion/styled';

interface Props {
  items: ProductItem[];
  useCheckbox?: boolean;
  onDelete?: () => void;
}

function ProductCartItems({items, useCheckbox = true, onDelete}: Props) {
  return (
    <ProductCartItemWrapper>
      {items.map((item: ProductItem) => (
        <ProductCartItem key={item.id}>
          {useCheckbox && <Input type={'checkbox'} value={item.id} />}
          <ProductItemImage src={item.imageUrl} alt={item.name.ko} />
          <ProductItemInfo>
            <ProductItemCategory>{item.categoryId}</ProductItemCategory>
            <ProductItemName>
              <div>{item.name.ko}</div>
              <div>({item.name.en})</div>
            </ProductItemName>
            <ProductItemPrice>{item.price} KRW</ProductItemPrice>
          </ProductItemInfo>
          {onDelete && <DeleteButton onClick={onDelete}>X</DeleteButton>}
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
`;

const ProductCartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-radius: 10px;
  background-color: #f1f1f1;
`;

const Input = styled.input`
  width: 5%;
`;

const ProductItemImage = styled.img`
  width: 15%;
`;

const ProductItemInfo = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;
const ProductItemCategory = styled.span``;

const ProductItemName = styled.div`
  text-align: center;
  font-size: 2rem;
`;
const ProductItemPrice = styled.span``;

const DeleteButton = styled.button`
  width: 5%;
`;
