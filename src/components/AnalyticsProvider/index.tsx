import * as React from 'react';

import AnalyticsProviderContext from '../../contexts/AnalyticsProviderContext';
import {UnknownRecord} from '../../types/common';

interface Props {
  onInitialize(): void;
  onPageView?(params?: UnknownRecord): void;
  onEvent?(name: string, params?: UnknownRecord): void;
  onClick?(name: string, params?: UnknownRecord): void;
  onSet?(...args: [string, UnknownRecord] | [UnknownRecord]): void;
  onSetUserId?(userId: string | null): void;
  onSetUserProperty?(params: UnknownRecord): void;
  // TODO: modify params type
  onImpression?(name: string, params?: UnknownRecord): void;
  children: React.ReactNode;
}

export function AnalyticsProvider({
  onInitialize,
  onPageView = () => null,
  onEvent = () => null,
  onClick = () => null,
  onSet = () => null,
  onSetUserId = () => null,
  onSetUserProperty = () => null,
  onImpression = () => null,
  children,
}: Props) {
  React.useEffect(() => {
    onInitialize();
  }, [onInitialize]);

  return React.useMemo(
    () => (
      <AnalyticsProviderContext.Provider
        value={{
          onPageView,
          onEvent,
          onClick,
          onSet,
          onSetUserId,
          onSetUserProperty,
          onImpression,
        }}
      >
        {children}
      </AnalyticsProviderContext.Provider>
    ),
    [children, onClick, onEvent, onPageView, onSet, onSetUserId, onSetUserProperty, onImpression],
  );
}
