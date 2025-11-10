import { useEffect, useState } from "react";
import CommonConstant from "../constants/common.constant";
import IWindowSize from "../interafaces/IWindowSize.interface";

/**
 * Utility function to debounce another function.
 *
 * @param    {T}          func    The function to debounce.
 * @param    {number}     delay   The delay in milliseconds.
 * @returns  {Function}           A debounced version of the function.
 */
const debounce = <T extends (...args: any[]) => any>(
  func: T, 
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function(this: any, ...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, delay);
  } as T; 
};


/**
 * Listens whenever there are changes on the window size.
 *
 * @returns  {IWindowSize | undefined}   The DOM window size.
 */
export default function useWindowSize(): IWindowSize {
  const isClient = "object" ===  typeof window;

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });
  
  useEffect(() => {
    if (!isClient) {
      return;
    }

    function calculateSize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const debouncedHandleResize = debounce(calculateSize, CommonConstant.EVENT_LISTENER.DEBOUNCE_DELAY_MS);

    window.addEventListener(CommonConstant.EVENT_LISTENER.RESIZE, debouncedHandleResize);

    return () => {
      window.removeEventListener(CommonConstant.EVENT_LISTENER.RESIZE, debouncedHandleResize);
    };
  }, [isClient]);

  return windowSize;
}
