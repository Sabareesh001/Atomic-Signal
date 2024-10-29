import { Box, styled } from "@mui/material";

const styledItem = {
  gridBoxStyle: { bgcolor: "#F0F0F0" },
};

const PasswordContainer = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  margin: "24.5px",
}));

export { styledItem, PasswordContainer };
