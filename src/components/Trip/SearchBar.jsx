import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search trips..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
