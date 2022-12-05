// import {AnalyticsClient} from '../interfaces';
import {googleAnalyticsHelper, amplitudeHelper} from '../utils';
import {UnknownRecord} from '../types';
import type {AmplitudeClient, Config} from 'amplitude-js';

export type GoogleAnalyticsInitParams = {
  trackingId: string;
  persistentValues?: Record<string, unknown>;
};

export type AmplitudeInitParams = {
  apiKey: string;
  userId?: string;
  config?: Config;
  callback?: (client: AmplitudeClient) => void;
};

export type InitParams = {
  googleAnalytics?: GoogleAnalyticsInitParams;
  amplitude?: AmplitudeInitParams;
};

export interface AnalyticsPreset {
  preset?: InitParams;
  onInit?: () => void | Promise<void>;

  onEvent?: (name: string, data?: UnknownRecord, callback?: (...args: unknown[]) => void) => void;

  onPageView?: (params: UnknownRecord) => void;

  setUserId?: (id: string | number) => void;
  setUserProperties?: (data: UnknownRecord) => void;
}

export class AnalyticsClient {
  init: () => void;
  event: (name: string, data?: UnknownRecord) => void;
  pageView: (params?: UnknownRecord) => void;

  setUserId?: (id: string | number) => void;
  setUserProperties?: (data: UnknownRecord) => void;
}

export class Analytics {
  static googleAnalytics = googleAnalyticsHelper;
  static amplitude = amplitudeHelper;

  static isInitialized = false;
  static client: AnalyticsClient;

  static clear() {
    this.isInitialized = false;
    this.client = null;
  }

  static async preset(params: AnalyticsPreset) {
    this.clear();

    const {preset} = params;
    const googleAnalytics = preset?.googleAnalytics;
    const amplitude = preset?.amplitude;

    this.client = Object.freeze({
      init: () => {
        if (googleAnalytics) {
          this.googleAnalytics.initialize(googleAnalytics.trackingId, googleAnalytics.persistentValues);
        }
        if (amplitude) {
          this.amplitude.initialize(amplitude.apiKey, amplitude.userId, amplitude.config, amplitude.callback);
        }
      },
      event: (name: string, data?: UnknownRecord) => {
        if (googleAnalytics) {
          this.googleAnalytics.event(name, data);
        }
        if (amplitude) {
          this.amplitude.logEvent(name, data);
        }
      },
      pageView: (params?: UnknownRecord) => {
        const pathname = location.pathname + location.search;
        if (googleAnalytics) {
          this.googleAnalytics.pageView(googleAnalytics.trackingId, pathname);
        }
        if (amplitude) {
          this.amplitude.logEvent('pageView', {pathname, params});
        }
      },
      /** Only supported in Amplitude */
      setUserId: (userId: string) => {
        if (amplitude) {
          this.amplitude.setUserId(userId);
        }
      },
    });

    await this.client.init();
    this.isInitialized = true;
  }

  static getClient(): AnalyticsClient | void {
    if (!this.client) {
      console.warn('preset이 실행되지 않았습니다.');
      return;
    }

    return this.client;
  }

  static event(name: string, data?: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.event(name, data);
  }

  static pageView(params?: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }

    client.pageView?.(params);
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
