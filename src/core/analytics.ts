import {IAnalyticsClient} from '../interfaces';
import {googleAnalyticsHelper, amplitudeHelper} from '../utils';
import {UnknownRecord} from '../types';

export class Analytics {
  static googleAnalytics = googleAnalyticsHelper;
  static amplitude = amplitudeHelper;

  static isInitialized = false;
  static client: IAnalyticsClient;

  static clear() {
    this.isInitialized = false;
    this.client = null;
  }

  static preset(client: IAnalyticsClient) {
    this.clear();
    this.client = Object.freeze(client);
  }

  static getClient(): IAnalyticsClient | void {
    if (!this.client) {
      console.warn('preset이 실행되지 않았습니다.');
      return;
    }

    this.init();
    return this.client;
  }

  static init() {
    const client = this.getClient();
    if (!client || this.isInitialized) {
      return;
    }
    client.init();
    this.isInitialized = true;
  }

  static event(name: string, data?: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.event(name, data);
  }

  static click(eventName: string, data?: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.click?.(eventName, data);
  }

  static setUserId(id: string | number) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.setUserId?.(id);
  }

  static setUserProperties(data: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.setUserProperties?.(data);
  }
}
