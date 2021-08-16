import {UnknownRecord} from '../../types/common';
import {gtag} from './initialize';

export function event(name: string, params?: UnknownRecord) {
  console.info(`✅GA: event ${name}`, params);
  gtag('event', name, params);
}
