import React from 'react';
import styled from '@emotion/styled';

export default function Main({children}: {children: React.ReactNode}) {
  return <StyledMain>{children}</StyledMain>;
}

const HEADER_HEIGHT = '6rem';

const StyledMain = styled.main`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  padding-top: ${HEADER_HEIGHT};
`;
