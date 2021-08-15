import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';

interface Props {
  onInitialize(): void;
  onPageView?(params?: {[key: string]: any}): void;
  onEvent?(name: string, params?: {[key: string]: any}): void;
  children: React.ReactNode;
}

export function AnalyticsProvider({onInitialize, onPageView = () => null, onEvent = () => null, children}: Props) {
  React.useEffect(() => {
    onInitialize();
  }, []);

  return React.useMemo(
    () => (
      <AnalyticsProviderContext.Provider
        value={{
          onPageView,
          onEvent,
        }}
      >
        {children}
      </AnalyticsProviderContext.Provider>
    ),
    [children],
  );
}
