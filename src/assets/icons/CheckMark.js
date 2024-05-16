import * as React from "react";
const SvgCheckMark = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    overflow="hidden"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#B4E5A2"
      fillRule="evenodd"
      stroke="#042433"
      strokeMiterlimit={8}
      strokeWidth={6.875}
      d="M4.5 98.669C4.5 48.87 44.87 8.5 94.67 8.5h595.66c49.8 0 90.17 40.37 90.17 90.169V459.33c0 49.8-40.37 90.17-90.17 90.17H94.67c-49.8 0-90.17-40.37-90.17-90.17Z"
    />
    <path
      fill="#E8E8E8"
      d="m104.24 222.74 287.75 213.42-36.3 48.95L67.93 271.69Z"
    />
    <path
      fill="#E8E8E8"
      fillRule="evenodd"
      d="M316.03 459.54 622.99 85.1l-24.94-20.446 90.77-8.988 8.99 90.774-24.94-20.449L365.91 500.43Z"
    />
  </svg>
);
export default SvgCheckMark;
