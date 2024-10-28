import styled from "@emotion/styled";
import { Avatar, Box, Grid, Grid2, Typography } from "@mui/material";

export const ProfileBody = styled(Box)({
  position: "relative",
  padding: "20px",
  height: "auto",
  backgroundColor: "#F0F0F0",
});

export const ProfileGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  background: "#fff",
  minHeight: "177px",
  borderRadius: "10px",
});

export const PerformanceContainer = styled(Box)({
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "8px",
  height: "460px",
  overflow: "scroll",
});
export const SpeedometerContainer = styled(Box)({
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "scroll",
});

export const LabelContainer = styled(Box)({
  marginTop: "5px",
  backgroundColor: "#F0F0F0",
  padding: "10px 20px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
});

export const LabelText = styled(Typography)({
  fontWeight: 400,
  fontSize: "16px",
  color: "#6F6F6F",
  marginRight: "5px",
});

export const LabelValue = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  color: "#2C2C2C",
});

export const FeedbackContainer = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "8px",
  minHeight: "700px",
});

//PipBar.jsx

export const PipBarStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "450px",
  marginTop: "40px",
  backgroundColor: "#ffffff",
});

export const RowContainer = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
});
export const HoverRowContainer = styled(RowContainer)({
  "&:hover .tooltip": {
    display: "block",
  },
});
export const FirstLabel = styled(Typography)({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  textAlign: "center",
  fontWeight: "600",
  color: "#3D3D3D",
  background: "#F0F0F0",
});
export const Label = styled(Typography)({
  color: "#808080",
  fontWeight: "400",
});
export const CircleBox = styled(Box)({
  display: "flex",
  cursor: "pointer",
  gap: "12px",
});

export const Circle = styled(Box)(({ color }) => ({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: color,
}));

export const Tooltip = styled(Box)({
  display: "none",
  position: "absolute",
  top: "30px",
  left: "10%",
  transform: "translateX(-50%)",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  backgroundColor: "#fff",
  color: "#9999A3",
  padding: "8px 15px ",
  borderRadius: "5px",
  fontSize: "12px",
  whiteSpace: "nowrap",
  zIndex: 1,
});
export const TooltipBox = styled(Box)({
  color: "#000",
  fontSize: "14px",
  fontWeight: "500",
});
