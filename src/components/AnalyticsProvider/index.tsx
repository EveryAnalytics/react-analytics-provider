import React, {ReactNode, useEffect, useMemo} from 'react';
import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {Analytics, AnalyticsPreset} from '../../mixin/analytics';

interface Props extends AnalyticsPreset {
  children: ReactNode;
}

export function AnalyticsProvider(props: Props) {
  useEffect(() => {
    if (props.preset != null) {
      Analytics.preset?.(props);
    }
    props.onInit?.();
  }, [props]);

  return useMemo(
    () => <AnalyticsProviderContext.Provider value={Analytics}>{props.children}</AnalyticsProviderContext.Provider>,
    [props.children],
  );
}
