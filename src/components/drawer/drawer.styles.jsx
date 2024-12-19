import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/material";

const DrawerBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  [theme.breakpoints.down("sm")]: { width: "100vw" },
}));

const DrawerContentBox = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "white",
}));

const DrawerCloseButton = styled(CloseIcon)(({ theme }) => ({
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: { position: "absolute", right: "0" },
  padding: "10px",
  borderRadius: "100px",
  margin: "15px",
  fontSize: "24px",
  cursor: "pointer",
}));

const DrawerTitle = styled(Box)({
  padding: "24px 0px 0px 24px",
});

const DrawerContentLayout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  height: "100%",
  width: "100%",
});

const DrawerButtonsContainer = styled(Box)({
  display: "flex",
  gap: "24px",
  padding: "0px 24px",
  marginTop: "auto",
  marginBottom: "20px",
});

export {
  DrawerContentBox,
  DrawerCloseButton,
  DrawerBox,
  DrawerContentLayout,
  DrawerTitle,
  DrawerButtonsContainer,
};
