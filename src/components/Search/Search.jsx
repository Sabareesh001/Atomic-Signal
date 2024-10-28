import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Searchbar, Search, stylesnew } from "./Styles";

function Searchstar({ searchQuery, setSearchQuery }) {
  return (
    <Search>
      <IoIosSearch style={stylesnew.searchicon} />
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
