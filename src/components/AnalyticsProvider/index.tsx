import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';

interface Props {
  onInitialize(): void;
  onPageView?(path: string): void;
  onClick?(): void;
  children: React.ReactNode;
}

export function AnalyticsProvider({onInitialize, onPageView = () => null, children}: Props) {
  React.useEffect(() => {
    onInitialize();
  }, []);

  return React.useMemo(
    () => (
      <AnalyticsProviderContext.Provider
        value={{
          onPageView,
        }}
      >
        {children}
      </AnalyticsProviderContext.Provider>
    ),
    [children],
  );
}
