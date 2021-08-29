import React from 'react';
import {
  useAnalyticsPageView,
  useAnalyticsContext,
  AnalyticsVirtualPageView,
} from '@every-analytics/react-analytics-provider';
import {getQueryParams} from 'utils/location';
import Modal from 'components/Modal';


const MainPage = () => {
  const analytics = useAnalyticsContext();

  const {referrer} = getQueryParams<{referrer: string}>();
  useAnalyticsPageView({referrer});

  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(true);
    analytics.onClick('click mainpage/VirtualPage');
  };
  return (
    <>
      <h1>Fruit Store</h1>
      <button onClick={handleClick}>VirtualPage</button>
      {isOpen && (
        <AnalyticsVirtualPageView name={'modal'} params={{message: true}}>
          <Modal setIsOpen={setIsOpen}>WELCOME TO FRUIT STORE</Modal>
        </AnalyticsVirtualPageView>
      )}
    </>
  );
};

export default MainPage;
