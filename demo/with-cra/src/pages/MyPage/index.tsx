import styled from '@emotion/styled';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import {useState} from 'react';
import Select from '../../components/Select';

const MyPage = () => {
  const analytics = useAnalyticsContext();

  interface SelectItems {
    title: string;
    selectValue: string;
    options: string[];
    onChange: (value: string) => void;
  }
  const [subscription, setSubscription] = useState<string>('basic');
  const [currency, setCurrency] = useState<string>('KRW');
  const [favorite, setFavoriteFruits] = useState<string>('red');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    analytics.setUserProperties({subscription: subscription, currency: currency, favorite: favorite});
  };
  const subscriptionOptions = ['basic', 'premium'];
  const currencyOptions = ['KWR', 'USD', 'EUR'];
  const favoriteFruitsOptions = ['Red', 'Yellow', 'Blue', 'Purple'];
  const selectItems: SelectItems[] = [
    {
      title: 'Subscription',
      selectValue: 'subscription',
      options: subscriptionOptions,
      onChange: setSubscription,
    },
    {
      title: 'Currency',
      selectValue: 'currency',
      options: currencyOptions,
      onChange: setCurrency,
    },
    {
      title: 'Favorites',
      selectValue: 'favoriteFruits',
      options: favoriteFruitsOptions,
      onChange: setFavoriteFruits,
    },
  ];
  return (
    <MyPageContainer>
      <MyPageTitle>My Page</MyPageTitle>
      <MyPageUserId>User ID: Demo id</MyPageUserId>
      <form onSubmit={handleSubmit}>
        {selectItems.map(selectItem => (
          <Select
            title={selectItem.title}
            selectValue={selectItem.selectValue}
            options={selectItem.options}
            onChange={selectItem.onChange}
          />
        ))}
        <div></div>
        <MyPageButton type="submit">Save</MyPageButton>
      </form>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div``;
const MyPageTitle = styled.h3`
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
`;
const MyPageUserId = styled.div`
  font-size: 25px;
  margin: 20px;
`;
const MyPageButton = styled.button`
  width: 60px;
  height: 30px;
  border: 2px solid black;
  border-radius: 20px;
  margin-left: 50px;
  cursor: pointer;
  &:hover {
    background: rgb(277, 277, 277);
  }
`;

export default MyPage;
