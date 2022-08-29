import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.5598 5.63047L13.6802 6.52178L13.8884 7.78189C13.9242 7.99929 13.8399 8.21513 13.6675 8.34401C13.4967 8.47445 13.2736 8.49075 13.0856 8.38594L12 7.79276L10.9122 8.38749C10.8316 8.43175 10.7436 8.45426 10.6563 8.45426C10.5421 8.45426 10.4295 8.417 10.3325 8.34479C10.1609 8.21513 10.0766 7.99929 10.1124 7.78189L10.3198 6.52178L9.44015 5.63047C9.28794 5.47674 9.23497 5.25003 9.30063 5.0404C9.36703 4.83077 9.53863 4.6817 9.74828 4.65064L10.9614 4.46663L11.5053 3.31988C11.6001 3.12267 11.7896 3 12 3H12.0015C12.2126 3.00078 12.4021 3.12345 12.4954 3.32066L13.0393 4.46663L14.2547 4.65142C14.4621 4.6817 14.6337 4.83077 14.6994 5.0404C14.7658 5.25003 14.7128 5.47674 14.5598 5.63047Z"
        fill=""
      />
      <path
        d="M2.90918 17.8181C2.90918 15.609 4.70004 13.8181 6.90918 13.8181H17.091C19.3001 13.8181 21.091 15.609 21.091 17.8181V18.3636H2.90918V17.8181Z"
        fill=""
      />
      <rect x="2" y="19.2727" width="20" height="1.81818" rx="0.909091" fill="" />
      <path
        d="M5.63623 12.9091C5.63623 10.9008 7.26429 9.27271 9.27259 9.27271H14.7271C16.7354 9.27271 18.3635 10.9008 18.3635 12.9091H5.63623Z"
        fill=""
      />
    </Svg>
  );
};

export default Icon;
