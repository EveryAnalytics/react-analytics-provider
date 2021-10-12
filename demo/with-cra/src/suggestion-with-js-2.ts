import logger from 'every-analytics/core';
import logGA from 'every-analytics/helper/google-analytics';
import logAmplitude from 'every-analytics/helper/amplitude';
import fruitLogger from 'my-company/fruitLogger';

const initLoggers = () => {
  logGA.initialize(gaid);
  logAmplitude.initialize(amtid);
  fruitLogger.init();
};

const eventHandlerPreset = {
  click: (name, params) => {
    logGA.click(name, params);
    logAmplitude.logEvent(amtid, params);
  },
  pageView: (name, params) => {
    const path = window.location.pathname + window.location.search;
    logAmplitude.logEvent(name, {action_type: 'pageView', path, ...params});
  },
};

logger.initialize(initLoggers, eventHandlerPreset);

logger.pageView('회원가입');
button.addEventListener('click', () => {
  logger.click('회원가입', {name: 'RAP'});
});
