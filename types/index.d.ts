// contains app's global type declarations

export type TechIconType = {
  size?: number;
  background?: boolean;
};

export type TechStackType = {
  icon: ({ size, background }: TechIconType) => JSX.Element;
  name: string;
  uiName: string;
  link?: string;
};
