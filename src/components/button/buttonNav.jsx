import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavButton = styled(Link)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  color: "#f5f5f5",
  textDecoration: "none",
  borderRadius: "4px",
});

const IconBox = styled(Box)(({ active }) => ({
  background: active ? "#49c792" : "#30287e",
  padding: "5px",
  borderRadius: "4px",
  height: "25px",
  "& svg": {
    fontSize: "25px",
  },
}));

const Label = styled(Box)({
  fontSize: "12px",
  marginTop: "5px",
  fontWeight: 300,
});

const ButtonNav = ({ to, icon, label, active }) => (
  <NavButton to={to}>
    <IconBox active={active ? 1 : 0}>{icon}</IconBox>
    <Label>{label}</Label>
  </NavButton>
);

export default ButtonNav;
