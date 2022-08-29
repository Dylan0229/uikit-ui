import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
        <g clip-path="url(#clip0_1169_4046)">
            <path d="M47.8676 6.86402L40.6236 41.022C40.0776 43.432 38.6516 44.032 36.6276 42.896L25.5916 34.764L20.2656 39.884C19.6776 40.476 19.1856 40.968 18.0496 40.968L18.8416 29.728L39.2956 11.248C40.1836 10.454 39.1016 10.014 37.9136 10.808L12.6276 26.728L1.74158 23.322C-0.626421 22.582 -0.668421 20.954 2.23358 19.818L44.8136 3.41402C46.7836 2.67402 48.5096 3.85402 47.8656 6.86402H47.8676Z" />
        </g>
        <defs>
            <clipPath id="clip0_1169_4046">
                <rect width="48" height="48" fill="white"/>
            </clipPath>
        </defs>
    </Svg>
);
};

export default Icon;
