import { styled, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBox = styled((props) => (
  <TextField
    slotProps={{
      input: {
        startAdornment: <SearchIcon />,
      },
    }}
    variant={"outlined"}
    {...props}
  />
))(({ minWidth }) => ({
  "& .MuiOutlinedInput-root": {
    background: "white",
    minWidth,
    padding: "0",
    paddingLeft: "10px",
  },
  "& .MuiOutlinedInput-input": {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "500",
  },
  fontFamily: "Poppins",
}));

const SearchIcon = styled(SearchOutlinedIcon)({
  color: "#888888",
  paddingRight: "10px",
});

export default SearchBox;
