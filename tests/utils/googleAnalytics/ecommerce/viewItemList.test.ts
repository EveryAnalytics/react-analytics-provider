import * as faker from 'faker';
import * as initUtils from '../../../../src/utils/googleAnalytics/initialize';
import {Action, Product} from '../../../../src/types/ecommerce';
import {viewItemList} from '../../../../src/utils/googleAnalytics/ecommerce/viewItemList';

describe('googleAnalyticsHelper.ecommerce.viewItemList', () => {
  const setUp = () => {
    const name = 'view_item_list';
    const action: Action = {
      items: fakerItems,
    };
    const gtagSpy = jest.spyOn(initUtils, 'gtag').mockImplementation(() => null);
    const consoleInfoSpy = jest.spyOn(console, 'info');

    return {
      name,
      action,
      gtagSpy,
      consoleInfoSpy,
    };
  };

  test('should record a event with fake items', () => {
    const {name, action, gtagSpy, consoleInfoSpy} = setUp();

    viewItemList(action);

    expect(gtagSpy).toHaveBeenCalledWith('event', name, action);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });

  test('should record a event with fake empty items', () => {
    const {name, gtagSpy, consoleInfoSpy} = setUp();
    const emptyAction = {
      items: [],
    };

    viewItemList(emptyAction);

    expect(gtagSpy).toHaveBeenCalledWith('event', name, emptyAction);
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });
});

const fakerItems = ((): Array<Product> => {
  const length = Math.floor(Math.random() * 9) + 1;
  const items = new Array(length).fill(null).map(_ => ({
    id: faker.lorem.word(),
    name: faker.commerce.productName(),
    list_name: faker.lorem.word(),
    brand: faker.commerce.department(),
    category: faker.lorem.word(),
    variant: faker.commerce.color(),
    price: Number(faker.commerce.price()),
    quantity: faker.datatype.number(),
    list_position: faker.datatype.number(),
  }));
  return items;
})();
