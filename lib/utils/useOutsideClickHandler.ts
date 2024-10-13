import { useEffect, RefObject } from "react";

const useOutsideClickHandler = (
  ref: RefObject<HTMLDivElement>,
  onClick: () => void
) => {
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Element)) {
        onClick();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [onClick, ref]);
};

export default useOutsideClickHandler;
