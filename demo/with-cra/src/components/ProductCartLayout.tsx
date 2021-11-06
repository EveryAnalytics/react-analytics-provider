import styled from '@emotion/styled';

function ProductCartLayout({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <LayoutSpacing>
      <Title>{title}</Title>
      <ContentSpacing>{children}</ContentSpacing>
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
`;
