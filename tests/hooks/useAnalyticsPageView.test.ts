import React from 'react';
import * as faker from 'faker';

import * as contextModule from '../../src/contexts/useAnalyticsContext';
import {useAnalyticsPageView} from '../../src/hooks/useAnalyticsPageView';

describe('useAnalyticsPageView', () => {
  const setUp = () => {
    const word = faker.lorem.word();
    const params = {params: word};
    const callback = () => params;
    const asyncCallback = async () => params;

    const pageView = jest.fn();

    const useEffectSpy = jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb());
    const useContextSpy = jest.spyOn(contextModule, 'useAnalyticsContext').mockImplementationOnce(
      () =>
        ({
          pageView,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );
    jest.spyOn(console, 'info').mockImplementation(() => null);

    return {
      params,
      callback,
      asyncCallback,
      pageView,
      useEffectSpy,
      useContextSpy,
    };
  };

  const waitForAsync = () => new Promise(resolve => setTimeout(resolve, 0));

  test('should call analytics.onPageView with params', async () => {
    const {params, pageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(params);
    await waitForAsync();

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(pageView).toHaveBeenCalledWith(params);
  });

  test('should call analytics.onPageView with callback', async () => {
    const {params, callback, pageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(callback);
    await waitForAsync();

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(pageView).toHaveBeenCalledWith(params);
  });

  test('should call analytics.onPageView with asyncCallback', async () => {
    const {params, asyncCallback, pageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(asyncCallback);
    await waitForAsync();

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(pageView).toHaveBeenCalledWith(params);
  });
});
