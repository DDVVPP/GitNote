import { TechIconType } from "@/types";

const VSCodeIcon = ({ size = 6, background = true }: TechIconType) => {
  const backgroundStyle = background && "bg-black-700 rounded border-none";

  return (
    <div
      className={`${backgroundStyle} flex p-1`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m29.01 5.03-5.766-2.776a1.742 1.742 0 0 0 -1.989.338l-18.875 17.208a1.166 1.166 0 0 0 -.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066l22.735-17.24a1.158 1.158 0 0 1 1.858.922v-.067a1.748 1.748 0 0 0 -.99-1.575z"
          fill="#0065a9"
        />
        <path
          d="m29.01 26.97-5.766 2.777a1.745 1.745 0 0 1 -1.989-.338l-18.875-17.209a1.166 1.166 0 0 1 -.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4a1.165 1.165 0 0 1 1.492-.066l22.732 17.24a1.158 1.158 0 0 0 1.858-.922v.072a1.749 1.749 0 0 1 -.99 1.57z"
          fill="#007acc"
        />
        <path
          d="m23.244 29.747a1.745 1.745 0 0 1 -1.989-.338 1.025 1.025 0 0 0 1.745-.725v-25.368a1.024 1.024 0 0 0 -1.749-.724 1.744 1.744 0 0 1 1.989-.339l5.765 2.772a1.748 1.748 0 0 1 .995 1.575v18.8a1.748 1.748 0 0 1 -.991 1.576z"
          fill="#1f9cf0"
        />
      </svg>
    </div>
  );
};

export default VSCodeIcon;
