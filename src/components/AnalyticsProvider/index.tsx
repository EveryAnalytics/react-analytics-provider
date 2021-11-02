import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics} from '../../mixin/analytics';
import {IAnalyticsClient} from '../../interfaces';
import {SetUpParams} from '../../types';

export type AnalyticsProviderProps = {
  children: React.ReactNode;
} & (
  | {
      client: IAnalyticsClient;
    }
  | {setup: SetUpParams}
);

export function AnalyticsProvider(props: AnalyticsProviderProps) {
  React.useEffect(() => {
    if ('client' in props) {
      Analytics.preset(props.client);
    } else {
      Analytics.setup(props.setup);
    }
  }, [props]);

  return React.useMemo(
    () => <AnalyticsProviderContext.Provider value={Analytics}>{props.children}</AnalyticsProviderContext.Provider>,
    [props.children],
  );
}
