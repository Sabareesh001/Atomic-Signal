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
  flexWrap: "wrap",
  margin: "1.5rem",
  borderRadius: "0.5rem",
}));

const ProfileBox = styled(Box)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.up("xs")]: { marginBottom: "230x" },

  [theme.breakpoints.up("sm")]: { marginBottom: "0px" },
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  height: "7.5rem",
  width: "7.5rem",
  [theme.breakpoints.up("sm")]: { marginLeft: "1.5rem" },
  background: "#F5F5F5",
  border: "1px solid #E6E6E6",
}));

const AddDeleteButtonContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: -15,
  left: "50%",
  transform: "translateX(-50%)",
  [theme.breakpoints.up("xs")]: { left: "50%" },
  [theme.breakpoints.up("sm")]: { left: "60%" },
}));

const AddButton = styled(Box)({
  backgroundColor: "#fff",
  padding: "8px",
  borderRadius: "50%",
  border: "2px solid #49C792",
});

const DeleteButton = styled(Box)({
  backgroundColor: "#fff",
  padding: "6px 7px",
  borderRadius: "50%",
  border: "1px solid #ccc",
});

const ProfileName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.extraLarge,
  fontWeight: theme.typography.fontWeight.semiBold,
  [theme.breakpoints.down("sm")]: {
    marginTop: "30px",
  },
}));

const ProfileIconsLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: "white",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize.small,
}));

const ProfileInfoAndOthersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {},
  flex: 1,
  width: "100%",
}));

const ProfileIconsAndLabelsContainer = styled(Box)({
  backgroundColor: "white",
  display: "flex",
  alignItems: "left",
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

const OthersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  gap: "12px",
  paddingLeft: "0px",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
  },
}));

const ResetPasswordContainer = styled(Box)(({ theme }) => ({
  height: "20px",
  padding: "16px",
  textAlign: "center",
  fontSize: "14px",
  color: theme.palette.text.danger,
  fontWeight: "500",
}));

const ManagerAvatar = styled(Avatar)({
  height: "24px",
  width: "24px",
});

const SettingContainer = styled(Box)({
  width: "100%",
});

const LabelWithAvatarContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export {
  ProfileCardContainer,
  ProfileInfoBox,
  ProfileBox,
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
  LabelWithAvatarContainer,
};
