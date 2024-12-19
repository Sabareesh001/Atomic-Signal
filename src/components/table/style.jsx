import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme, align }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.typography.fontSize.medium,
    height: "19px",
    color: theme.palette.text.default,
    whiteSpace: "nowrap", // responsive table
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: theme.typography.fontSize.extraMedium,
    color: theme.palette.text.default,
    fontWeight: theme.typography.fontWeight.semiBold,
    textAlign:
      align === "Response" ||
      align === "Reminder" ||
      align === "Feedback" ||
      align === "Action"
        ? "center"
        : "left",
    backgroundColor: theme.palette.background.primary,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  td: {
    border: 0,
    padding: "13px 15px",
  },
}));

export const stylesnew = (theme) => ({
  tablefooterc: {
    borderTop: `1px solid ${theme.palette.secondary.tableoutline}`,
    borderBottom: "none",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize.small,
    paddingLeft: "0px",
    margin: "0",
    width: "100vw",
    "& .MuiTablePagination-toolbar": {
      paddingLeft: "2px",
      PaddingRight: "0",
    },
    "& .MuiTablePagination-actions": {
      margin: "0px 0 0 5px",
    },
    "&.MuiTablePagination-toolbar": {
      margin: "0px",
    },
    "& .MuiSelect-select": {
      minWidth: "0px",
    },
  },

  out: {
    height: "550px",
    overflowY: "auto",
    overflowX: "auto",
    scrollbarWidth: "none",
    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
  },
});
