import {AnalyticsProvider} from '@every-analytics/react-analytics-provider';
import {AppProps} from 'next/app';
import {Layout} from '../layout/Layout';

function DemoApp({Component, pageProps}: AppProps) {
  return (
    <AnalyticsProvider
      onInitialize={() => {
        // TODO: 이준희 => ga, amplitude event tracking 코드 추가
        console.log('onInitialize');
      }}
      onPageView={params => {
        // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
        // TODO: 이준희 => ga, amplitude event tracking 코드 추가
        console.log('onPageView', params);
      }}
      onEvent={(name, params) => {
        // TODO: 이준희 => ga, amplitude event tracking 코드 추가
        console.log('onEvent', name, params);
      }}
      onClick={(name, params) => {
        // TODO: 이준희 => ga, amplitude event tracking 코드 추가
        console.log('onClick', name, params);
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnalyticsProvider>
  );
}
export default DemoApp;
