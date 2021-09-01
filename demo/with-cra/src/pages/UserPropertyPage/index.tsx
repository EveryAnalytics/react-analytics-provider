import {useEffect, useState} from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

const SetUserPropertyPage = () => {
  const analytics = useAnalyticsContext();
  useEffect(() => {
    analytics.onPageView();
  }, [analytics]);

  const [favoriteFood, setFavoriteFood] = useState('한식');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    analytics.onSetUserProperty({favoriteFood});
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Pick your favorite flavor:
        <select value={favoriteFood} onChange={e => setFavoriteFood(e.target.value)}>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="양식">양식</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SetUserPropertyPage;
