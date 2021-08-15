import {gtag} from './initialize';

export function click(name: string, params?: {[key: string]: string}) {
	const updatedParams = {action_type: 'click', ...params}
  console.info(`✅GA: click ${name}`, updatedParams);
  gtag('event', name, updatedParams);
}
