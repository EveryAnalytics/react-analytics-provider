import styled from '@emotion/styled';

// size, color들을 좀 semantic하게 정의해서 쓸 필요가 있을듯
type Color = 'white' | 'blue';
type Shape = 'rounded' | 'normal';

export const Button = styled.button<{
  color: Color;
  height: string;
  shape?: Shape;
}>`
  width: 100%;
  border: 1px solid #293ad2;
  background-color: ${props => (props.color === 'blue' ? '#293AD2' : 'white')};
  color: ${props => (props.color === 'blue' ? 'white' : 'black')};
  font-size: 18px;
  border-radius: ${props => ((props.shape || 'normal') === 'rounded' ? '8px' : 'none')};
  height: ${props => props.height};
`;
