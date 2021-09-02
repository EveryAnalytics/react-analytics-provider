import {RefObject, useEffect, useRef, useState} from 'react';

export interface useOnScreenProps {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean; // only trigger the observer once.
  delay?: number; // the delay in milliseconds between notifications from this observer for a given target.
}

export type useOnScreenReturn<T> = [RefObject<T>, boolean];

export function useOnScreen<T extends Element>(props?: useOnScreenProps): useOnScreenReturn<T> {
  const {rootMargin = '0px', threshold = 0.5, delay = 500, triggerOnce = true} = props ?? {};

  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const ref = useRef<T>(null);
  const isFrozen: boolean = isIntersecting && triggerOnce;

  useEffect(() => {
    if (isFrozen) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => {
          setIntersecting(entry.isIntersecting);
        }, delay);
      },
      {
        rootMargin,
        threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, isFrozen, rootMargin, threshold, delay]);
  return [ref, isIntersecting];
}
