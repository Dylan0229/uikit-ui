import React from "react";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../../../components/Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { DidEntryIcon } = Icons;

interface Props {
  entryDid: () => void;
}

const DidEntryBtn: React.FC<Props> = ({entryDid }) => {
  return (
    <Button variant="text" onClick={entryDid}>
    {/* alignItems center is a Safari fix */}
    <Flex alignItems="center">
      <DidEntryIcon color="textSubtle" width="24px" />
    </Flex>
  </Button>
  )
}

export default DidEntryBtn;
