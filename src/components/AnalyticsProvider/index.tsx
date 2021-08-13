import * as React from "react";

import AnalyticsProviderContext from "../../contexts/AnalyticsProviderContext";
import { initializeGA } from "../../utils/googleAnalytics/initialize";

interface Props {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: Props) {
  React.useEffect(() => {
    initializeGA("G-GZ339RG282");
    // NOTE: 추후에는 본인이 원하는 Analytis tools 선택해서 자유롭게 넣을 수 있도록 유연하게 변경
  }, []);

  return React.useMemo(
    () => (
      <AnalyticsProviderContext.Provider value={{}}>
        {children}
      </AnalyticsProviderContext.Provider>
    ),
    [children]
  );
}
