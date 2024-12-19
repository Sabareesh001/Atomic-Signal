import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavButton = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  color: "#f5f5f5",
  textDecoration: "none",
  borderRadius: "4px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    marginBottom: "25px",
    marginTop: "0px",
  },
}));

const IconBox = styled(Box)(({ active }) => ({
  background: active ? "#49c792" : "#30287e",
  padding: "5px",
  borderRadius: "4px",
  height: "25px",
  "& svg": {
    fontSize: "25px",
  },
  "& img": {
    margin: "3px 4px",
    height: "20px",
  },
}));

const Label = styled(Box)(({ theme }) => ({
  fontSize: "12px",
  marginTop: "5px",
  fontWeight: 300,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginLeft: "20px",
  },
}));

const ButtonNav = ({ to, icon, svgSrc, label, active }) => (
  <NavButton to={to}>
    <IconBox active={active ? 1 : 0}>
      {icon ? icon : <img src={svgSrc} alt={label} />}
    </IconBox>
    <Label>{label}</Label>
  </NavButton>
);

export default ButtonNav;
