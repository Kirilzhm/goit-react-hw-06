import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder=" "
      />
    </div>
  );    
};

export default SearchBox;
