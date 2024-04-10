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

export type CreateTypeListItemType = {
  icon: (props: any) => JSX.Element;
  name: CreateType;
  uiName: string;
  badgeColor: "blue" | "orange" | "red" | "green" | "gray" | "purple";
  color: string;
};

export type SearchParams = {
  page: string;
  type: CreateType | "all";
  term: string;
  tag: string;
};

export type PostDate = {
  date: string;
  count: number;
};
