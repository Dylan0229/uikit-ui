import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../../../components/Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { NoticeIcon } = Icons;

interface Props {
  isOpen: boolean;
  openActivity: (isDark: boolean) => void;
}

const ActivityBtn: React.FC<Props> = ({isOpen, openActivity }) => {
  const { isDark } = useTheme();
  return (
    <Button variant="text" onClick={() => openActivity(!isOpen)}>
    {/* alignItems center is a Safari fix */}
    <Flex alignItems="center">
      <NoticeIcon color={isDark ? '#E89D39' : 'textSubtle'} width="24px" />
    </Flex>
  </Button>
  )
}

export default ActivityBtn;
