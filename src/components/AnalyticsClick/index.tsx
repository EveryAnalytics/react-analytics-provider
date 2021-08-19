import React, {FC, MutableRefObject, useCallback, useEffect, useRef} from 'react';
import {useAnalyticsContext} from '../../contexts';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsClickProps {
  children: React.ReactNode;
  name: string;
  params?: UnknownRecord;
}

const useClickInside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: (name: string, params?: UnknownRecord) => void,
  name: string,
  params?: UnknownRecord,
) => {
  // if (!ref) {
  //   return;
  // }

  const handleClick = useCallback(e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback(name, params);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export const AnalyticsClick: FC<AnalyticsClickProps> = props => {
  const {children, name, params} = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const {onClick} = useAnalyticsContext();

  useClickInside(ref, onClick, name, params);

  return (
    <div ref={ref}>
      {/* button */}
      {children}
    </div>
  );
};

// children 받기 => button
// button wrapper의 ref 객체 접근
// 버튼이 클릭되면 버블링 체크하여 ref에서 콜백함수(이벤트 호출) 실행
