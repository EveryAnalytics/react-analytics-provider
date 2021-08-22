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
  const handleClick = useCallback(
    e => {
      if (ref.current && ref.current.contains(e.target)) {
        callback(name, params);
      }
    },
    [ref, name, params, callback],
  );

  useEffect(() => {
    const rootNode = document.getElementById('root');

    rootNode?.addEventListener('click', handleClick);
    return () => {
      rootNode?.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export const AnalyticsClick: FC = ({children, name, params}: AnalyticsClickProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {onClick} = useAnalyticsContext();

  useClickInside(ref, onClick, name, params);

  return <div ref={ref}>{children}</div>;
};
