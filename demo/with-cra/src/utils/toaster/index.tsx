import React from 'react';
import toast from 'react-hot-toast';

const showToast = (children: React.ReactNode) => {
  toast(() => <div style={{display: 'flex', flexDirection: 'column'}}>{children}</div>);
};

export const event = (name: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: Event</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const click = (name: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: Click</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const pageView = (path: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: PageView</div>
      <div>path: {path}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const timing = (name: string, value: number) => {
  showToast(
    <>
      <div>GA: Timing</div>
      <div>name: {name}</div>
      <div>value: {value}</div>
    </>,
  );
};

export const toaster = {
  event,
  click,
  pageView,
  timing,
};
