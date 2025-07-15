import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch, 
  value: controlledValue,
  onChange: controlledOnChange,
  className = "",
  showClearButton = true,
  autoFocus = false
}) => {
  const [localValue, setLocalValue] = useState('');
  
  // Use controlled or uncontrolled mode
  const value = controlledValue !== undefined ? controlledValue : localValue;
  const setValue = controlledValue !== undefined ? controlledOnChange : setLocalValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setValue('');
    if (onSearch) {
      onSearch('');
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (controlledOnChange) {
      controlledOnChange(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
        {showClearButton && value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;