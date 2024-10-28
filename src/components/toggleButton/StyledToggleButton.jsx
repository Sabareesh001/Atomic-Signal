import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

const StyledToggleButton = styled(ToggleButton)({
  color: "#353448",
  border: "solid 1px #EBEBEB  !important",
  borderRadius: "4px !important",
  textTransform: "none",

  "&.Mui-selected": {
    color: "#353448",
    border: "solid 1px #49C792  !important",
    backgroundColor: "#EEFBF6",
  },
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  gap: "8px",
  flexWrap: "wrap",
  width: "100%",
  "& .MuiToggleButtonGroup-grouped:hover": {
    backgroundColor: "transparent",
  },
  "& .Mui-selected:hover": {
    backgroundColor: "#EEFBF6",
  },
});

export { StyledToggleButton, StyledToggleButtonGroup };
