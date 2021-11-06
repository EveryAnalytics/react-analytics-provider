import React, {useEffect, useMemo} from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics} from '../../mixin/analytics';
import {AnalyticsClient} from '../../interfaces';
import {SetupParams} from '../../types';

export type AnalyticsProviderProps = {
  children: React.ReactNode;
} & (
  | {
      client: AnalyticsClient;
    }
  | {setup: SetupParams}
);

export function AnalyticsProvider(props: AnalyticsProviderProps) {
  useEffect(() => {
    if ('client' in props) {
      Analytics.preset(props.client);
    } else {
      Analytics.setup(props.setup);
    }
  }, [props]);

  return useMemo(
    () => <AnalyticsProviderContext.Provider value={Analytics}>{props.children}</AnalyticsProviderContext.Provider>,
    [props.children],
  );
}
