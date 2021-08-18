import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {UnknownRecord} from '../../types/common';

interface Props {
  onInitialize(): void;
  onModalView?(name: string, params?: UnknownRecord): void;
  onPageView?(params?: UnknownRecord): void;
  onEvent?(name: string, params?: UnknownRecord): void;
  onClick?(name: string, params?: UnknownRecord): void;
  children: React.ReactNode;
}

export function AnalyticsProvider({
  onInitialize,
  onModalView = () => null,
  onPageView = () => null,
  onEvent = () => null,
  onClick = () => null,
  children,
}: Props) {
  React.useEffect(() => {
    onInitialize();
  }, [onInitialize]);

  return React.useMemo(
    () => (
      <AnalyticsProviderContext.Provider
        value={{
          onModalView,
          onPageView,
          onEvent,
          onClick,
        }}
      >
        {children}
      </AnalyticsProviderContext.Provider>
    ),
    [children, onClick, onEvent, onPageView, onModalView],
  );
}
