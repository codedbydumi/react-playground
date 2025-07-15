import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import Button from '../common/Button';

const IngredientList = ({ ingredients, servingsMultiplier = 1 }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const adjustQuantity = (quantity) => {
    if (typeof quantity === 'number') {
      return (quantity * servingsMultiplier).toFixed(1).replace(/\.0$/, '');
    }
    
    // Handle fractions and mixed numbers
    const fractionMap = {
      '1/4': 0.25,
      '1/3': 0.33,
      '1/2': 0.5,
      '2/3': 0.67,
      '3/4': 0.75
    };

    let numericQuantity = 0;
    const parts = quantity.split(' ');
    
    parts.forEach(part => {
      if (fractionMap[part]) {
        numericQuantity += fractionMap[part];
      } else if (!isNaN(part)) {
        numericQuantity += parseFloat(part);
      }
    });

    if (numericQuantity > 0) {
      const adjusted = numericQuantity * servingsMultiplier;
      return adjusted.toFixed(1).replace(/\.0$/, '');
    }

    return quantity;
  };

  const handleAddToShoppingList = () => {
    const uncheckedIngredients = ingredients
      .filter((_, index) => !checkedIngredients.includes(index))
      .map(ing => `${adjustQuantity(ing.quantity)} ${ing.unit} ${ing.name}`);
    
    console.log('Add to shopping list:', uncheckedIngredients);
    // In a real app, this would save to a shopping list
  };

  return (
    <div>
      <div className="space-y-2 mb-4">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            onClick={() => toggleIngredient(index)}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
              checkedIngredients.includes(index)
                ? 'bg-gray-100 text-gray-500'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
              checkedIngredients.includes(index)
                ? 'bg-primary-600 border-primary-600'
                : 'border-gray-300'
            }`}>
              {checkedIngredients.includes(index) && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
            <div className={`flex-1 ${checkedIngredients.includes(index) ? 'line-through' : ''}`}>
              <span className="font-medium">
                {adjustQuantity(ingredient.quantity)}
              </span>
              {ingredient.unit && (
                <span className="ml-1 text-gray-600">{ingredient.unit}</span>
              )}
              <span className="ml-2">{ingredient.name}</span>
              {ingredient.preparation && (
                <span className="text-gray-500 text-sm ml-1">
                  ({ingredient.preparation})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={handleAddToShoppingList}
        variant="outline"
        size="small"
        fullWidth
        icon={ShoppingCart}
        disabled={checkedIngredients.length === ingredients.length}
      >
        Add to Shopping List
      </Button>

      {servingsMultiplier !== 1 && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          Quantities adjusted for {Math.round(servingsMultiplier * 4)} servings
        </p>
      )}
    </div>
  );
};

export default IngredientList;