import React from 'react';
import {Analytics} from '../mixin';

Analytics.init({
  preset: {
    googleAnalytics: {
      trackingId: '123',
      persistentValues: {userNo: 1},
    },
    amplitude: {
      apiKey: '456',
    },
  },
  onEvent: (...args) => {
    console.info('event occured! ' + args);
  },
});

const Sample = () => {
  return (
    <button
      onClick={() => {
        Analytics.event('storybook click');
      }}
    >
      click me
    </button>
  );
};

export default {
  title: 'Sample',
  component: Sample,
};

export const Default = () => <Sample />;
