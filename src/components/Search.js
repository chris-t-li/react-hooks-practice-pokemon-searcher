import React from "react";

function Search({ handleSearch, searchQuery }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value={searchQuery} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
