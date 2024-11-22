import { useEffect } from "react";

const useInputBlurHandler = (id: string) => {
  useEffect(() => {
    const onEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && document.activeElement?.id === id) {
        event.preventDefault();
        (document.activeElement as HTMLElement).blur();
      }
    };

    window.addEventListener("keydown", onEnter);
    return () => window.removeEventListener("keydown", onEnter);
  }, [id]);
};

export default useInputBlurHandler;
