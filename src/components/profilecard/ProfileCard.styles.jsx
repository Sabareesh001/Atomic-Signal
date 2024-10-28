import { Avatar, Box, styled, Typography } from "@mui/material";
const ProfileCardContainer = styled(Box)({
  backgroundColor: "white",
  borderRadius: "8px",
  width: "600px",
  margin: "24.5px 0px 0px 0px",
});

const ProfileInfoBox = styled(Box)({
  height: "129px",
  display: "flex",
  padding: "24px",
  gap: "24px",
  alignItems: "center",
});

const ProfileAvatar = styled(Avatar)({
  height: "120px",
  width: "120px",
});

const ProfileName = styled(Typography)({
  // backgroundColor:'red',
  fontSize: "24px",
  fontWeight: "bold",
});

const ProfileIconsLabel = styled(Typography)({
  backgroundColor: "white",
  fontSize: "14px",
});

const ProfileInfoAndOthersContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "10px",
});

const ProfileIconsAndLabelsContainer = styled(Box)({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const UserNameAndPeriodOfServiceContainer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

const OthersContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const ResetPasswordContainer = styled(Box)({
  height: "20px",
  padding: "16px",
  textAlign: "center",
  fontSize: "14px",
  color: "#F44F5A",
  fontWeight: "500",
});

const ManagerAvatar = styled(Avatar)({
  height: "24px",
  width: "24px",
});

export {
  ProfileCardContainer,
  ProfileInfoBox,
  ProfileAvatar,
  ProfileName,
  ProfileIconsLabel,
  ProfileIconsAndLabelsContainer,
  ProfileInfoAndOthersContainer,
  UserNameAndPeriodOfServiceContainer,
  OthersContainer,
  ResetPasswordContainer,
  ManagerAvatar,
};
