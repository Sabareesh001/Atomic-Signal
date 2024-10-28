import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/material";

const DrawerBox = styled(Box)(() => ({
  position: "relative",

  height: "100vh",
  display: "flex",
}));

const DrawerContentBox = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "white",
}));

const DrawerCloseButton = styled(CloseIcon)({
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "100px",
  margin: "15px",
  cursor: "pointer",
});

const DrawerTitle = styled(Box)({
  padding: "24px 0px 0px 24px",
  fontWeight: 520,
});

const DrawerContentLayout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  height: "100%",
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
