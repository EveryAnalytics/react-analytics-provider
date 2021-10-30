import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AnalyticsProvider, googleAnalyticsHelper, amplitudeHelper} from '@every-analytics/react-analytics-provider';
import {fruitLogger} from './utils/fruitLogger';
import {Toaster} from 'react-hot-toast';
import {toaster} from './utils/toaster';
import {Global, css} from '@emotion/react';
import globalStyle from './utils/globalStyle';

amplitudeHelper.initialize(process.env.REACT_APP_AMPLITUDE_API_KEY);
const persistentValues = {userNo: 123};

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${globalStyle}
      `}
    />
    <AnalyticsProvider
      onInitialize={() => {
        googleAnalyticsHelper.initialize(process.env.REACT_APP_GA_TRACKING_ID, persistentValues);
      }}
      onPageView={params => {
        // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
        const path = window.location.pathname + window.location.search;
        fruitLogger.pageView(path, params);
        toaster.pageView(path, params);
        amplitudeHelper.logEvent('pageView', {path});
      }}
      onEvent={(name, params) => {
        googleAnalyticsHelper.event(name, params);
        fruitLogger.event(name, params);
        toaster.event(name, params);
      }}
      onClick={(name, params) => {
        googleAnalyticsHelper.click(name, params);
        fruitLogger.click(name, params);
        toaster.click(name, params);
      }}
      onSet={(...args: Parameters<typeof googleAnalyticsHelper.set>) => {
        googleAnalyticsHelper.set(...args);
        fruitLogger.set(...args);
        toaster.set(...args);
      }}
      onSetUserId={userId => {
        // TODO: UserId 설정하는 코드 추가
        console.log(userId);
      }}
      onSetUserProperty={params => {
        googleAnalyticsHelper.setUserProperty(params);
        fruitLogger.setUserProperty(params);
        toaster.setUserProperty(params);
      }}
      onException={params => {
        googleAnalyticsHelper.exception(params);
        fruitLogger.exception(params);
        toaster.exception(params);
      }}
    >
      <App />
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
