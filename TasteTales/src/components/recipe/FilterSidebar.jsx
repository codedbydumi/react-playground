import React from 'react';
import { X } from 'lucide-react';
import Button from '../common/Button';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const categories = [
    'breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'appetizer'
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ];

  const cookingTimes = [
    { value: '15', label: 'Under 15 min' },
    { value: '30', label: 'Under 30 min' },
    { value: '60', label: 'Under 1 hour' },
    { value: '120', label: 'Under 2 hours' }
  ];

  const dietaryOptions = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten Free' },
    { value: 'dairy-free', label: 'Dairy Free' },
    { value: 'keto', label: 'Keto' },
    { value: 'paleo', label: 'Paleo' }
  ];

  const handleDietaryChange = (value) => {
    const currentDietary = filters.dietary || [];
    const newDietary = currentDietary.includes(value)
      ? currentDietary.filter(item => item !== value)
      : [...currentDietary, value];
    
    onFilterChange('dietary', newDietary);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button
          onClick={onClearFilters}
          variant="ghost"
          size="small"
          className="text-gray-500 hover:text-gray-700"
        >
          Clear All
        </Button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 capitalize">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Difficulty</h4>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <label key={difficulty.value} className="flex items-center">
              <input
                type="radio"
                name="difficulty"
                value={difficulty.value}
                checked={filters.difficulty === difficulty.value}
                onChange={(e) => onFilterChange('difficulty', e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {difficulty.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Cooking Time Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Cooking Time</h4>
        <div className="space-y-2">
          {cookingTimes.map((time) => (
            <label key={time.value} className="flex items-center">
              <input
                type="radio"
                name="cookingTime"
                value={time.value}
                checked={filters.cookingTime === time.value}
                onChange={(e) => onFilterChange('cookingTime', e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {time.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Dietary Restrictions */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Dietary</h4>
        <div className="space-y-2">
          {dietaryOptions.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                value={option.value}
                checked={filters.dietary?.includes(option.value) || false}
                onChange={() => handleDietaryChange(option.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;