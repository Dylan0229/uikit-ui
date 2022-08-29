import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";
import { ReactElement } from "react";

export interface Language {
  code: string;
  language: string;
  locale: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  hover: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  status?: LinkStatus;
  disabled?: boolean;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  timeStamp?: any;
  fixedTime?: any;
  status?: LinkStatus;
  disabled?: boolean;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  links: Array<MenuEntry>;
  timeStamp?: any;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  banner?: ReactElement
  openActivity:() => void;
  entryDid:()=>void;
  profile?: Profile;
  logout: () => void;
}
