import {useEffect} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import styled from '@emotion/styled';
import navigate from '../../router/navigate';
import Card from '../../components/Card';

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
          title="RED"
          onClick={() => {
            navigate.push('products?color=red');
          }}
        ></Card>
        <Card
          title="YELLOW"
          onClick={() => {
            navigate.push('products?color=yellow');
          }}
        ></Card>
        <Card
          title="GREEN"
          onClick={() => {
            navigate.push('products?color=green');
          }}
        ></Card>
      </Cards>
    </>
  );
};

export default CurrencyPage;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
  @media (max-width: 764px) {
    flex-direction: column;
    align-items: center;
  }
`;
