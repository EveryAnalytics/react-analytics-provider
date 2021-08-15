const pageView = (path: string, params?: {[key: string]: any}) => {
  console.info('🥝Fruit Logger - PageView', params);
};
const event = (name: string, params?: {[key: string]: any}) => {
  console.info('🥝Fruit Logger - Event', name, params);
};

export const fruitLogger = {
  pageView,
  event,
};
