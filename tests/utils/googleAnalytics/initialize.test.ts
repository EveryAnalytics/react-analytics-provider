import * as faker from 'faker';

import * as initUtils from '../../../src/utils/googleAnalytics/initialize';

const SCRIPT_ID = 'ga-gtag';

describe('googleAnalytics.initialize', () => {
  let trackingId: string;

  let mockDate: Date;

  let gtagSpy: jest.SpyInstance;

  let getElementByIdSpy: jest.SpyInstance;
  let createElementSpy: jest.SpyInstance;
  let insertBeforeSpy: jest.SpyInstance;
  let consoleInfoSpy: jest.SpyInstance;

  beforeEach(() => {
    trackingId = faker.lorem.word();

    mockDate = faker.datatype.datetime();
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    gtagSpy = jest.spyOn(initUtils, 'gtag');

    getElementByIdSpy = jest.spyOn(document, 'getElementById');
    createElementSpy = jest.spyOn(document, 'createElement');
    insertBeforeSpy = jest.spyOn(document, 'createElement');
    consoleInfoSpy = jest.spyOn(global.console, 'info');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should return if script element already exists', () => {
    getElementByIdSpy.mockReturnValue({innerHTML: 'EXIST'});
    createElementSpy.mockImplementation(() => null);

    initUtils.initialize(trackingId);

    expect(getElementByIdSpy).toHaveBeenCalledWith(SCRIPT_ID);
    expect(createElementSpy).toBeCalledTimes(0);
  });

  test('should create correct script element', () => {
    initUtils.initialize(trackingId);

    expect(getElementByIdSpy).toHaveBeenCalledWith(SCRIPT_ID);
    expect(createElementSpy).toHaveBeenCalledWith('script');
    expect(insertBeforeSpy).toBeCalledTimes(1);

    expect(gtagSpy).toHaveBeenNthCalledWith(1, 'js', mockDate);
    expect(gtagSpy).toHaveBeenNthCalledWith(2, 'config', trackingId, undefined);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);

    const scriptElement = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    expect(scriptElement.id).toEqual(SCRIPT_ID);
    expect(scriptElement.type).toEqual('text/javascript');
    expect(scriptElement.async).toEqual(true);
    expect(scriptElement.src).toContain(trackingId);
  });
});
