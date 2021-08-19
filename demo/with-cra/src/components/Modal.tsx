import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({children, setIsOpen}: ModalProps) => {
  return (
    <>
      <button onClick={() => setIsOpen(false)}>x</button>
      {children}
    </>
  );
};

export default Modal;
