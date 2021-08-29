import * as faker from 'faker';

import * as initUtils from '../../../src/utils/googleAnalytics/initialize';
import {event} from '../../../src/utils/googleAnalytics/event';

describe('googleAnalytics.event', () => {
  const setUp = () => {

    if (!window.dataLayer || !Array.isArray(window.dataLayer)) {
      window.dataLayer = window.dataLayer ?? [];
    }

    const name = faker.lorem.word();
    const params = {foo: 'bar'};

    const gtagSpy = jest.spyOn(initUtils, 'gtag');
    const consoleInfoSpy = jest.spyOn(global.console, 'info');

    return {
      name,
      params,
      gtagSpy,
      consoleInfoSpy,
    };
  };

  test('should record a event with fake name', () => {
    const {name, gtagSpy, consoleInfoSpy} = setUp();

    event(name);

    expect(gtagSpy).toHaveBeenCalledWith('event', name, undefined);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });

  test('should record a event with fake name and params', () => {
    const {name, params, gtagSpy, consoleInfoSpy} = setUp();

    event(name, params);

    expect(gtagSpy).toHaveBeenCalledWith('event', name, params);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });
});
