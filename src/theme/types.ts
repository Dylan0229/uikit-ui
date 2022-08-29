export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  farmHeader: string;
  bubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  dropdown: string;
  cardBorder: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  backgroundAlt2: string;
  backgroundAlt3: string;
  backgroundAlt4: string;
  textSubtle5: string;
  textSubtle6: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  textSubtle2: string;
  textSubtle3: string;
  textSubtle4: string;
  borderColor: string;
  borderColor2: string;
  disabled: string;
  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;

  // Step
  stepDisabled: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
