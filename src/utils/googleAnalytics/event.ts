import { gtag } from "./initialize";

export function logEvent(name: string, params?: { [key: string]: string }) {
  console.info(`✅GA: event ${name}`, params);
  gtag("event", name, params);
}
