import React from 'react';
import * as faker from 'faker';

import * as contextModule from '../../src/contexts/useAnalyticsContext';
import {useAnalyticsPageView} from '../../src/hooks/useAnalyticsPageView';

describe('useAnalyticsPageView', () => {
  const setUp = () => {
    const params = {value: faker.lorem.word()};
    const callback = () => params;
    const asyncCallback = async () => params;

    const onPageView = jest.fn();

    const useEffectSpy = jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb());
    const useContextSpy = jest.spyOn(contextModule, 'useAnalyticsContext').mockImplementationOnce(
      () =>
        ({
          onPageView,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );

    return {
      params,
      callback,
      asyncCallback,
      onPageView,
      useEffectSpy,
      useContextSpy,
    };
  };

  test('should call analytics.onPageView with params', async () => {
    const {params, onPageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(params);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(onPageView).toHaveBeenCalledWith(params);
  });

  test('should call analytics.onPageView with params', async () => {
    const {params, callback, onPageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(callback);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(onPageView).toHaveBeenCalledWith(params);
  });

  test('should call analytics.onPageView with params', async () => {
    const {params, asyncCallback, onPageView, useContextSpy, useEffectSpy} = setUp();

    useAnalyticsPageView(asyncCallback);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(useContextSpy).toHaveBeenCalled();
    expect(useEffectSpy).toHaveBeenCalled();
    expect(onPageView).toHaveBeenCalledWith(params);
  });
});
