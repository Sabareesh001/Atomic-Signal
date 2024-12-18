export const styledItem = {
  headStyle: {
    color: "#353448",
    fontFamily: "Poppins",
    letterSpacing: "0px",
    fontSize: "1.125rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  dataStyle: {
    color: "#353448 !important",
    fontSize: "1rem",
    fontFamily: "Poppins",
    textAlign: "left",
    letterSpacing: "0px",
    whiteSpace: "nowrap",
  },
  linkStyle: {
    color: "#49C792",
    textDecorationColor: "#49C792",
    cursor: "pointer",
    fontSize: "1rem",
    textAlign: "left",
    fontFamily: "Poppins",
  },
  tableCellStyle: { borderColor: "#FFFFFF", bgcolor: "#ffffff" },
  parentGridStyle: {
    width: "100%",
    overflow: "hidden",
    marginTop: "1rem",
    borderRadius: "6px",
    border: "1px solid #E6E6E6",
    display: "inline-flex",
    bgcolor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  reminderBoxStyle: {
    display: "inline-block",
    padding: "4px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  reminderBoxStyle1: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  reminderTextStyle: {
    color: "#ffffff",
    textAlign: "left",
    fontFamily: "Poppins",
    letterSpacing: "0px",
    fontSize: "0.875rem",
  },
  tablePagenationStyle: {
    background: "#ffffff",
    borderTop: "1px solid #E6E6E6",
  },
  tableContainerStyle: {
    height: "67.7vh",
    scrollbarWidth: "none",
    scrollBehavior: "smooth",
  },
  feedbackText: {
    fontFamily: "Poppins",
    fontSize: "20px",
    textAlign: "left",
    color: "#353448",
    fontWeight: "500",
  },
  filterBoxIcon: {
    ".MuiAvatar-img": { height: "1rem", width: "1rem" },
    backgroundColor: "#49C792",
    borderRadius: "4px",
    padding: "0px 4px",
    cursor: "pointer",
  },
  parentGridSignalStyle: {
    bgcolor: "#FFFFFF",
    border: "1px solid #E3E3E3",
    borderRadius: "4px",
    padding: "1rem ",
    marginTop: "24px",
  },
  parentGridSignalStyleWeb: {
    bgcolor: "#FFFFFF",
    border: "1px solid #E3E3E3",
    borderRadius: "4px",
    padding: "1rem ",
    marginTop: "24px",
    display: {
      xs: "none",
      sm: "block",
    },
  },
  parentGridSignalStyleMob: {
    bgcolor: "#FFFFFF",
    border: "1px solid #E3E3E3",
    borderRadius: "4px",
    padding: "1rem ",
    marginTop: "24px",
    display: {
      xs: "block",
      sm: "none",
    },
  },
  parentBoxSignalStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflowX: "auto",
  },
  parentBoxSignalStyleMob: {
    display: "grid",
    justifyContent: "space-between",
    alignItems: "center",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `
      "signalhead addbutton " 
      "inputbox inputbox"
      `,
    gap: "1rem 0px",
  },
  headSignalStyle: {
    color: "#353448",
    fontSize: "1rem",
    textAlign: "left",
    letterSpacing: "0px",
    fontFamily: "Poppins",
    fontWeight: "500",
  },
  headSignalStyleMob: {
    color: "#353448",
    fontSize: "1rem",
    textAlign: "left",
    letterSpacing: "0px",
    fontFamily: "Poppins",
    fontWeight: "500",
    gridArea: "signalhead",
    whiteSpace: "nowrap",
  },
  paperSearchStyle: {
    border: "1px solid #CACACA",
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    borderShadow: "none",
    width: "310px",
  },
  paperSearchStyleMob: {
    border: "1px solid #CACACA",
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    gridArea: "inputbox",
  },
  searchIconStyle: { color: "#888888", width: "20px", height: "20px" },
  searchInputBarStyle: {
    fontSize: "0.875rem",
    fontFamily: "Poppins",
    textAlign: "left",
    letterSpacing: "0px",
    ml: 1,
  },
  signalButtonStyle: {
    textAlign: "left",
    fontSize: "1rem",
    fontFamily: "Poppins",
    textTransform: "none",
    fontWeight: "300",
    bgcolor: "#49C792",
    padding: "3px 40px",
    color: "#ffffff !important",
  },
  signalButtonStyleMob: {
    textAlign: "left",
    fontSize: "1rem",
    fontFamily: "Poppins",
    textTransform: "none",
    fontWeight: "300",
    bgcolor: "#49C792",
    padding: "3px 40px",
    color: "#ffffff !important",
    gridArea: "addbutton",
  },
  bodyActionIconStyle: {
    height: "28px",
    width: "28px",
    ".MuiAvatar-img": { height: "12px", width: "12px" },
    bgcolor: "#EEFBF6",
    cursor: "pointer",
  },
  tabsStyle: { background: "#F0F0F0", padding: "24px" },
  editContentHeading: {
    color: "#484759",
    display: "flex",
    columnGap: "2px",
    textAlign: "left",
    fontFamily: "Poppins",
    letterSpacing: "0px",
    fontSize: "12px",
  },
  editContentTextBox: {
    fontSize: "0.875rem",
    fontFamily: "Poppins",
    color: "#353448",
    textAlign: "left",
    letterSpacing: "0px",
    border: "1px solid #EBEBEB",
    borderRadius: "4px",
    minHeight: "120px",
    padding: "9px 12px",
  },
  editContentHeadingMust: { color: "#F44F5A" },
  editContentBox: { paddingBottom: "1rem" },
  editContentGrid: { padding: "24px" },
  feedbackTypeBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    height: "109px",
    width: "119px",
    cursor: "pointer",
  },
  feedbackAvatarBox: { height: "28px", width: "28px", overflow: "visible" },
  feedbackInfoBox: { display: "flex", columnGap: "8px", marginTop: "12px" },
  feedbackTypeInfoText: {
    fontSize: "0.875rem",
    textAlign: "left",
    color: "#484759",
    letterSpacing: "0px",
    fontFamily: "Poppins",
  },
};
