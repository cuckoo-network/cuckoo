import { useEffect, useState } from "react";

export default function useMobileDevice() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile((prevState) => {
        if (prevState !== isMobileDevice) {
          return isMobileDevice;
        }
        return prevState;
      });
    };

    checkMobile(); // Check on mount

    // Throttle function to limit the rate at which `checkMobile` is invoked
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150); // Adjust the delay as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
}
