import {UnknownRecord} from '@every-analytics/react-analytics-provider';
import React from 'react';
import toast from 'react-hot-toast';

const showToast = (children: React.ReactNode) => {
  toast(() => <div style={{display: 'flex', flexDirection: 'column'}}>{children}</div>);
};

export const showEventToast = (name: string, params?: UnknownRecord) => {
  showToast(
    <>
      <div>✅GA: Event</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const showClickToast = (name: string, params?: UnknownRecord) => {
  showToast(
    <>
      <div>🖱️GA: Click</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const showPageViewToast = (path: string, params?: UnknownRecord) => {
  showToast(
    <>
      <div>📃GA: PageView</div>
      <div>path: {path}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const toaster = {
  showEventToast,
  showClickToast,
  showPageViewToast,
};
