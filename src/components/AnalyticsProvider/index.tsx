import * as React from "react";

import AnalyticsProviderContext from "../../contexts/AnalyticsProviderContext";

interface Props {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: Props) {
  React.useEffect(() => {
    console.log("GA셋업");
  }, []);

  return React.useMemo(
    () => (
      <AnalyticsProviderContext.Provider value={{}}>
        <h1>hi</h1>
        {children}
      </AnalyticsProviderContext.Provider>
    ),
    [children]
  );
}
