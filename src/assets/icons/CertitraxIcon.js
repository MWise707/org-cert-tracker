import * as React from "react";
const SvgCertitraxIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="certitrax-icon_svg__Layer_1"
    data-name="Layer 1"
    viewBox="0 0 53 62.1"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="certitrax-icon_svg__linear-gradient"
        x1={33}
        x2={33.3}
        y1={-9.9}
        y2={-9.9}
        gradientTransform="matrix(1 0 0 -1 -13.4 21.2)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#231f20" />
      </linearGradient>
      <style>
        {
          ".certitrax-icon_svg__cls-2{stroke-miterlimit:10;fill:none;stroke:#f2f2f2;stroke-width:4px}"
        }
      </style>
    </defs>
    <path
      d="M4.6 1.1h45.1c1.3 0 2.4 1.1 2.4 2.4v54.1c0 1.9-1.6 3.5-3.5 3.5H4.7c-2.1 0-3.7-1.7-3.7-3.7V4.7c0-2 1.6-3.6 3.6-3.6Z"
      style={{
        fill: "#93278f",
        stroke: "red",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M27.1 46.1 46 23.2M15.2 33.5l14.2 12.9"
      className="certitrax-icon_svg__cls-2"
    />
    <path
      d="M46.7 16.5c-.4.7-1.1 1.2-2 1.8s-2.1.9-3.4 1.1c-.2-1-.7-2.1-1.2-3.2s-1.4-2.1-2.4-3a14 14 0 0 0-4-2.3c-1.6-.6-3.5-.9-5.9-.9s-4.1.4-6.2 1.1-3.9 1.8-5.6 3.4-3 3.6-4.1 6.1-1.6 5.5-1.6 9 .5 6.6 1.6 9.3 2.6 5 4.4 6.8c1.9 1.8 4 3.2 6.5 4.2 2.5.9 5.1 1.4 8 1.4s6.1-.5 8.4-1.5 4.2-2.3 5.8-3.8c.3 0 .6.3 1 .5.4.3.6.5.7.8-.4.6-1 1.4-1.9 2.3s-2.1 1.8-3.6 2.6-3.4 1.6-5.6 2.2-4.9.9-8 .9-6-.5-8.9-1.5-5.4-2.4-7.6-4.4-4-4.4-5.3-7.4-2-6.4-2-10.3.7-6.7 2.1-9.8c1.4-3 3.4-5.7 5.8-7.9s5.3-4 8.5-5.3 6.6-1.9 10.3-1.9 5.5.4 7.5 1.1 3.7 1.6 4.9 2.7 2.2 2.1 2.7 3.2c.6 1.1.8 2 .8 2.7Z"
      style={{
        strokeWidth: 0,
        fill: "url(#certitrax-icon_svg__linear-gradient)",
      }}
    />
    <path
      d="M46.7 16.5c-.4.7-1.1 1.2-2 1.8s-2.1.9-3.4 1.1c-.2-1-.7-2.1-1.2-3.2s-1.4-2.1-2.4-3a14 14 0 0 0-4-2.3c-1.6-.6-3.5-.9-5.9-.9s-4.1.4-6.2 1.1-3.9 1.8-5.6 3.4-3 3.6-4.1 6.1-1.6 5.5-1.6 9 .5 6.6 1.6 9.3 2.6 5 4.4 6.8c1.9 1.8 4 3.2 6.5 4.2 2.5.9 5.1 1.4 8 1.4s6.1-.5 8.4-1.5 4.2-2.3 5.8-3.8c.3 0 .6.3 1 .5.4.3.6.5.7.8-.4.6-1 1.4-1.9 2.3s-2.1 1.8-3.6 2.6-3.4 1.6-5.6 2.2-4.9.9-8 .9-6-.5-8.9-1.5-5.4-2.4-7.6-4.4-4-4.4-5.3-7.4-2-6.4-2-10.3.7-6.7 2.1-9.8c1.4-3 3.4-5.7 5.8-7.9s5.3-4 8.5-5.3 6.6-1.9 10.3-1.9 5.5.4 7.5 1.1 3.7 1.6 4.9 2.7 2.2 2.1 2.7 3.2c.6 1.1.8 2 .8 2.7Z"
      style={{
        fill: "#ffd230",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default SvgCertitraxIcon;
