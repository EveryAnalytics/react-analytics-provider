import styled from '@emotion/styled';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import {ChangeEventHandler, Dispatch, MouseEventHandler, SetStateAction, useState} from 'react';

type LoginModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal({open, setOpen}: LoginModalProps) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const analytics = useAnalyticsContext();

  const handelDimmedClick: MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (!target.className.includes('dimmed')) return;
    analytics.onClick('close_login_modal');
    setOpen(false);
  };

  const handelCloseBtnClick = () => {
    analytics.onClick('close_login_modal');
    setOpen(false);
  };

  const handleIdChange: ChangeEventHandler<HTMLInputElement> = e => {
    const target = e.target as HTMLInputElement;
    setId(target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = e => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  const handleLogin = () => {
    analytics.onSetUserId(id);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Dimmed onClick={handelDimmedClick} className="dimmed">
      <Modal>
        <ModalHeader>
          <ModalTitle>Login</ModalTitle>
          <CloseButton onClick={handelCloseBtnClick}>×</CloseButton>
        </ModalHeader>
        <ModalContent>
          <Input onChange={handleIdChange} value={id} placeholder="Id" autoFocus />
          <Input
            onChange={handlePasswordChange}
            value={password}
            placeholder="Password"
            type="password"
            maxLength={30}
          />
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </ModalContent>
      </Modal>
    </Dimmed>
  );
}

const Dimmed = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 24px 32px;
  border-bottom: 1px solid #f2f2f2;
`;

const ModalTitle = styled.h2`
  flex: 1;
  font-size: 2rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  font-size: 2.4rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  flex: 1;
`;

const Input = styled.input`
  width: 70%;
  margin-bottom: 16px;
  padding: 16px;
  font-size: 1.6rem;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: #f7f7f7;
`;

const LoginButton = styled.button`
  width: 70%;
  padding: 16px;
  border-radius: 3px;
  background-color: #0095f6;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
`;
