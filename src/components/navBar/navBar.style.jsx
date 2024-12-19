import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const Sidebar = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "72px",
  width: "100vw ",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.navbgcolor,
  [theme.breakpoints.up("sm")]: {
    width: "72px",
    height: "100vh ",
    flexDirection: "column",
  },
}));
export const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("xs")]: { flexDirection: "row", display: "none" },
  [theme.breakpoints.up("sm")]: { flexDirection: "column", display: "block" },
}));

export const SidebarHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "45px",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "none",
  [theme.breakpoints.up("sm")]: {
    paddingBottom: "15px",
    marginTop: "20px",
    borderBottom: "1px solid #ccc",
  },
}));

export const SidebarIcon = styled(Typography)(({ theme }) => ({
  width: "25px",
  height: "25px",
  cursor: "pointer",
}));

export const LogoImage = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));
export const WebName = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "inline",
    color: theme.palette.background.primary,
    padding: "15px 8px",
    fontSize: theme.typography.fontSize.medium,
  },
}));
export const Version = styled(Typography)(({ theme }) => ({
  marginTop: "5px",
  fontSize: theme.typography.fontSize.verySmall,
  color: "#ebebeb",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const SidebarMenu = styled(Box)(({ theme }) => ({
  height: "10vh",
  [theme.breakpoints.up("xs")]: { height: "10vh", flexDirection: "row" },
  [theme.breakpoints.up("sm")]: { height: "100vh", flexDirection: "column" },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  addingBottom: "15px",
}));
export const MenuIcon = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "inline",
  },
}));

export const MobileMenu = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "71px",
  left: "0",
  width: "100%",
  backgroundColor: theme.palette.background.navbgcolor,
  display: "flex",
  flexDirection: "column",
  padding: "15px 20px",
  zIndex: 10,
}));
export const NotificationIcon = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "inline",
    marginTop: "30px",
  },
}));
