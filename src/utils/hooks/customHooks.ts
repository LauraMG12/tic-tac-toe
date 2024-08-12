import { useState, useEffect } from 'react';

export const useIsSmallDevice = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(
    window.innerWidth < 580
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 580);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallDevice;
};
