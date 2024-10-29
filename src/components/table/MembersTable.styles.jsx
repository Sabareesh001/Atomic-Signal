import {
  Avatar,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Table,
  TableFooter,
  TablePagination,
  tooltipClasses,
  Switch,
  Box,
  FormControl,
} from "@mui/material";

import PencilIconSvg from "../../assets/icons/pencil.svg";

const ReportingList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "5px",
});

const TableDiv = styled(Box)({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "white",
  borderLeft: "solid white 15px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12) ",
});

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "white",
  borderRadius: "10px  10px 0px 0px ",
  position: "relative",
  fontFamily: "Poppins",
  minHeight: "40rem",
  maxHeight: "40rem",
  overflow: "auto",
  pointerEvents: "none",
  scrollSnapType: "both mandatory",
  scrollSnapAlign: "start",
});

const StyledBottomTableContainer = styled(TableContainer)({
  backgroundColor: "white",

  borderRadius: "0px 0px 10px  10px",
  fontFamily: "Poppins",
  zIndex: 10,
  position: "relative",
});

const StyledTablePagination = styled(TablePagination)({
  "& .MuiTablePagination-root": {
    fontFamily: "Poppins",
  },
  "& .MuiTablePagination-selectLabel": {
    fontFamily: "Poppins",
  },
  "& .MuiTablePagination-select": {
    fontFamily: "Poppins",
  },
  "& .MuiTablePagination-displayedRows": {
    fontFamily: "Poppins",
  },
});

const StyledTableFooter = styled(TableFooter)({});

const StyledTableRow = styled(TableRow)({});

const MemberProfile = styled("div")(({ fontSize }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize,
  width: "100%",
}));

const MoreTag = styled("div")({
  color: "#49C792",
});

const SignalsAvatar = styled(Avatar)(({ bgColor, color }) => ({
  backgroundColor: bgColor,
  color: color,
  padding: 0,
  width: "30px",
  height: "30px",
  fontSize: "small",
}));

const StyledTableHead = styled(TableHead)({
  fontWeight: "bold",
  fontFamily: "Poppins",
});

const StyledTableHeading = styled(TableCell)(({ minWidth }) => ({
  fontWeight: "500",
  fontSize: "1.07em",
  fontFamily: "Poppins",
  minWidth: "minmax(100,10)",
  position: "sticky",
  top: 0,
  backgroundColor: "white",
  zIndex: 1,
  borderBottom: "none",
}));

const StyledTableCell = styled(TableCell)(({ minWidth }) => ({
  fontSize: "1.07em",
  borderBottom: "none",
  padding: "0px 15px",
  cursor: "pointer",
  fontFamily: "Poppins",
  minWidth: minWidth || "9rem",
}));

const ToolTipContent = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SignalList = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const LightTooltip = styled(({ className, fontSize, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme, fontSize }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12) ",
    fontSize: fontSize || 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

const StickyHeading = styled(TableCell)({
  position: "sticky",
  right: 0,
  zIndex: 2,
  fontWeight: "500",
  fontSize: "18px",
  fontFamily: "Poppins",
  borderBottom: "none",
  minWidth: 190,
  backgroundColor: "white",
  bottom: 0,
  top: 0,
});

const ProfileAvatar = styled(Avatar)(({ height, width, fontSize }) => ({
  height,
  width,
  fontSize,
}));

const StickyCell = styled(TableCell)({
  position: "sticky",
  right: 0,
  fontSize: "16px",
  zIndex: 1,
  minWidth: 200,
  cursor: "pointer",
  backgroundColor: "white",
  borderBottom: "none",
  padding: "20px 10px",
  fontFamily: "Poppins",
});

const PencilIcon = styled((props) => <img src={PencilIconSvg} {...props} />)({
  color: "#49C792",
  backgroundColor: "#EEFBF6",
  padding: "2px",
  borderRadius: "100px",
});

const ActionContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  position: "relative",
  width: "100%",
});

const ActionStickyContainerSeparator = styled("div")({
  borderLeft: "solid rgba(0, 0, 0, 0.12) 1px",
  height: "100%",
  position: "absolute",
  zIndex: 4,
  right: 0,
  transform: "translate(-220px,0%)",
});

const ActionPaginationContainerSeparator = styled("div")({
  width: "calc(100% + 15px)",
  borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
  position: "absolute",
  bottom: 0,
  transform: "translate(-15px,-52px)",
  zIndex: 11,
});

const ActionHeaderContainerSeparator = styled("div")({
  width: "calc(100% + 15px)",
  borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
  position: "absolute",
  transform: "translate(-15px,55px)",
  zIndex: 10,
});

const ActionContent = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  flex: 1,
});

const StyledTable = styled(Table)({
  position: "relative",
  pointerEvents: "auto",
});

const StyledFormControl = styled(Box)({
  padding: "0px 24px",
  display: "flex",
  gap: "12px",
  flexDirection: "column",
});

export {
  ReportingList,
  TableDiv,
  StyledTableContainer,
  StyledBottomTableContainer,
  StyledTablePagination,
  StyledTableFooter,
  StyledTableRow,
  MemberProfile,
  MoreTag,
  SignalsAvatar,
  StyledTableHead,
  StyledTableHeading,
  StyledTableCell,
  ToolTipContent,
  SignalList,
  LightTooltip,
  StickyHeading,
  ProfileAvatar,
  StickyCell,
  PencilIcon,
  ActionContainer,
  ActionStickyContainerSeparator,
  ActionPaginationContainerSeparator,
  ActionHeaderContainerSeparator,
  ActionContent,
  StyledTable,
  StyledFormControl,
};
