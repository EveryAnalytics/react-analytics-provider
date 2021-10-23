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
    this.init();
  }

  static getClient(): IAnalyticsClient | void {
    if (!this.client) {
      console.warn('preset이 실행되지 않았습니다.');
      return;
    }

    return this.client;
  }

  static async init() {
    const client = this.getClient();
    if (!client || this.isInitialized) {
      return;
    }
    await client.init();
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

  static pageView(pathname: string) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.pageView?.(pathname);
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
