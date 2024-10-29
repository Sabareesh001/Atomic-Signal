import { styled, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBox = styled((props) => (
  <TextField
    sx={{
      width: "auto",
    }}
    slotProps={{
      input: {
        startAdornment: <SearchIcon />,
      },
    }}
    variant={"outlined"}
    {...props}
  />
))(({ minWidth, width }) => ({
  "& .MuiOutlinedInput-root": {
    background: "white",
    minWidth,
    width,
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
