import {useEffect} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import styled from '@emotion/styled';
import navigate from '../../router/navigate';

const CurrencyPage = () => {
  const analytics = useAnalyticsContext();
  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  return (
    <>
      <h1>Category</h1>
      <Cards>
        <Card
          onClick={() => {
            navigate.push('/products?color=red');
          }}
        >
          <CardImageContainer>
            <CardImage src="https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg" />
          </CardImageContainer>
          <CardTitle>PPPPP</CardTitle>
        </Card>
        <Card
          onClick={() => {
            navigate.push('/products?color=yellow');
          }}
        >
          <CardImageContainer>
            <CardImage src="https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg" />
          </CardImageContainer>
          <CardTitle>PPPPP</CardTitle>
        </Card>
        <Card
          onClick={() => {
            navigate.push('/products?color=green');
          }}
        >
          <CardImageContainer>
            <CardImage src="https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg" />
          </CardImageContainer>
          <CardTitle>PPPPP</CardTitle>
        </Card>
      </Cards>
    </>
  );
};

export default CurrencyPage;

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
const Card = styled.section`
  background: #fff;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: #eee;
    box-shadow: 0px 0px 15px #ccc;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
`;
