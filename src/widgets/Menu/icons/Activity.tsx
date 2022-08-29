import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.67188 3.83984C3.67188 2.04492 5.12695 0.589844 6.92188 0.589844C7.92709 0.589844 8.82572 1.04621 9.42188 1.76306C10.018 1.04621 10.9167 0.589844 11.9219 0.589844C13.7168 0.589844 15.1719 2.04492 15.1719 3.83984C15.1719 4.59411 14.9149 5.28836 14.4838 5.83984H15.4219C16.8026 5.83984 17.9219 6.95913 17.9219 8.33984V9.58984C17.9219 10.0041 17.5861 10.3398 17.1719 10.3398H10.4719C10.3062 10.3398 10.1719 10.2055 10.1719 10.0398V6.57893C9.88893 6.39778 9.63591 6.174 9.42188 5.91663C9.20784 6.17399 8.95482 6.39779 8.67188 6.57893V10.0398C8.67188 10.2055 8.53756 10.3398 8.37187 10.3398H1.67188C1.25766 10.3398 0.921875 10.0041 0.921875 9.58984V8.33984C0.921875 6.95913 2.04116 5.83984 3.42188 5.83984H4.35995C3.92882 5.28836 3.67188 4.59411 3.67188 3.83984ZM8.67188 3.83984C8.67188 2.87335 7.88837 2.08984 6.92188 2.08984C5.95538 2.08984 5.17188 2.87335 5.17188 3.83984C5.17188 4.80634 5.95538 5.58984 6.92188 5.58984C7.88837 5.58984 8.67188 4.80634 8.67188 3.83984ZM10.1719 3.83984C10.1719 4.80634 10.9554 5.58984 11.9219 5.58984C12.8884 5.58984 13.6719 4.80634 13.6719 3.83984C13.6719 2.87335 12.8884 2.08984 11.9219 2.08984C10.9554 2.08984 10.1719 2.87335 10.1719 3.83984Z"
        fill=""
      />
      <path
        d="M8.67188 11.9899C8.67188 11.8242 8.53756 11.6898 8.37187 11.6898H3.07089C2.66524 11.6898 2.3186 11.9821 2.25009 12.382C2.02804 13.6778 2.02804 15.0019 2.25009 16.2977L2.4744 17.6068C2.62543 18.4882 3.34128 19.1634 4.23 19.2627L5.29512 19.3817C6.31603 19.4958 7.34048 19.5675 8.36585 19.5966C8.53384 19.6014 8.67188 19.466 8.67188 19.2979L8.67188 11.9899Z"
        fill=""
      />
      <path
        d="M10.4779 19.5966C10.3099 19.6014 10.1719 19.466 10.1719 19.2979L10.1719 11.9899C10.1719 11.8242 10.3062 11.6898 10.4719 11.6898H15.7729C16.1785 11.6898 16.5251 11.9821 16.5937 12.382C16.8157 13.6778 16.8157 15.0019 16.5937 16.2977L16.3693 17.6068C16.2183 18.4882 15.5025 19.1634 14.6137 19.2627L13.5486 19.3817C12.5277 19.4958 11.5033 19.5675 10.4779 19.5966Z"
        fill=""
      />
    </Svg>
  );
};

export default Icon;
