import { Button, styled, useTheme } from "@mui/material";
import Theme from "../../themes/theme";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "Poppins",
  color: "#ffffff",
  padding: "10px 16px",
  minWidth: "0px",
  "&.MuiButton-sizeSmall": {
    height: "28px",
  },
  "&.MuiButton-sizeLarge": {
    height: "40px",
  },
  "&.MuiButton-contained": {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "none",
    color: "white",
    border: "none",

    "&:hover": {
      boxShadow: "none",
      border: "none",
    },
  },
  "&.MuiButton-outlined": {
    color: theme.palette.secondary.main,
    border: `solid ${theme.palette.secondary.main} 2px`,
  },
}));

export default StyledButton;
