type UnknownRecord = Record<string, unknown>;

const init = (apiKey: string) => {
  console.info(`🥝Fruit Logger - Init / apiKey: ${apiKey}`);
};
const pageView = (path: string, params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - PageView', params);
};
const event = (name: string, params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - Event', name, params);
};
const click = (name: string, params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - Click', name, params);
};
const set = (...args: [string, UnknownRecord] | [UnknownRecord]) => {
  const params = args.pop();
  const name = args.pop();
  if (name === undefined) {
    console.info('🥝Fruit Logger - Set', params);
  } else {
    console.info('🥝Fruit Logger - Set', name, params);
  }
};
const setUserProperty = (params: UnknownRecord) => {
  set('user_properties', params);
};
const exception = (params?: UnknownRecord) => {
  console.info('🥝Fruit Logger - Exception', params);
};

export const fruitLogger = {
  init,
  pageView,
  event,
  click,
  set,
  setUserProperty,
  exception,
};
