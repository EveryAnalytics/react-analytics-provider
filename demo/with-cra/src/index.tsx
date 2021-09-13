import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  Analytics,
  AnalyticsProvider,
  googleAnalyticsHelper,
  amplitudeHelper,
} from '@every-analytics/react-analytics-provider';
import {fruitLogger} from './utils/fruitLogger';
import {Toaster} from 'react-hot-toast';
import {toaster} from './utils/toaster';

amplitudeHelper.initialize(process.env.REACT_APP_AMPLITUDE_API_KEY);
const persistentValues = {userNo: 123};

const analytics: Analytics = {
  initialize: () => {
    googleAnalyticsHelper.initialize(process.env.REACT_APP_GA_TRACKING_ID, persistentValues);
  },
  trackPageView: params => {
    // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
    const path = window.location.pathname + window.location.search;
    fruitLogger.pageView(path, params);
    toaster.pageView(path, params);
    amplitudeHelper.logEvent('pageView', {path});
  },
  trackEvent: (name, params) => {
    googleAnalyticsHelper.event(name, params);
    fruitLogger.event(name, params);
    toaster.event(name, params);
  },
  trackClick: (name, params) => {
    googleAnalyticsHelper.click(name, params);
    fruitLogger.click(name, params);
    toaster.click(name, params);
  },
  set: (...args: Parameters<typeof googleAnalyticsHelper.set>) => {
    googleAnalyticsHelper.set(...args);
    fruitLogger.set(...args);
    toaster.set(...args);
  },
  setUserId: userId => {
    // TODO: UserId 설정하는 코드 추가
    console.log(userId);
  },
  setUserProperty: params => {
    googleAnalyticsHelper.setUserProperty(params);
    fruitLogger.setUserProperty(params);
    toaster.setUserProperty(params);
  },
};

ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider analytics={analytics}>
      <App />
    </AnalyticsProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
