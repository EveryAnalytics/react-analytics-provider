import React from 'react';
import { useAnalyticsContext } from '../../contexts/useAnalyticsContext';

export interface AnalyticsPageViewProps {
	children:React.ReactNode,
	params:  Record<string, unknown>
}

export const AnalyticsPageView = ({children, params}: AnalyticsPageViewProps) => {
	const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onPageView(params);
  }, [analytics]);
	
	return (
		<>
			{children}
		</>
	);
};