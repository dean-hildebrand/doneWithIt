import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

// overriding default navigation colors
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
