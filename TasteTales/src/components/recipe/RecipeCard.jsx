import React from 'react';
import { Clock, Users, Star, Heart, Bookmark } from 'lucide-react';

const RecipeCard = ({ recipe, onClick, variant = 'default' }) => {
  const {
    id,
    title,
    description,
    image,
    prepTime,
    cookTime,
    totalTime,
    servings,
    difficulty,
    rating,
    ratingCount,
    tags = []
  } = recipe;

  const handleClick = () => {
    if (onClick) {
      onClick(recipe);
    }
  };

  if (variant === 'featured') {
    return (
      <div 
        onClick={handleClick}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image || 'https://via.placeholder.com/400x300'} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>{totalTime || cookTime}m</span>
            </div>
            <div className="flex items-center mr-4">
              <Users className="h-4 w-4 mr-1" />
              <span>{servings} servings</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
              <span>{rating?.toFixed(1) || '4.5'}</span>
            </div>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div 
        onClick={handleClick}
        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group flex"
      >
        <div className="relative w-24 h-24 flex-shrink-0">
          <img 
            src={image || 'https://via.placeholder.com/200x200'} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-1">
          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
            {title}
          </h4>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>{totalTime || cookTime}m</span>
            <span className="mx-2">•</span>
            <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
            <span>{rating?.toFixed(1) || '4.5'}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || 'https://via.placeholder.com/400x300'} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Bookmark className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{totalTime || cookTime}m</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{servings}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
            <span>{rating?.toFixed(1) || '4.5'}</span>
          </div>
        </div>

        {difficulty && (
          <div className="flex items-center justify-between">
            <span className={`px-2 py-1 text-xs rounded-full ${
              difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
            
            {tags.length > 0 && (
              <div className="flex gap-1">
                {tags.slice(0, 2).map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;