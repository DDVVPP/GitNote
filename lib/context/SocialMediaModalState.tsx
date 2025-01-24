"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type SocialMediaState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
};

const SocialMediaModalStateContext = createContext<SocialMediaState>({
  isOpen: false,
  setIsOpen: () => {},
  onClose: () => {},
});

export const SocialMediaModalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <SocialMediaModalStateContext.Provider
      value={{ isOpen, setIsOpen, onClose }}
    >
      {children}
    </SocialMediaModalStateContext.Provider>
  );
};

export const useSocialMediaModalStateContext = () => {
  return useContext(SocialMediaModalStateContext);
};
