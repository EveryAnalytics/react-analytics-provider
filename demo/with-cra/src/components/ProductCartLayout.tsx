import React from 'react';
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
`;

const ContentSpacing = styled.div`
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
