import React from "react";
import "../App.css";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form class="search" action="">
        <input type="search" placeholder="Search here..." required></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
