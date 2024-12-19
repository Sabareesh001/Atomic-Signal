import { Box, Button, styled } from "@mui/material";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const Base = styled(Box)(({ theme }) => ({
  height: "93.75vh",
  backgroundColor: theme.palette.background.default,
  // width: "96.7%",
  padding: "24px",
  [theme.breakpoints.down("sm")]: {
    height: "87vh",
    padding: "10px",
    overflow: "hidden",
  },
}));

export const Heading = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "70px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "start",
    height: "100px",
    justifyContent: "space-evenly",
  },
}));

export const Head = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "40px",
  alignItems: "end",
  width: "100%",
  borderBottom: `1px  ${theme.palette.secondary.search} solid`,
}));

export const Titlehead = styled(Box)(({ theme }) => ({
  color: "#353448",
  fontSize: theme.typography.fontSize.large,
  fontWeight: theme.typography.fontWeight.semiBold,
}));

export const Container = styled(Box)(() => ({
  height: "98%",
  width: "97%",
  overflow: "hidden",
}));

export const Table1 = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  height: "620px",
  width: "100%",
  border: `1px solid ${theme.palette.secondary.tableoutline}`,
  overflow: "hidden",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "5px",
    height: "460px",
  },
}));

export const Flex = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

export const Signalcolour = styled(Box)(({ theme, performance }) => ({
  backgroundColor:
    performance === "Excellent"
      ? "#007C32"
      : performance === "Very Good"
        ? "#AEC934"
        : performance === "Need Improvement"
          ? "#F27024"
          : performance === "Average"
            ? "#F2EB24"
            : "red",
  height: "20px",
  width: "20px",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  color: "#ffffff",
  borderRadius: "10px",
  fontSize: theme.typography.fontSize.small,
}));

export const DoneIcon = styled(IoCheckmarkDoneSharp)(({ theme, response }) => ({
  color: response === "yes" ? "#665CD7" : "#E5E5E5",
  fontSize: theme.typography.fontSize.extraMedium,
  display: "flex",
}));

export const stylesnew = (theme) => ({
  divider: {
    height: "30px",
    width: "1px",
    backgroundColor: theme.palette.secondary.search,
  },

  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.primary.main,
      height: "3px",
      borderRadius: "50px",
    },
    minHeight: "0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  tab: {
    color: theme.palette.text.secondary,
    "&.Mui-selected": { color: "#3D3D3D" },
    textTransform: "none",
    alignItems: "start",
    justifyContent: "start",
    marginRight: "30px",
    minHeight: "32px",
    minWidth: "0",
    padding: "0",
    fontSize: theme.typography.fontSize.medium,
  },
  word: {
    marginRight: "35px",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize.medium,
    cursor: "pointer",
  },

  flgt: {
    display: "flex",
  },

  center: {
    display: "flex",
    justifyContent: "center",
  },

  view: {
    color: `${theme.palette.secondary.main}  !important`,
    textDecoration: "underline",
    cursor: "pointer",
    textAlign: "center",
  },

  flex: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  photo: {
    width: 27,
    height: 27,
  },

  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export const Filter = styled(Button)(({ theme }) => ({
  height: "40px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "5px",
  color: "#FFFFFF",
  fontSize: theme.typography.fontSize.large,
  alignItems: "center",
  cursor: "pointer",
  minWidth: "45px",
}));
