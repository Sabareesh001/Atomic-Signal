import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ align }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    height: "19px",
    color: "#353448",
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
    color: "#353448",
    fontWeight: "600",
    textAlign:
      align === "Response" || align === "Reminder" || align === "Feedback"
        ? "center"
        : "left",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  td: {
    border: 0,
    padding: "13px 15px",
  },
}));

export const stylesnew = {
  tablefooterc: {
    borderTop: "1px solid #E6E6E6",
    borderBottom: "none",
    color: "#71707E",
    fontSize: "14px",
    width: "1400px",
  },

  out: {
    height: "550px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  },
};
