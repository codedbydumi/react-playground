import React from 'react';
import RecipeCard from './RecipeCard';
import Loading from '../common/Loading';

const RecipeList = ({ 
  recipes, 
  loading, 
  onRecipeClick, 
  onFavorite, 
  onBookmark,
  emptyMessage = "No recipes found. Try adjusting your filters or search criteria."
}) => {
  if (loading) {
    return <Loading message="Loading delicious recipes..." />;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400" 
            alt="No recipes"
            className="w-32 h-32 mx-auto mb-4 rounded-full object-cover opacity-50"
          />
          <p className="text-gray-500 text-lg">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={onRecipeClick}
          onFavorite={onFavorite}
          onBookmark={onBookmark}
        />
      ))}
    </div>
  );
};

export default RecipeList;