import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { lightTheme } from "./themeType";

const Theme = ({ children }) => {
  let theme = createTheme(lightTheme);

  theme = responsiveFontSizes(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
