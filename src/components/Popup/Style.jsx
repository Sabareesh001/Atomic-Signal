import { Dialog, styled } from "@mui/material";

export const Dialogue = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    padding: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "& .MuiDialogActions-root": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    height: "400px",
    width: "500px",
  },
}));

export const stylesnew = {
  head: {
    height: "63px",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    color: "View feedback",
    fontWeight: "600",
    justifyContent: "space-between",
    borderBottom: "1px solid #CACACA ",
  },

  flex: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  body: {
    padding: "24px",
  },

  cross: {
    fontSize: "30px",
    cursor: "pointer",
  },

  profile: {
    backgroundColor: "#EFEEFB",
    height: "53px",
    borderRadius: "4px 4px 0px 0px",
    display: "flex",
    fontWeight: "600",
    width: "436px",
    padding: "0 8px",
    alignItems: "center",
    justifyContent: "space-between",
  },

  feed: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #EBEBEB",
    height: "40px",
    borderRadius: "0 0 4px 4px",
    fontSize: "14ps",
    color: "#484759",
    display: "flex",
    padding: "0 8px",
    width: "435px",
    alignItems: "center",
    justifyContent: "space-between",
  },

  photo: {
    width: 27,
    height: 27,
  },

  photo1: {
    width: 35,
    height: 35,
  },

  desi: {
    color: "#71707E",
    fontSize: "13px",
    fontWeight: "500",
  },

  desi1: {
    color: "#3D3D3D",
    fontWeight: "600",
  },

  res: {
    fontSize: "14px",
    fontWeight: "600",
    marginTop: "12px",
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
  },

  respon: {
    color: "#71707E",
    marginTop: "7px",
    height: "41px",
    fontSize: "14px",
  },
  respon1: {
    color: "#71707E",
    marginTop: "5px",
    fontSize: "14px",
  },

  dash: {
    borderTop: "2px dashed #B9B9B9",
    marginTop: "15px",
  },

  tick: {
    color: "#25C460",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
  },
};
