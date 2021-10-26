import React from 'react';
import styled from '@emotion/styled';

export default function Main({children}: {children: React.ReactNode}) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.main`
  min-height: calc(100vh - 6rem);
  padding-top: 6rem;
`;
