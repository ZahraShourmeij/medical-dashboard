import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="inputsearch position-relative col-md-6">
      <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-secondary" />
      <input
        type="text"
        placeholder="Search..."
        className="search form-control ps-5 rounded-pill bg-light border-0"
      />
    </div>
  );
}

export default SearchBar;
