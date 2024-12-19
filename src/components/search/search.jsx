import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Searchbar, Search, stylesnew } from "./styles";
import { useTheme } from "@mui/styles";

function Searchstar({ searchQuery, setSearchQuery }) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Search>
      <IoIosSearch style={styles.searchicon} />
      <Searchbar>
        <input
          className="search"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Searchbar>
    </Search>
  );
}

export default Searchstar;
