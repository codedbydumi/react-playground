import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, Users, ChefHat, Star, Heart, Bookmark, Share2, 
  ArrowLeft, Plus, Minus, Print, MessageSquare 
} from 'lucide-react';
import IngredientList from '../components/recipe/IngredientList';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import RecipeCard from '../components/recipe/RecipeCard';
import { useApp } from '../context/AppContext';
import { getRecipeById, getRelatedRecipes, rateRecipe } from '../services/api';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, actions } = useApp();
  
  const [recipe, setRecipe] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [servings, setServings] = useState(4);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [userRating, setUserRating] = useState(0);
  const [showNutrition, setShowNutrition] = useState(false);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        setLoading(true);
        const [recipeData, related] = await Promise.all([
          getRecipeById(id),
          getRelatedRecipes(id, 4)
        ]);
        
        setRecipe(recipeData);
        setRelatedRecipes(related);
        setServings(recipeData.servings || 4);
      } catch (error) {
        actions.setError('Failed to load recipe');
        navigate('/recipes');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadRecipe();
    }
  }, [id, actions, navigate]);

  const handleServingsChange = (newServings) => {
    if (newServings >= 1 && newServings <= 12) {
      setServings(newServings);
    }
  };

  const handleFavorite = () => {
    if (state.favorites.includes(recipe.id)) {
      actions.removeFavorite(recipe.id);
    } else {
      actions.addFavorite(recipe.id);
    }
  };

  const handleBookmark = () => {
    if (state.bookmarks.includes(recipe.id)) {
      actions.removeBookmark(recipe.id);
    } else {
      actions.addBookmark(recipe.id);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Show toast notification
    }
  };

  const handleRating = async (rating) => {
    try {
      setUserRating(rating);
      await rateRecipe(recipe.id, rating);
      // Update local recipe rating
      setRecipe(prev => ({
        ...prev,
        rating: (prev.rating * prev.ratingCount + rating) / (prev.ratingCount + 1),
        ratingCount: prev.ratingCount + 1
      }));
    } catch (error) {
      actions.setError('Failed to submit rating');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const servingsMultiplier = servings / (recipe?.servings || 4);

  if (loading) {
    return <Loading />;
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recipe not found</h2>
          <Button onClick={() => navigate('/recipes')}>
            Back to Recipes
          </Button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'instructions', label: 'Instructions' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-video md:aspect-[21/9] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="absolute top-4 left-4">
          <Button
            variant="outline"
            icon={ArrowLeft}
            onClick={() => navigate('/recipes')}
            className="bg-white/90 hover:bg-white"
          >
            Back to Recipes
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {recipe.title}
            </h1>
            <p className="text-lg mb-6 max-w-2xl">
              {recipe.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{recipe.totalTime} mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>{recipe.rating?.toFixed(1)} ({recipe.ratingCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                onClick={handleFavorite}
                variant="outline"
                icon={Heart}
                className={state.favorites.includes(recipe.id) ? 'text-red-600 border-red-600' : ''}
              >
                {state.favorites.includes(recipe.id) ? 'Favorited' : 'Favorite'}
              </Button>
              <Button
                onClick={handleBookmark}
                variant="outline"
                icon={Bookmark}
                className={state.bookmarks.includes(recipe.id) ? 'text-blue-600 border-blue-600' : ''}
              >
                {state.bookmarks.includes(recipe.id) ? 'Saved' : 'Save'}
              </Button>
              <Button onClick={handleShare} variant="outline" icon={Share2}>
                Share
              </Button>
              <Button onClick={handlePrint} variant="outline" icon={Print}>
                Print
              </Button>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Rate this recipe</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`text-2xl ${
                      star <= userRating ? 'text-yellow-400' : 'text-gray-300'
                    } hover:text-yellow-400 transition-colors`}
                  >
                    <Star className="h-6 w-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium border-b-2 ${
                        activeTab === tab.id
                          ? 'border-primary-600 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'ingredients' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Ingredients</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">Servings:</span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="small"
                            variant="outline"
                            icon={Minus}
                            onClick={() => handleServingsChange(servings - 1)}
                            disabled={servings <= 1}
                          />
                          <span className="w-8 text-center font-medium">{servings}</span>
                          <Button
                            size="small"
                            variant="outline"
                            icon={Plus}
                            onClick={() => handleServingsChange(servings + 1)}
                            disabled={servings >= 12}
                          />
                        </div>
                      </div>
                    </div>
                    <IngredientList
                      ingredients={recipe.ingredients}
                      servingsMultiplier={servingsMultiplier}
                    />
                  </div>
                )}

                {activeTab === 'instructions' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Instructions</h3>
                    <div className="space-y-6">
                      {recipe.instructions?.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed">{step.text}</p>
                            {step.time && (
                              <p className="text-sm text-gray-500 mt-1">
                                ⏱️ {step.time}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'nutrition' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Nutrition Information</h3>
                    <p className="text-sm text-gray-600 mb-4">Per serving</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {recipe.nutrition && Object.entries(recipe.nutrition).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Reviews</h3>
                    <div className="space-y-6">
                      {recipe.reviews?.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium">{review.author[0]}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">{review.author}</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recipe Info Card */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recipe Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prep Time:</span>
                  <span className="font-medium">{recipe.prepTime} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cook Time:</span>
                  <span className="font-medium">{recipe.cookTime} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Time:</span>
                  <span className="font-medium">{recipe.totalTime} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Servings:</span>
                  <span className="font-medium">{recipe.servings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium capitalize">{recipe.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cuisine:</span>
                  <span className="font-medium">{recipe.cuisine}</span>
                </div>
              </div>
            </div>

            {/* Chef's Notes */}
            {recipe.notes && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Chef's Notes</h3>
                <p className="text-yellow-700">{recipe.notes}</p>
              </div>
            )}

            {/* Related Recipes */}
            {relatedRecipes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">You might also like</h3>
                <div className="space-y-4">
                  {relatedRecipes.map((relatedRecipe) => (
                    <RecipeCard
                      key={relatedRecipe.id}
                      recipe={relatedRecipe}
                      onClick={() => navigate(`/recipe/${relatedRecipe.id}`)}
                      variant="compact"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;