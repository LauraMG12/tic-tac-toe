import { useState, useEffect } from 'react';

export const useIsSmallDevice = () => {
  const SMALL_DEVICE_THRESHOLD = 580;
  const [isSmallDevice, setIsSmallDevice] = useState(
    window.innerWidth < SMALL_DEVICE_THRESHOLD
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < SMALL_DEVICE_THRESHOLD);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallDevice;
};
