import React from 'react';
import {Analytics} from '../mixin';

Analytics.preset({
  init: async () => {
    console.info('init completed');
  },
  event: (...args) => {
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
