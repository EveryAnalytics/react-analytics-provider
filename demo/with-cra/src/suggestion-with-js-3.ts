import logger from 'every-analytics/core';
import logGA from 'every-analytics/helper/google-analytics';
import logAmplitude from 'every-analytics/helper/amplitude';
import fruitLogger from 'my-company/fruitLogger';

/** Case 1: 기본적으로 지원해주는 GA와 Amplitude만 쓰고싶을때 */
Analytics.preset({
  defaultAnalytics: {
    googleAnalytics: {trackingId: GA_ID, persistentValues: {id: 123}},
    amplitude: {trackingId: GA_ID},
  },
});

Analytics.event('회원가입', {name: 'RAP'}); // GA, Amplitude 기본 event 발발

/** Case 2: 기본적으로 지원해주는 GA를 커스텀하고 싶을때 */
Analytics.preset({
  defaultAnalytics: {
    googleAnalytics: {trackingId: GA_ID, persistentValues: {id: 123}},
  },
  init: async () => {
    fruitLogger.init();
  },
  event: (...args) => {
    googleAnalyticsHelper.event(args.name, {action_type: '내맘대로', ...args});
  },
});

Analytics.click('회원가입', {name: 'RAP'}); // GA event 발발
Analytics.event('회원가입', {name: 'RAP'}); // 덮어씌워짐. custom event함수 발발. 기본 GA event 발발X

/**
 * Case3: 아예 custom형: init, event 모두 custom setting 필요
 */
Analytics.preset({
  init: async () => {
    console.info('init completed');
  },
  event: (...args) => {
    console.info('event occured! ' + args);
  },
  customTrackers: (): {outbound(args: {name: string}): void} => {
    return {
      outbound: args => {
        console.info('outbound occured! ' + args);
      },
    };
  },
});

button.addEventListener('click', () => {
  Analytics.event('회원가입', {name: 'RAP'});
  Analytics.custom.outbound('아웃바운드'); // 이렇게하면 타입추론이 좀 더 괜찮으려나?
});
