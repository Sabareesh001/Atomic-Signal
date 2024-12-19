import { Box, styled } from "@mui/material";

export const Searchbar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  height: "85%",
  width: "80%",
}));

export const Search = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  height: "40px",
  width: "310px",
  border: `1px solid ${theme.palette.secondary.search}`,
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",

  "&:hover": {
    borderColor: theme.palette.text.default,
  },
  "&:focus-within": {
    border: `2px solid ${theme.palette.success.main}`,
    height: "38px",
    width: "309px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "285px",
    "&:focus-within": {
      width: "283.5px",
    },
  },
}));

export const stylesnew = (theme) => ({
  searchicon: {
    fontSize: theme.typography.fontSize.large,
    marginLeft: "8px",
    marginRight: "8px",
    display: "flex",
    alignItems: "center",
    height: "100%",
    color: theme.palette.icon.secondary,
    justifyContent: "space-between",
  },
});
