import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AnalyticsProvider, googleAnalytics} from '@every-analytics/react-analytics-provider';
import {fruitLogger} from './utils/fruitLogger';

ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider
      onInitialize={() => {
        googleAnalytics.initialize(process.env.REACT_APP_GA_TRACKING_ID!, {userNo: 123});
      }}
      onPageView={params => {
        const path = window.location.pathname + window.location.search;
        console.info('GA: Default PageView', path, params); // NOTE: Google Analytics(Universal analytics)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
        fruitLogger.pageView(path, params);
      }}
    >
      <App />
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
