import { Button, styled } from "@mui/material";

export const stylesnew = (theme) => ({
  mt: {
    marginTop: "7px",
  },
  mtt: {
    marginTop: "14px",
  },
  active: {
    border: `1px solid ${theme.palette.success.main}`,
    backgroundColor: theme.palette.secondary.outlinedHover,
  },
});

export const CatButton = styled(Button)(({ theme }) => ({
  fontSize: theme.typography.fontSize.verySmall,
  border: `1px solid ${theme.palette.secondary.disabledOutline}`,
  color: theme.palette.text.default,
  marginRight: "8px",
  marginTop: "8px",
}));
