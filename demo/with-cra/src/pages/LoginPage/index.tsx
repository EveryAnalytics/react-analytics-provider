import {AnalyticsPageView} from '@every-analytics/react-analytics-provider';

const LoginPage = () => {
  return (
    <AnalyticsPageView params={{login: false}}>
      <h2>Login</h2>
    </AnalyticsPageView>
  );
};

export default LoginPage;
