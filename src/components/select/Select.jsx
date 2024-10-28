import { Select, styled, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledSelect = styled(({ placeholder, ...props }) => (
  <Select
    displayEmpty
    IconComponent={KeyboardArrowDownIcon}
    renderValue={() => <Typography color="#C2C1C7">{placeholder}</Typography>}
    {...props}
  />
))({});

export default StyledSelect;
