import {gtag} from './initialize';

interface TimingParams {
  name: string;
  value: number;
  event_category?: string;
  event_label?: string;
}

export function timing(params: TimingParams): void {
  console.info(`✅GA: timing`, params);
  gtag('event', 'timing_complete', params);
}
