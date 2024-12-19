import { Button, useTheme } from "@mui/material";
import React from "react";
import { stylesnew } from "./style";

function Buttonsty({ reminder, text }) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return <Button sx={styles.button(reminder)}>{text}</Button>;
}

export default Buttonsty;
