import logger from 'every-analytics/core';
import {LogPageView, LogClick} from 'every-analytics/react';

// NOTE: context 없이 구현 가능할거같기도? 그럼 every-analytics/core로
// ReactDOM.render(
//   <LoggerProvider
//     onInitialize={() => {
//       logGA.initialize(gaid);
//       logAmplitude.initialize(amtid);
//       fruitLogger.init();
//     }}
//     click={(name, params) => {
//       logGA.click(name, params);
//       logAmplitude.logEvent(amtid, params);
//     }}
//     pageView={(name, params) => {
//       const path = window.location.pathname + window.location.search;
//       logAmplitude.logEvent(name, {action_type: 'pageView', path, ...params});
//     }}
//   >
//     <App />
//   </LoggerProvider>,
// );

const LogWithComponent = () => {
  return (
    <LogPageView name="회원가입">
      <main>
        <LogClick name="회원가입" params={{is_something: true}}>
          <Button>회원가입</Button>
        </LogClick>
      </main>
    </LogPageView>
  );
};

const LogWithFunction = () => {
  useEffect(() => {
    logger.pageView('회원가입');
  });

  return (
    <main>
      <Button onClick={() => logger.click('회원가입', {name: 'RAP'})}>회원가입</Button>
    </main>
  );
};
