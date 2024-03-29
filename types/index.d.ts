export type TechStackType = {
  icon: ({ size: number }) => JSX.Element;
  name: string;
  uiName: string;
  link?: string;
};

export type SocialMediaIconType = {
  size?: number;
  className?: string;
};
