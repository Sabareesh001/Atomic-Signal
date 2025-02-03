import { Select, styled, Typography, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledSelect = styled(({ onChange, placeholder, inputRef, ...props }) => (
  <Select
    displayEmpty
    onChange={onChange}
    inputRef={inputRef}
    IconComponent={() => {
      const theme = useTheme();
      return (
        <KeyboardArrowDownIcon
          sx={{
            padding: "10px",
            fontSize: theme.typography.fontSize.small,
            color: theme.palette.text.secondary,
          }}
        />
      );
    }}
    renderValue={(selected) =>
      selected && selected !== "" ? (
        selected
      ) : (
        <Typography color="#C2C1C7">{placeholder}</Typography>
      )
    }
    {...props}
  />
))(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.text.default,
  "& .MuiInputBase-input::placeholder": {
    color: "black",
    opacity: 1,
  },
  "&.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default StyledSelect;
