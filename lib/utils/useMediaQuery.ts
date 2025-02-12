import { useEffect } from "react";

const useMediaQuery = (setIsMobile: any) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 580px)");

    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [setIsMobile]);
};

export default useMediaQuery;
