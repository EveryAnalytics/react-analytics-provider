import * as faker from 'faker';

import * as initUtils from '../../../src/utils/googleAnalytics/initialize';

const SCRIPT_ID = 'ga-gtag';

describe('googleAnalyticsHelper.initialize', () => {
  const setUp = () => {
    const trackingId = faker.lorem.word();

    const mockDate = faker.datatype.datetime();
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const gtagSpy = jest.spyOn(initUtils, 'gtag');
    const getElementByIdSpy = jest.spyOn(document, 'getElementById');
    const createElementSpy = jest.spyOn(document, 'createElement');
    const insertBeforeSpy = jest.spyOn(document, 'createElement');
    const consoleInfoSpy = jest.spyOn(console, 'info');
    const consoleWarnSpy = jest.spyOn(console, 'warn');

    return {
      trackingId,
      mockDate,
      gtagSpy,
      getElementByIdSpy,
      createElementSpy,
      insertBeforeSpy,
      consoleInfoSpy,
      consoleWarnSpy,
    };
  };

  test('should return if script element already exists', () => {
    const {trackingId, getElementByIdSpy, createElementSpy} = setUp();
    getElementByIdSpy.mockReturnValue({innerHTML: 'EXIST'} as HTMLElement);

    initUtils.initialize(trackingId);

    expect(getElementByIdSpy).toHaveBeenCalledWith(SCRIPT_ID);
    expect(createElementSpy).toBeCalledTimes(0);
  });

  test('should create correct script element', () => {
    const {trackingId, getElementByIdSpy, insertBeforeSpy, gtagSpy, consoleInfoSpy, mockDate, createElementSpy} =
      setUp();

    initUtils.initialize(trackingId);

    expect(getElementByIdSpy).toHaveBeenCalledWith(SCRIPT_ID);
    expect(createElementSpy).toHaveBeenCalledWith('script');
    expect(insertBeforeSpy).toBeCalledTimes(1);

    expect(gtagSpy).toHaveBeenNthCalledWith(1, 'js', mockDate);
    expect(gtagSpy).toHaveBeenNthCalledWith(2, 'config', trackingId, undefined);
    const scriptElement = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    scriptElement.addEventListener = jest.fn().mockImplementationOnce((_, callback) => callback());
    scriptElement.dispatchEvent(new Event('load'));

    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
    expect(scriptElement.id).toEqual(SCRIPT_ID);
    expect(scriptElement.type).toEqual('text/javascript');
    expect(scriptElement.async).toEqual(true);
    expect(scriptElement.src).toContain(trackingId);
  });

  test('should warn if failed to create correct script element', () => {
    const {trackingId, consoleWarnSpy} = setUp();

    initUtils.initialize(trackingId);

    const scriptElement = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    scriptElement.addEventListener = jest.fn().mockImplementationOnce((_, callback) => callback());
    scriptElement.dispatchEvent(new Event('error'));

    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});
