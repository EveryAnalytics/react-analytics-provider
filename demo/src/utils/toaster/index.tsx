import React from 'react';
import toast from 'react-hot-toast';

const showToast = (children: React.ReactNode) => {
  toast(() => <div style={{display: 'flex', flexDirection: 'column'}}>{children}</div>);
};

export const showEventToast = (name: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: Event</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const showClickToast = (name: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: Click</div>
      <div>name: {name}</div>
      <div>params: {JSON.stringify(params)}</div>
    </>,
  );
};

export const showPageViewToast = (path: string, params?: unknown) => {
  showToast(
    <>
      <div>GA: PageView</div>
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
