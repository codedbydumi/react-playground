import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, ChefHat, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  const navigate = useNavigate();

  const suggestions = [
    {
      icon: Home,
      title: 'Go Home',
      description: 'Return to our homepage and start fresh',
      action: () => navigate('/'),
      buttonText: 'Take me home'
    },
    {
      icon: Search,
      title: 'Search Recipes',
      description: 'Find delicious recipes in our collection',
      action: () => navigate('/recipes'),
      buttonText: 'Browse recipes'
    },
    {
      icon: ChefHat,
      title: 'Read Our Blog',
      description: 'Discover cooking tips and culinary inspiration',
      action: () => navigate('/blog'),
      buttonText: 'Read blog posts'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-200 mb-4">404</div>
          <div className="relative">
            <ChefHat className="h-24 w-24 text-primary-400 mx-auto" />
            <div className="absolute -top-2 -right-2 text-4xl">😵</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Oops! Recipe Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Looks like this page went missing from our cookbook. Don't worry, 
            there are plenty of other delicious options to explore!
          </p>
          
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            icon={ArrowLeft}
            className="mb-8"
          >
            Go Back
          </Button>
        </div>

        {/* Suggestions */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <suggestion.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {suggestion.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {suggestion.description}
              </p>
              <Button
                onClick={suggestion.action}
                variant="outline"
                fullWidth
              >
                {suggestion.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Fun Food Facts */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            While you're here, did you know?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🍅</div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Tomatoes are fruits!</h3>
                <p className="text-sm text-gray-600">
                  Botanically speaking, tomatoes are fruits because they develop from the flower and contain seeds.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">🥕</div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Carrots weren't always orange</h3>
                <p className="text-sm text-gray-600">
                  Originally, carrots were purple, white, and yellow. Orange carrots were developed in the Netherlands.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">🍯</div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Honey never spoils</h3>
                <p className="text-sm text-gray-600">
                  Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">🌶️</div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Spicy food can make you happy</h3>
                <p className="text-sm text-gray-600">
                  Eating spicy food releases endorphins, which are natural "feel-good" chemicals in your brain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Try searching for it:
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search recipes, ingredients..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    navigate(`/recipes?search=${encodeURIComponent(e.target.value)}`);
                  }
                }}
              />
              <Button
                icon={Search}
                onClick={(e) => {
                  const input = e.target.parentElement.querySelector('input');
                  if (input.value.trim()) {
                    navigate(`/recipes?search=${encodeURIComponent(input.value)}`);
                  }
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;