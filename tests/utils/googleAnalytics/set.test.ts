import * as faker from 'faker';

import * as initUtils from '../../../src/utils/googleAnalytics/initialize';
import {set} from '../../../src/utils/googleAnalytics/set';

describe('googleAnalyticsHelper.set', () => {
  const setUp = () => {
    const name = faker.lorem.word();
    const params = {foo: faker.lorem.text()};

    const gtagSpy = jest.spyOn(initUtils, 'gtag').mockImplementation(() => null);
    const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation(() => null);

    return {
      name,
      params,
      gtagSpy,
      consoleInfoSpy,
    };
  };

  test('should record a set with params', () => {
    const {params, gtagSpy, consoleInfoSpy} = setUp();

    set(params);

    expect(gtagSpy).toHaveBeenCalledWith('set', params);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });

  test('should record a set with fake name and params', () => {
    const {name, params, gtagSpy, consoleInfoSpy} = setUp();

    set(name, params);

    expect(gtagSpy).toHaveBeenCalledWith('set', name, params);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });
});
