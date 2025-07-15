import React from 'react';
import { Filter, X } from 'lucide-react';
import Button from '../common/Button';

const FilterSidebar = ({ filters, onFilterChange, onReset, isOpen, onClose }) => {
  const cuisineOptions = [
    'Italian', 'Mexican', 'Asian', 'Mediterranean', 
    'American', 'French', 'Indian', 'Thai'
  ];

  const difficultyOptions = ['easy', 'medium', 'hard'];
  
  const timeOptions = [
    { label: 'Under 30 min', value: '30' },
    { label: 'Under 1 hour', value: '60' },
    { label: '1-2 hours', value: '120' },
    { label: 'Over 2 hours', value: '121' }
  ];

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 
    'Dairy-Free', 'Keto', 'Paleo'
  ];

  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleDietaryToggle = (option) => {
    const current = filters.dietary || [];
    const updated = current.includes(option)
      ? current.filter(d => d !== option)
      : [...current, option];
    handleChange('dietary', updated);
  };

  const containerClass = isOpen 
    ? 'fixed lg:sticky lg:top-20 inset-y-0 left-0 z-40 w-80 lg:w-full transform translate-x-0' 
    : 'fixed lg:sticky lg:top-20 inset-y-0 left-0 z-40 w-80 lg:w-full transform -translate-x-full lg:translate-x-0';

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`${containerClass} transition-transform duration-300 ease-in-out`}>
        <div className="bg-white h-full lg:h-auto rounded-lg shadow-lg p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-primary-600" />
              <h2 className="text-xl font-semibold">Filters</h2>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cuisine Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Cuisine</h3>
            <select
              value={filters.cuisine || ''}
              onChange={(e) => handleChange('cuisine', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">All Cuisines</option>
              {cuisineOptions.map(cuisine => (
                <option key={cuisine} value={cuisine.toLowerCase()}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Difficulty</h3>
            <div className="space-y-2">
              {difficultyOptions.map(level => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="difficulty"
                    value={level}
                    checked={filters.difficulty === level}
                    onChange={(e) => handleChange('difficulty', e.target.value)}
                    className="mr-2 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="capitalize">{level}</span>
                </label>
              ))}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="difficulty"
                  value=""
                  checked={!filters.difficulty}
                  onChange={(e) => handleChange('difficulty', '')}
                  className="mr-2 text-primary-600 focus:ring-primary-500"
                />
                <span>Any Difficulty</span>
              </label>
            </div>
          </div>

          {/* Time Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Cooking Time</h3>
            <select
              value={filters.time || ''}
              onChange={(e) => handleChange('time', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Any Time</option>
              {timeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Dietary Restrictions */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Dietary Restrictions</h3>
            <div className="space-y-2">
              {dietaryOptions.map(option => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.dietary || []).includes(option.toLowerCase())}
                    onChange={() => handleDietaryToggle(option.toLowerCase())}
                    className="mr-2 text-primary-600 focus:ring-primary-500 rounded"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button 
              onClick={onReset}
              variant="outline"
              fullWidth
            >
              Reset Filters
            </Button>
            <Button 
              onClick={onClose}
              fullWidth
              className="lg:hidden"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;