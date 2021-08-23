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

export const pageView = (name: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: PageView</div>
      <div>path: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const impression = (name: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: Impression</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const toaster = {
  event,
  click,
  pageView,
  impression,
};
