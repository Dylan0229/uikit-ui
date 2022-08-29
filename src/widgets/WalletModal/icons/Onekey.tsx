import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <g clip-path="url(#clip0)">
        <g filter="url(#filter0_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M212.673 122.97H277.789V230.276H237.416V157.514H201.249L212.673 122.97Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M255.5 380.959C293.359 380.959 324.05 350.369 324.05 312.635C324.05 274.901 293.359 244.312 255.5 244.312C217.641 244.312 186.95 274.901 186.95 312.635C186.95 350.369 217.641 380.959 255.5 380.959ZM255.5 349.941C276.171 349.941 292.929 333.238 292.929 312.635C292.929 292.032 276.171 275.329 255.5 275.329C234.828 275.329 218.071 292.032 218.071 312.635C218.071 333.238 234.828 349.941 255.5 349.941Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_d)">
          <rect x="27" y="27" width="457" height="457" rx="161.294" fill="#00B812" />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M212.673 120.685H277.789V227.991H237.416V155.229H201.249L212.673 120.685Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M256.642 390.315C297.656 390.315 330.905 357.067 330.905 316.053C330.905 275.039 297.656 241.79 256.642 241.79C215.628 241.79 182.38 275.039 182.38 316.053C182.38 357.067 215.628 390.315 256.642 390.315ZM256.643 356.601C279.037 356.601 297.191 338.447 297.191 316.053C297.191 293.658 279.037 275.504 256.643 275.504C234.248 275.504 216.094 293.658 216.094 316.053C216.094 338.447 234.248 356.601 256.643 356.601Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="72.6999"
          y="13.2902"
          width="365.6"
          height="486.489"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4.57" />
          <feGaussianBlur stdDeviation="57.125" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter1_d"
          x="-9.56001"
          y="-0.420004"
          width="530.12"
          height="530.12"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="9.14" />
          <feGaussianBlur stdDeviation="18.28" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.465402 0 0 0 0 0.465402 0 0 0 0 0.465402 0 0 0 0.155967 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <clipPath id="clip0">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
