import {gtag} from './initialize';

export function event(name: string, params?: {[key: string]: string}) {
  console.info(`✅GA: event ${name}`, params);
  gtag('event', name, params);
}
