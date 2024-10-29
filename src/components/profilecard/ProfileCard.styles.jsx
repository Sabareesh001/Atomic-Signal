import { Avatar, Box, styled, Typography, Button } from "@mui/material";

const ProfileCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "8px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const ProfileInfoBox = styled(Box)(({ theme }) => ({
  height: "auto",
  display: "flex",
  width: "100%",
  [theme.breakpoints.up("xs")]: { flexDirection: "column" },
  [theme.breakpoints.up("sm")]: { flexDirection: "row", gap: "1.5rem" },
  alignItems: "center",
  position: "relative",
  flexWrap: "wrap",
  margin: "1.5rem",
  borderRadius: "0.5rem",
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  height: "7.5rem",
  width: "7.5rem",
  [theme.breakpoints.up("sm")]: { marginLeft: "1.5rem" },
}));

const AddDeleteButtonContainer = styled(Box)({
  position: "absolute",
  bottom: 8,
  left: 68,
});

const AddButton = styled(Box)({
  backgroundColor: "#fff",
  padding: "5px 4px 0px 4px",
  borderRadius: "50%",
  border: "2px solid #49C792",
});

const DeleteButton = styled(Box)({
  backgroundColor: "#fff",
  padding: "5px 4px 0px 4px",
  borderRadius: "50%",
  border: "1px solid #ccc",
});

const ProfileName = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
});

const ProfileIconsLabel = styled(Typography)({
  backgroundColor: "white",
  fontSize: "14px",
});

const ProfileInfoAndOthersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.up("sm")]: { marginRight: "1.5rem" },
  flex: 1,
}));

const ProfileIconsAndLabelsContainer = styled(Box)({
  backgroundColor: "white",
  display: "flex",

  alignItems: "center",
  gap: "10px",
});

const UserNameAndPeriodOfServiceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: { flexDirection: "row" },
}));

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

const SettingContainer = styled(Box)({
  width: "100%",
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
  AddDeleteButtonContainer,
  AddButton,
  DeleteButton,
  SettingContainer,
};
