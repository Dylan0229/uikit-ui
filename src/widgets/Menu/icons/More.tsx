import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M7 11.9995C7 13.6568 5.65751 15 4 15C2.34346 15 1 13.6568 1 11.9995C1 10.3432 2.34346 9 4 9C5.65751 9 7 10.3432 7 11.9995Z"
        fill=""
      />
      <path
        d="M15 11.9995C15 13.6568 13.6575 15 12 15C10.3435 15 9 13.6568 9 11.9995C9 10.3432 10.3435 9 12 9C13.6575 9 15 10.3432 15 11.9995Z"
        fill=""
      />
      <path
        d="M23 11.9995C23 13.6568 21.6575 15 20 15C18.3435 15 17 13.6568 17 11.9995C17 10.3432 18.3435 9 20 9C21.6575 9 23 10.3432 23 11.9995Z"
        fill=""
      />
    </Svg>
  );
};

export default Icon;
