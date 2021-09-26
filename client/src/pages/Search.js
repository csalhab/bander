import React from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

const Search = () => {
  return (
    <div className="container">
      <p>Find other musicians and start Jammin'!.</p>
      <p />
      <SearchBar></SearchBar>
      <SearchButton></SearchButton>
    </div>
  );
};

export default Search;
