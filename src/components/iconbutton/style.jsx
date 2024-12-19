import { Button, styled } from "@mui/material";

export const Filter = styled(Button)(({ theme }) => ({
  height: "40px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.success.main,
  borderRadius: "5px",
  color: theme.palette.secondary.textColor,
  fontSize: theme.typography.fontSize.large,
  alignItems: "center",
  cursor: "pointer",
  minWidth: "45px", //it
}));
