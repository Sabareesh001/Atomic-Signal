import styled from "@emotion/styled";
import { Avatar, Box, Grid, Grid2, Typography } from "@mui/material";

export const ProfileBody = styled(Box)({
  position: "relative",
  padding: "20px",
  height: "auto",
  backgroundColor: "#F0F0F0",
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
  padding: "20px 25px",
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

// feedbackprofile

export const Card = styled(Box)({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  marginBottom: "16px",
  backgroundColor: "#fff",
  transition: "all 0.3s ease",
});

export const CardContentWrapper = styled(Box)(({ expanded }) => ({
  margin: "16px",
  marginBottom: "10px",
  paddingBottom: expanded ? "20px" : "0px",
  borderBottom: expanded ? "2px dashed #B9B9B9" : "",
}));

export const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
});

export const AvatarContainer = styled(Avatar)({
  marginRight: "8px",
});

export const HeaderInfo = styled(Box)({
  lineHeight: 0,
});

export const HeaderDate = styled(Typography)({
  color: "textSecondary",
  fontSize: "12px",
});

export const RatingContainer = styled(Box)({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5F5F5",
  padding: "5px 10px",
  borderRadius: "16px",
});

export const RatingAvatar = styled(Avatar)({
  backgroundColor: "#4caf50",
  width: 24,
  height: 24,
  marginRight: "4px",
  fontSize: "14px",
  color: "#fff",
});

export const FeedbackContent = styled(Typography)({
  color: "#353448",
  fontWeight: "500",
});

export const FeedbackText = styled(Typography)({
  color: "textSecondary",
  fontSize: "14px",
});

export const Status = styled(Box)(({ isResponse, expanded }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: !isResponse
    ? "#F5F5F5"
    : isResponse && !expanded
      ? "#EEFBF6"
      : "",
  padding: "10px",
  height: "20px",
  cursor: "pointer",
  fontSize: "14px",
  color: "#4caf50",
  fontWeight: isResponse ? "bold" : "normal",
}));

export const ResponseStatusText = styled(Typography)({
  color: "#353448",
  fontWeight: "500",
});

export const StatusDate = styled(Typography)({
  margin: "2px 15px",
  fontSize: "14px",
  color: "#71707E",
});

export const NotRespondedText = styled(Typography)({
  color: "#515151",
  fontSize: "14px",
  marginTop: "2px",
});

export const ViewLink = styled(Typography)({
  color: "#49C792",
  fontSize: "12px",
  cursor: "pointer",
  fontWeight: "500",
});

export const ResponseContainer = styled(Box)(({ showInput }) => ({
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3px 10px",
  background: showInput ? "#EEFBF6" : "",
  color: "#49C792",
  fontWeight: "500",
  cursor: "pointer",
}));

export const SubmitBox = styled(Box)({
  width: "100%",
  textAlign: "center",
});
export const InputRespondBox = styled(Box)({
  width: "95%",
  display: "flex",
  gap: "10PX",
  marginBottom: "10PX",
});

export const ResponseInput = styled(Box)({
  marginTop: "8px",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #e0e0e0",
  width: "100%",
});

export const CollapseContent = styled(Box)({
  color: "textSecondary",
  fontSize: "14px",
  padding: "0px 15px 5px 15px",
  marginBottom: "15px",
});

export const ResponseText = styled(Typography)({
  fontSize: "14px",
  fontWeight: "600",
  color: "textPrimary",
});

export const FeedbackResponseText = styled(Typography)({
  fontSize: "14px",
  color: "#71707E",
});
