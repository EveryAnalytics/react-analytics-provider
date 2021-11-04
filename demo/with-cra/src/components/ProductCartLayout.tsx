import styled from '@emotion/styled';

function ProductCartLayout({
  title,
  children,
  buttonContent,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  buttonContent: string;
  onClick: () => void;
}) {
  return (
    <LayoutSpacing>
      <Title>{title}</Title>
      <ContentSpacing>{children}</ContentSpacing>
      <Button onClick={onClick}>{buttonContent}</Button>
    </LayoutSpacing>
  );
}

export default ProductCartLayout;

const LayoutSpacing = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentSpacing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  margin: auto;
  text-align: center;
  width: 300px;
  height: 50px;
  background-color: #293ad2;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
`;
