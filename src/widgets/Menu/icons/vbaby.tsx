import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.75 3C19.1642 3 19.5 3.38376 19.5 3.85714V6.42857C19.5 6.90196 19.1642 7.28572 18.75 7.28572L3.75 7.28572C3.33579 7.28572 3 6.90196 3 6.42857L3 3.85714C3 3.38376 3.33579 3 3.75 3L18.75 3ZM18 4.71429L4.5 4.71429V5.57143L18 5.57143V4.71429Z" fill="" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 6.42857C3 5.95519 3.33579 5.57143 3.75 5.57143H20.25C20.6642 5.57143 21 5.95519 21 6.42857V20.1429C21 20.6162 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6162 3 20.1429L3 6.42857ZM12 8.5V19H18.375V8.5H12Z" fill="" />
      <path d="M17 13.2317C17 14.1785 16.2034 14.946 15.375 14.946C14.5466 14.946 13.5 14.1785 13.5 13.2317C13.5 12.2849 14.5466 11.5174 15.375 11.5174C16.2034 11.5174 17 12.2849 17 13.2317Z" fill="" />
    </Svg>
  );
};

export default Icon;
