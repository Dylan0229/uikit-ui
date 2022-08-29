import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  background: lightColors.success,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  background: darkColors.primary,
};
