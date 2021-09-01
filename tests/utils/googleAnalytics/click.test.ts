import * as faker from 'faker';
import * as initUtils from '../../../src/utils/googleAnalytics/initialize';
import * as clickUtils from '../../../src/utils/googleAnalytics/click';

describe('googleAnalyticsHelper.click', () => {
  const setUp = () => {
    const name = faker.lorem.word();
    const params = {foo: 'bar'};
    const gtagSpy = jest.spyOn(initUtils, 'gtag').mockImplementation(() => null);
    const consoleInfoSpy = jest.spyOn(console, 'info');

    return {
      name,
      params,
      gtagSpy,
      consoleInfoSpy,
    };
  };

  test('should record a click event with fake name', () => {
    const {name, gtagSpy, consoleInfoSpy} = setUp();

    clickUtils.click(name);

    expect(consoleInfoSpy).toBeCalledTimes(1);
    expect(consoleInfoSpy).toHaveBeenCalledWith(`✅GA: click ${name}`, {action_type: 'click'});
    expect(gtagSpy).toBeCalledTimes(1);
    expect(gtagSpy).toHaveBeenCalledWith('event', name, {action_type: 'click'});
  });

  test('should record a click event with fake name and params', () => {
    const {name, params, gtagSpy, consoleInfoSpy} = setUp();

    clickUtils.click(name, params);

    expect(consoleInfoSpy).toBeCalledTimes(1);
    expect(consoleInfoSpy).toHaveBeenCalledWith(`✅GA: click ${name}`, {action_type: 'click', ...params});
    expect(gtagSpy).toBeCalledTimes(1);
    expect(gtagSpy).toHaveBeenCalledWith('event', name, {action_type: 'click', ...params});
  });
});
