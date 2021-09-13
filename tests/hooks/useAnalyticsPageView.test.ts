import React from 'react';
import * as faker from 'faker';

import * as contextModule from '../../src/contexts/useAnalytics';
import {useAnalyticsPageView} from '../../src/hooks/useAnalyticsPageView';

describe('useAnalyticsPageView', () => {
  const setUp = () => {
    const params = {value: faker.lorem.word()};
    const callback = () => params;
    const asyncCallback = async () => params;

    const trackPageView = jest.fn();

    const useEffectSpy = jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb());
    const useContextSpy = jest.spyOn(contextModule, 'useAnalytics').mockImplementationOnce(
      () =>
        ({
          trackPageView,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );
    jest.spyOn(console, 'info').mockImplementation(() => null);

    return {
      params,
      callback,
      asyncCallback,
      trackPageView,
      useEffectSpy,
      useContextSpy,
    };
  };

  const waitForAsync = () => new Promise(resolve => setTimeout(resolve, 0));

  test('should call analytics.trackPageView with params', async () => {
    const {params, trackPageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(params);
    await waitForAsync();

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(trackPageView).toHaveBeenCalledWith(params);
  });

  test('should call analytics.trackPageView with callback', async () => {
    const {params, callback, trackPageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(callback);
    await waitForAsync();

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(trackPageView).toHaveBeenCalledWith(params);
  });

  test('should call analytics.trackPageView with asyncCallback', async () => {
    const {params, asyncCallback, trackPageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(asyncCallback);
    await waitForAsync();

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(trackPageView).toHaveBeenCalledWith(params);
  });
});
