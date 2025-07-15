import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ 
  onSearch, 
  placeholder = "Search...", 
  defaultValue = "",
  size = "medium",
  autoFocus = false 
}) => {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-3 text-base",
    large: "px-5 py-4 text-lg"
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`
            block w-full pl-10 pr-3 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            placeholder-gray-500 bg-white
            ${sizeClasses[size]}
          `}
        />
      </div>
    </form>
  );
};

export default SearchBar;