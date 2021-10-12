import logger from 'every-analytics/core';
import logGA from 'every-analytics/helper/google-analytics';
import logAmplitude from 'every-analytics/helper/amplitude';
import fruitLogger from 'my-company/fruitLogger';

/**
 * 1. beforeAll
 * 2. initialize
 */
logger.initialize(() => {
  logGA.initialize(gaid);
  logAmplitude.initialize(amtid);
  fruitLogger.init();
});

/**
 * 1. track
 * 2. trackBehaviors
 * 3. setTrackers
 * 4. setActions
 * 5. setListeners
 * 6. setEvents
 */
logger.setTrackers({
  click: (name, params) => {
    logGA.click(name, params);
    logAmplitude.logEvent(name, params);
  },
  pageView: (name, params) => {
    const path = window.location.pathname + window.location.search;
    logAmplitude.logEvent(name, {action_type: 'pageView', path, ...params});
  },
});

logger.pageView('회원가입');
button.addEventListener('click', () => {
  logger.click('회원가입', {name: 'RAP'});
});
