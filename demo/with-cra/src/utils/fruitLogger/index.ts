import {UnknownRecord} from '../../../../../build/types/common';

const pageView = (path: string, params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - PageView', params);
};
const event = (name: string, params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - Event', name, params);
};
const click = (name: string, params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - Click', name, params);
};
const exception = (params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - Exception', params);
};

export const fruitLogger = {
  pageView,
  event,
  click,
  exception,
};
