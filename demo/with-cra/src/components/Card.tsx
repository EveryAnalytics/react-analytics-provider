import React from 'react';
import styled from '@emotion/styled';

const Card = ({
  title,
  imageUrl = NO_IMAGE_URL,
  onClick,
}: {
  title: string;
  imageUrl?: string;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
  };
  return (
    <CardContainer onClick={handleClick}>
      <CardImageContainer>
        <CardImage src={imageUrl} />
      </CardImageContainer>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;
const CardImageContainer = styled.div`
  width: 250px;
  height: 285px;
  border: solid 1px #000;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardTitle = styled.h3`
  font-size: 48px;
  text-align: center;
  margin: 0;
`;
const CardContainer = styled.section`
  background: #fff;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: #eee;
    box-shadow: 0px 0px 15px #ccc;
  }
`;
const NO_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';
