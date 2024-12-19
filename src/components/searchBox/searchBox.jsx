import { styled, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBox = styled((props) => (
  <TextField
    sx={{
      width: "20.2vw",
    }}
    slotProps={{
      input: {
        startAdornment: <SearchIcon />,
      },
    }}
    variant={"outlined"}
    {...props}
  />
))(({ theme, minWidth, width }) => ({
  "& .MuiOutlinedInput-root": {
    background: "white",
    minWidth,
    width,
    height: "40px",
    padding: "0px",
    gap: "0.3rem",
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.placeholder,
    opacity: 1,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize.small,
  },
  "& .MuiOutlinedInput-input": {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize.small,
  },
  "& .MuiOutlinedInput-input:focus": {
    border: "none",
  },
}));

const SearchIcon = styled(SearchOutlinedIcon)({
  color: "#888888",
  fontSize: "24px",
  paddingLeft: "10px",
});

export default SearchBox;
