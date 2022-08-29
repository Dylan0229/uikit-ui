import React from "react";
import styled from "styled-components";
import BabyIcon from "../Svg/Icons/Baby";
import BackgroundImage from "./BackgroundImage";
import { BackgroundImageProps } from "./types";

const StyledProfileAvatar = styled(BackgroundImage)`
  border-radius: 50%;
`;

const StyledBunnyPlaceholder = styled(BabyIcon)`
  height: 100%;
  width: 100%;
`;

const ProfileAvatar: React.FC<BackgroundImageProps> = (props) => (
  <StyledProfileAvatar loadingPlaceholder={<StyledBunnyPlaceholder />} {...props} />
);

export default ProfileAvatar;
