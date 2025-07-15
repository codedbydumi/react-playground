import React from 'react';
import { Clock, Users, Heart, Bookmark } from 'lucide-react';

const RecipeCard = ({ recipe, onClick, onFavorite, onBookmark }) => {
  const { 
    id, 
    title, 
    description, 
    image, 
    cookTime, 
    servings, 
    difficulty, 
    cuisine,
    isFavorite = false,
    isBookmarked = false
  } = recipe;

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (onFavorite) onFavorite(id);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    if (onBookmark) onBookmark(id);
  };

  return (
    <div 
      onClick={() => onClick && onClick(recipe)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            onClick={handleFavorite}
            className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
          >
            <Heart 
              className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
          <button
            onClick={handleBookmark}
            className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
          >
            <Bookmark 
              className={`h-5 w-5 ${isBookmarked ? 'fill-primary-600 text-primary-600' : 'text-gray-600'}`}
            />
          </button>
        </div>
        {cuisine && (
          <div className="absolute bottom-2 left-2">
            <span className="px-3 py-1 bg-black bg-opacity-70 text-white text-xs rounded-full">
              {cuisine}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Recipe Info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{cookTime}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span>{servings}</span>
            </div>
          </div>
          {difficulty && (
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[difficulty]}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;