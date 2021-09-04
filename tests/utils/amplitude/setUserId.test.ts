import * as faker from 'faker';
import * as initUtils from '../../../src/utils/googleAnalytics/initialize';
import * as clickUtils from '../../../src/utils/googleAnalytics/click';

describe('amplitudeHelper.setUserId', () => {
  const setUp = () => {
    const name = faker.lorem.word();

    return {
      name,
    };
  };

  test('should set a click event with fake name', () => {
    const {name, gtagSpy, consoleInfoSpy} = setUp();

    clickUtils.click(name);

    expect(consoleInfoSpy).toBeCalledTimes(1);
    expect(consoleInfoSpy).toHaveBeenCalledWith(`✅GA: click ${name}`, {action_type: 'click'});
    expect(gtagSpy).toBeCalledTimes(1);
    expect(gtagSpy).toHaveBeenCalledWith('event', name, {action_type: 'click'});
  });
});
