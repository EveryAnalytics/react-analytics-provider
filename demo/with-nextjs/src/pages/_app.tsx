import {Analytics, AnalyticsProvider} from '@every-analytics/react-analytics-provider';
import {AppProps} from 'next/app';
import {Layout} from '../layout/Layout';

function DemoApp({Component, pageProps}: AppProps) {
  const analytics: Analytics = {
    trackPageView: params => {
      // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
      // TODO: 이준희 => ga, amplitude event tracking 코드 추가
      console.log('onTrackPageView', params);
    },
    trackEvent: (name, params) => {
      // TODO: 이준희 => ga, amplitude event tracking 코드 추가
      console.log('onTrackEvent', name, params);
    },
    trackClick: (name, params) => {
      // TODO: 이준희 => ga, amplitude event tracking 코드 추가
      console.log('onTrackClick', name, params);
    },
    set: (...args) => {
      console.log('onSet', args);
    },
    setUserId: userId => {
      console.log('onSetUserId', userId);
    },
    setUserProperty: params => {
      console.log('onSetUserProperty', params);
    },
  };

  return (
    <AnalyticsProvider
      onInitialize={() => {
        // TODO: 이준희 => ga, amplitude event tracking 코드 추가
        console.log('onInitialize');
      }}
      analytics={analytics}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnalyticsProvider>
  );
}
export default DemoApp;
