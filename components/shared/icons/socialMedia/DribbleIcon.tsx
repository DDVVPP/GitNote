import IconWrapper from "../IconWrapper";

const DribbleIcon = (props: any) => {
  return (
    <svg
      viewBox="0 0 1024 1068.42"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M512 21.333c282.77 0 512 229.23 512 512s-229.23 512-512 512-512-229.23-512-512 229.23-512 512-512zm0 934.957c233.592 0 422.957-189.364 422.957-422.957S745.593 110.376 512 110.376c-233.592 0-422.957 189.364-422.957 422.957.278 233.48 189.476 422.678 422.93 422.956h.026zm157.473 4.185c-16.59-141.23-49.334-269.886-96.764-391.183l3.668 10.655v-.267c-23.34-61.982-46.294-112.646-71.987-161.648l3.78 7.914v-.312c-57.983-113.348-125.278-211.05-203.448-298.858l1.23 1.408 66.784-59.08c81.668 91.82 153.113 195.65 210.77 307.734l3.914 8.37c23.214 43.534 47.547 97.234 68.767 152.477l3.536 10.473c46.23 116.906 80.823 252.847 97.593 394.253l.755 7.824zM97.948 534.357q-26.446 0-53.025-1.07l3.606-89.042c14.963.67 32.512 1.053 50.15 1.053 155.734 0 304.512-29.788 440.945-83.978l-8.08 2.83 1.47-.533c113.08-40.24 209.676-102.167 289.05-181.352l-.016.015 62.953 62.954c-88.426 88.22-196.023 157.264-315.996 200.342l-5.985 1.876C425.39 502.457 265.866 534.36 98.892 534.36h-.995.052zM244.602 904.11L164.107 866c85.622-177.897 248.237-307.027 443.42-345.074l3.935-.64h.4c41.822-7.858 89.933-12.353 139.094-12.353 85.17 0 167.188 13.492 244.035 38.454l-5.583-1.57-26.98 84.86c-63.208-20.756-135.956-32.725-211.5-32.725-43.5 0-86.074 3.97-127.38 11.565l4.3-.656C457.384 641.33 318.19 751.875 246 900.916l-1.397 3.194z" />
    </svg>
  );
};

export default IconWrapper(DribbleIcon, {
  backgroundStyle: "bg-none",
  strokeOrFill: "fill-white-500",
});
