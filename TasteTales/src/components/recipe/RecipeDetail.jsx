import React, { useState } from 'react';
import { Clock, Users, ChefHat, Heart, Share2, Printer, ChevronLeft, Check } from 'lucide-react';
import Button from '../common/Button';
import IngredientList from './IngredientList';

const RecipeDetail = ({ recipe, onBack }) => {
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStepCompletion = (stepIndex) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const adjustServings = (newServings) => {
    const multiplier = newServings / recipe.servings;
    setServingsMultiplier(multiplier);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Button
        onClick={onBack}
        variant="ghost"
        icon={ChevronLeft}
        className="mb-4"
      >
        Back to Recipes
      </Button>

      {/* Recipe Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="relative h-96">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-display font-bold mb-2">{recipe.title}</h1>
            <p className="text-lg opacity-90">{recipe.description}</p>
          </div>
        </div>

        {/* Recipe Meta */}
        <div className="p-6 border-b">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Cook Time</p>
                  <p className="font-semibold">{recipe.cookTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Servings</p>
                  <select 
                    value={recipe.servings * servingsMultiplier}
                    onChange={(e) => adjustServings(parseInt(e.target.value))}
                    className="font-semibold border rounded px-2 py-1"
                  >
                    {[2, 4, 6, 8, 10, 12].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-semibold capitalize">{recipe.difficulty}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="small" icon={Heart}>
                Save
              </Button>
              <Button variant="outline" size="small" icon={Share2} onClick={handleShare}>
                Share
              </Button>
              <Button variant="outline" size="small" icon={Printer} onClick={handlePrint}>
                Print
              </Button>
            </div>
          </div>
        </div>

        {/* Nutrition Info */}
        {recipe.nutrition && (
          <div className="p-6 bg-gray-50 border-b">
            <h3 className="font-semibold mb-3">Nutrition Information</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(recipe.nutrition).map(([key, value]) => (
                <div key={key} className="text-center">
                  <p className="text-2xl font-bold text-primary-600">{value}</p>
                  <p className="text-sm text-gray-600 capitalize">{key}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
            <h2 className="text-2xl font-display font-bold mb-4">Ingredients</h2>
            <IngredientList 
              ingredients={recipe.ingredients} 
              servingsMultiplier={servingsMultiplier}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-display font-bold mb-6">Instructions</h2>
            <div className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    completedSteps.includes(index) 
                      ? 'bg-green-50 border-green-500' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleStepCompletion(index)}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    completedSteps.includes(index)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {completedSteps.includes(index) ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <p className={`text-gray-700 ${completedSteps.includes(index) ? 'line-through opacity-60' : ''}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          {recipe.tips && recipe.tips.length > 0 && (
            <div className="bg-yellow-50 rounded-lg shadow-lg p-6 mt-6">
              <h3 className="text-xl font-display font-bold mb-4">Chef's Tips</h3>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;