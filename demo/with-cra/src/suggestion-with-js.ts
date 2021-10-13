import logger from 'every-analytics/core';
import fruitLogger from 'my-company/fruitLogger';

//
// every-analytics.config.js
logger.initialize({
  ga: 'gaId',
  amplitude: 'amplitudeId',
});

// If you need some custom or other PA
logger.initializeOther(() => {
  fruitLogger.init('pineappleId');
});

//
//
// EA has default funtions
// ex: pageView, click
logger.pageView('회원가입');
button.addEventListener('click', () => {
  logger.click('회원가입', {name: 'RAP'});
});

// You can make custom funtions
logger.addFuntions({
  outbound: (name, params) => {
    logger.click(name, {
      category: 'Outbound',
      action: 'Click',
      label: params?.label,
    });
  },
});
button.addEventListener('click', () => {
  logger.outbound('나갈래', {label: '나는 광고임'});
});
