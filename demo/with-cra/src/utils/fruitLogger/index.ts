const modalView = (name: string, params?: {[key: string]: any}) => {
  console.info('🥝Fruit Logger - ModalView', name, params);
};

const pageView = (path: string, params?: {[key: string]: any}) => {
  console.info('🥝Fruit Logger - PageView', params);
};
const event = (name: string, params?: {[key: string]: any}) => {
  console.info('🥝Fruit Logger - Event', name, params);
};
const click = (name: string, params?: {[key: string]: any}) => {
  console.info('🥝Fruit Logger - Click', name, params);
};

export const fruitLogger = {
  modalView,
  pageView,
  event,
  click,
};
