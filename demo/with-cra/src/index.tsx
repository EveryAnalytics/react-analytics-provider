import {css, Global} from '@emotion/react';
import {AnalyticsProvider} from '@every-analytics/react-analytics-provider';
import React from 'react';
import ReactDOM from 'react-dom';
import {Toaster} from 'react-hot-toast';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {fruitLogger} from './utils/fruitLogger';
import globalStyle from './utils/globalStyle';

// amplitudeHelper.initialize(process.env.REACT_APP_AMPLITUDE_API_KEY);
const persistentValues = {userNo: 123};

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${globalStyle}
      `}
    />
    <AnalyticsProvider
      preset={{
        googleAnalytics: {
          trackingId: process.env.REACT_APP_GA_TRACKING_ID,
          persistentValues,
        },
        amplitude: {
          apiKey: process.env.REACT_APP_AMPLITUDE_API_KEY,
        },
      }}
      onInit={() => {
        // You can initialize other loggers here.
        fruitLogger.init(process.env.REACT_APP_FRUIT_LOGGER_API_KEY);
      }}
      // onPageView={params => {
      //   // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
      //   const path = window.location.pathname + window.location.search;
      //   fruitLogger.pageView(path, params);
      //   toaster.pageView(path, params);
      //   amplitudeHelper.logEvent('pageView', {path});
      // }}
      // onEvent={(name, params) => {
      //   googleAnalyticsHelper.event(name, params);
      //   fruitLogger.event(name, params);
      //   toaster.event(name, params);
      // }}
      // onClick={(name, params) => {
      //   googleAnalyticsHelper.click(name, params);
      //   fruitLogger.click(name, params);
      //   toaster.click(name, params);
      // }}
      // onSet={(...args: Parameters<typeof googleAnalyticsHelper.set>) => {
      //   googleAnalyticsHelper.set(...args);
      //   fruitLogger.set(...args);
      //   toaster.set(...args);
      // }}
      // onSetUserId={userId => {
      //   // TODO: UserId 설정하는 코드 추가
      //   console.log(userId);
      // }}
      // onSetUserProperty={params => {
      //   googleAnalyticsHelper.setUserProperty(params);
      //   fruitLogger.setUserProperty(params);
      //   toaster.setUserProperty(params);
      // }}
      // onException={params => {
      //   googleAnalyticsHelper.exception(params);
      //   fruitLogger.exception(params);
      //   toaster.exception(params);
      // }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnalyticsProvider>
    <Toaster
      position="bottom-right"
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
