import { useEffect, useState } from 'react';

function getWindowDimensions(window) {
  if (!window) {
    return { width: 1200, height: 900 };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize(getWindowDimensions(window));
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
