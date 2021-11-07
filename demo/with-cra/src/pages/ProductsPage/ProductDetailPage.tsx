import styled from '@emotion/styled';
import {Button} from '../../components/Buttons';

const ProductDetailPage = ({product}: {product: string}) => {
  return (
    <Wrapper>
      <Title>{product}</Title>
      <Image src="https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?size=626&ext=jpg" />
      <ButtonWrapper>
        <Button height="54px" color="white" shape="rounded">
          add to cart
        </Button>
        <Button height="54px" color="blue" shape="rounded">
          buy now
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 360px;
  margin-top: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 45%;
  aspect-ratio: 1;
  border: 1px solid gray;
`;

const Title = styled.div`
  font-size: 30px;
  align-items: flex-start;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default ProductDetailPage;
