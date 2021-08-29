import {UnknownRecord} from '../../types/common';

import {gtag} from './initialize';

/** Allows you to set values that persist across all the subsequent gtag() calls on the page.
 * {@link https://developers.google.com/gtagjs/reference/api#set API Reference}
 * @param params key-value pairs that are to persist across gtag() calls. */
export function set(...args: [string, UnknownRecord] | [UnknownRecord]) {
  const params = args.pop();
  const name = args.pop();
  if (name === undefined) {
    console.info(`✅GA: set`, params);
    gtag('set', params);
  } else {
    console.info(`✅GA: set ${name}`, params);
    gtag('set', name, params);
  }
}
