import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const Sidebar = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "72px",
  height: "100vh",
  backgroundColor: "#1b1558",
});

export const SidebarHeader = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "20px",
});

export const SidebarIcon = styled(Typography)({
  width: "25px",
  height: "25px",
  cursor: "pointer",
});

export const LogoImage = styled(Avatar)({
  width: "100%",
  height: "100%",
});

export const Version = styled(Typography)({
  marginTop: "5px",
  fontSize: "12px",
  color: "#ebebeb",
});

export const SidebarMenu = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: "15px",
});
