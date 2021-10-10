import { amplitudeHelper } from '@every-analytics/react-analytics-provider';
import { googleAnalyticsHelper } from '@every-analytics/react-analytics-provider';
import {AnalyticsProvider} from '@every-analytics/react-analytics-provider';
import {AppProps} from 'next/app';
import {Layout} from '../layout/Layout';

const persistentValues = {userNo: 123};

function DemoApp({Component, pageProps}: AppProps) {
  return (
    <AnalyticsProvider
      onInitialize={() => {
        googleAnalyticsHelper.initialize(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, persistentValues);
        amplitudeHelper.initialize(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!);
      }}
      onPageView={params => {
        // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
        const path = window.location.pathname + window.location.search;
        amplitudeHelper.logEvent('pageView', {path});
      }}
      onEvent={(name, params) => {
        googleAnalyticsHelper.event(name, params);
        amplitudeHelper.logEvent(name, params);
      }}
      onClick={(name, params) => {
        googleAnalyticsHelper.click(name, params);
        amplitudeHelper.logEvent(name, {action_type: 'click', ...params});
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnalyticsProvider>
  );
}
export default DemoApp;
