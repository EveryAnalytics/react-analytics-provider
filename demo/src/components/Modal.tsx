import React from 'react';
import {AnalyticsModalView} from '@every-analytics/react-analytics-provider';

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({children, setIsOpen}: ModalProps) => {
  const modalName = `modal${window.location.pathname}${window.location.search}`;

  return (
    <AnalyticsModalView name={modalName} params={{message: true}}>
      <button onClick={() => setIsOpen(false)}>x</button>
      {children}
    </AnalyticsModalView>
  );
};

export default Modal;
