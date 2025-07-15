import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;