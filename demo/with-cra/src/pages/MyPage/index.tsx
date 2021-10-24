import {useEffect, useState} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import Select from '../../components/Select';
import styled from '@emotion/styled';

const MyPage = () => {
  const analytics = useAnalyticsContext();
  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  const [subscription, setSubscription] = useState('basic');
  const [currency, setCurrency] = useState('KRW');
  const [favorite, setFavoriteFruits] = useState('red');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    analytics.onSetUserProperty({subscription: subscription, currency: currency, favorite: favorite});
  };
  const subscriptionOptions = ['basic', 'premium'];
  const currencyOptions = ['KWR', 'USD', 'EUR'];
  const FavoriteFruitsOptions = ['Red', 'Yellow', 'Blue', 'Purple'];

  return (
    <Container>
      <h1>User Info</h1>
      <h5>User ID: Demo id</h5>
      <form onSubmit={handleSubmit}>
        <Select
          title="Subscription"
          selectValue="subscription"
          options={subscriptionOptions}
          onChange={setSubscription}
        />
        <div></div>
        <Select title="Currency" selectValue="currency" options={currencyOptions} onChange={setCurrency} />
        <div></div>
        <Select
          title="Favorites"
          selectValue="favoriteFruits"
          options={FavoriteFruitsOptions}
          onChange={setFavoriteFruits}
        />
        {/* <label>
          Favorite Fruits
          <select value={favorite} onChange={e => setFavoriteFruits(e.target.value)}>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </label> */}
        <div></div>
        <button type="submit">Save</button>
      </form>
    </Container>
  );
};

const Container = styled.div``;

export default MyPage;
