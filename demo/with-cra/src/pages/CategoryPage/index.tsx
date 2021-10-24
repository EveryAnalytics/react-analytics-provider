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
          title="aaa"
          imageUrl="https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg"
          onClick={() => {
            navigate.push('products?color=red');
          }}
        ></Card>
        <Card
          title="aaa"
          imageUrl="https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg"
          onClick={() => {
            navigate.push('products?color=yellow');
          }}
        ></Card>
        <Card
          title="aaa"
          imageUrl="https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg"
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
`;
