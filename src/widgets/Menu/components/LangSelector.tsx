import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
// import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
import { Language } from "../types";
import MenuButton from "./MenuButton";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}
const StyleButton = styled(Button)`
  padding: 0px;
`;
const StyleLanguageIcon = styled(LanguageIcon)`
  margin-right: 0px;
`;

const LangSelector: React.FC<Props> = ({ langs, setLang }) => (
  <Dropdown
    position="bottom"
    target={
      <StyleButton variant="text" startIcon={<StyleLanguageIcon color="textSubtle" width="24px" marginRight="1px" />}>
        {/* <Text color="textSubtle">{currentLang?.toUpperCase()}</Text> */}
      </StyleButton>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
