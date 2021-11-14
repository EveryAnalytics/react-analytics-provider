import React, {useEffect, useMemo, ReactNode} from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics} from '../../mixin/analytics';
import {AnalyticsClient} from '../../interfaces';
import {SetupParams} from '../../types';

export interface CustomSetupProps {
  children: ReactNode;
  client: AnalyticsClient;
}

export interface DefaultSetupProps {
  children: ReactNode;
  setup: SetupParams;
}

export type AnalyticsProviderProps = CustomSetupProps | DefaultSetupProps;

const isCustomSetup = (props: AnalyticsProviderProps): props is CustomSetupProps =>
  (props as CustomSetupProps).client !== undefined;

const isDefaultSetup = (props: AnalyticsProviderProps): props is DefaultSetupProps =>
  (props as DefaultSetupProps).setup !== undefined;

export function AnalyticsProvider(props: AnalyticsProviderProps) {
  useEffect(() => {
    if (isCustomSetup(props)) {
      Analytics.preset(props.client);
      return;
    }
    if (isDefaultSetup(props)) {
      Analytics.setup(props.setup);
      return;
    }
  }, [props]);

  return useMemo(
    () => <AnalyticsProviderContext.Provider value={Analytics}>{props.children}</AnalyticsProviderContext.Provider>,
    [props.children],
  );
}
