import IconWrapper from "../IconWrapper";

const LinkedInIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m0 0h24v24h-24z"
        fill="#fff"
        opacity="0"
        transform="matrix(-1 0 0 -1 24 24)"
      />
      <g>
        <path d="m20 22h-1.67a2 2 0 0 1 -2-2v-5.37a.92.92 0 0 0 -.69-.93.84.84 0 0 0 -.67.19.85.85 0 0 0 -.3.65v5.46a2 2 0 0 1 -2 2h-1.67a2 2 0 0 1 -2-2v-5.46a6.5 6.5 0 1 1 13 0v5.46a2 2 0 0 1 -2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9v5.41h1.67v-5.46a4.5 4.5 0 1 0 -9 0v5.46h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
        <path d="m6 22h-2a2 2 0 0 1 -2-2v-10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2zm-2-12v10h2v-10z" />
        <path d="m5 7a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z" />
      </g>
    </svg>
  );
};

export default IconWrapper(LinkedInIcon, {
  backgroundStyle: "bg-none",
  strokeOrFill: "fill-white-500",
});
