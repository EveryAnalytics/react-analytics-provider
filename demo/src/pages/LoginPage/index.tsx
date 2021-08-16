import {AnalyticsPageView} from '@every-analytics/react-analytics-provider';

const LoginPage = () => {

  return (
    <AnalyticsPageView params={{login: false}}>
      <h1>Login</h1>
    </AnalyticsPageView>
  );
};

export default LoginPage;
