import logger from 'every-analytics/core';
import logGA from 'every-analytics/helper/google-analytics';
import logAmplitude from 'every-analytics/helper/amplitude';
import fruitLogger from 'my-company/fruitLogger';

/** Case 1: 기본적으로 지원해주는 GA와 Amplitude만 쓰고싶을때 */
Analytics.setup({
  googleAnalytics: {trackingId: GA_ID, persistentValues: {id: 123}},
  amplitude: {trackingId: GA_ID},
});

Analytics.event('회원가입', {name: 'RAP'}); // GA, Amplitude 기본 event 발발

/** Case 2: custom형: init, event 모두 custom setting 필요 */
const initialize = () => {
  logGA.initialize(gaid);
  logAmplitude.initialize(amtid);
  fruitLogger.init();
};

const eventHandlers = {
  click: (name, params) => {
    logGA.click(name, params);
    logAmplitude.logEvent(amtid, params);
  },
  pageView: (name, params) => {
    const path = window.location.pathname + window.location.search;
    logAmplitude.logEvent(name, {action_type: 'pageView', path, ...params});
  },
};

Analytics.setup(initialize, eventHandlers);

Analytics.click('회원가입', {name: 'RAP'});
Analytics.event('회원가입', {name: 'RAP'});

/**
 * Case3: customMethods추가 원할때
 */
Analytics.setup({
  init: async () => {
    console.info('init completed');
  },
  event: (...args) => {
    console.info('event occured! ' + args);
  },
  customMethods: () => {
    return {
      outbound: args => {
        console.info('outbound occured! ' + args);
        fruitLogger.event('dd', {outbound: true, ...args});
      },
      outbound2: args => {
        console.info('outbound occured! ' + args);
        fruitLogger.event('dd', {outbound: true, ...args});
      },
    };
  },
});

button.addEventListener('click', () => {
  Analytics.event('회원가입', {name: 'RAP'});
  Analytics.custom.outbound('아웃바운드'); // 이렇게하면 타입추론이 좀 더 괜찮으려나?
});
