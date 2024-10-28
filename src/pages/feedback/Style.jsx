import { Box, styled } from "@mui/material";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const Base = styled(Box)(() => ({
  height: "93.75vh",
  backgroundColor: "#F0F0F0",
  width: "96.7%",
  padding: "24px",
}));

export const Heading = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  height: "70px",
  justifyContent: "space-between",
}));

export const Head = styled(Box)(() => ({
  display: "flex",
  height: "40px",
  alignItems: "end",
  width: "100%",
  borderBottom: "1px solid #CACACA ",
}));

export const Titlehead = styled(Box)(() => ({
  color: "#353448",
  fontSize: "20px",
  fontWeight: "600",
}));

export const Container = styled(Box)(() => ({
  height: "98%",
  width: "97%",
  overflow: "hidden",
}));

export const Table1 = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  height: "620px",
  width: "100%",
  border: "1px solid #E6E6E6",
  overflow: "hidden",
  borderRadius: "8px",
}));

export const Flex = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

export const Signalcolour = styled(Box)(({ performance }) => ({
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
  fontSize: "14px",
}));

export const DoneIcon = styled(IoCheckmarkDoneSharp)(({ response }) => ({
  color: response === "yes" ? "#665CD7" : "#E5E5E5",
  fontSize: "18px",
  display: "flex",
}));

export const stylesnew = {
  line: {
    hight: "100px",
    width: "100px",
    backgroundColor: "red",
  },

  divider: {
    color: "red",
    height: "30px",
    width: "1px",
    backgroundColor: "#CACACA",
  },

  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#665CD7",
      height: "3px",
      borderRadius: "50px",
    },
    minHeight: "0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  tab: {
    color: "#71707B",
    "&.Mui-selected": { color: "#3D3D3D" },
    textTransform: "none",
    alignItems: "start",
    justifyContent: "start",
    marginRight: "30px",
    minHeight: "32px",
    minWidth: "0",
    padding: "0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  word: {
    marginRight: "35px",
    color: "#71707E",
    fontSize: "16px",
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
    color: "#49C792 !important",
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
};
