/**
 * Recipe-specific utility functions
 */

/**
 * Calculate total time for a recipe
 */
export function calculateTotalTime(prepTime, cookTime) {
  const prep = parseInt(prepTime) || 0;
  const cook = parseInt(cookTime) || 0;
  return prep + cook;
}

/**
 * Scale recipe ingredients based on serving size
 */
export function scaleIngredients(ingredients, originalServings, newServings) {
  const multiplier = newServings / originalServings;
  
  return ingredients.map(ingredient => ({
    ...ingredient,
    quantity: scaleQuantity(ingredient.quantity, multiplier)
  }));
}

/**
 * Scale individual ingredient quantity
 */
export function scaleQuantity(quantity, multiplier) {
  // Handle numeric quantities
  if (typeof quantity === 'number') {
    const scaled = quantity * multiplier;
    return parseFloat(scaled.toFixed(2));
  }
  
  // Handle string quantities with fractions
  if (typeof quantity === 'string') {
    const fractionMap = {
      '1/8': 0.125,
      '1/4': 0.25,
      '1/3': 0.333,
      '1/2': 0.5,
      '2/3': 0.667,
      '3/4': 0.75,
      '7/8': 0.875
    };
    
    // Convert mixed numbers and fractions to decimal
    let numericValue = 0;
    const parts = quantity.split(' ');
    
    parts.forEach(part => {
      if (fractionMap[part]) {
        numericValue += fractionMap[part];
      } else if (!isNaN(parseFloat(part))) {
        numericValue += parseFloat(part);
      }
    });
    
    if (numericValue > 0) {
      const scaled = numericValue * multiplier;
      return convertDecimalToFraction(scaled);
    }
  }
  
  return quantity; // Return original if unable to scale
}

/**
 * Convert decimal to fraction for display
 */
export function convertDecimalToFraction(decimal) {
  const tolerance = 1.0e-6;
  let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
  let b = decimal;
  
  do {
    const a = Math.floor(b);
    let aux = h1;
    h1 = a * h1 + h2;
    h2 = aux;
    aux = k1;
    k1 = a * k1 + k2;
    k2 = aux;
    b = 1 / (b - a);
  } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);
  
  const whole = Math.floor(h1 / k1);
  const numerator = h1 % k1;
  const denominator = k1;
  
  if (numerator === 0) {
    return whole.toString();
  } else if (whole === 0) {
    return `${numerator}/${denominator}`;
  } else {
    return `${whole} ${numerator}/${denominator}`;
  }
}

/**
 * Calculate nutritional information totals
 */
export function calculateNutritionTotals(ingredients) {
  const totals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0
  };
  
  ingredients.forEach(ingredient => {
    if (ingredient.nutrition) {
      Object.keys(totals).forEach(key => {
        if (ingredient.nutrition[key]) {
          totals[key] += parseFloat(ingredient.nutrition[key]) || 0;
        }
      });
    }
  });
  
  return totals;
}

/**
 * Parse cooking time string to minutes
 */
export function parseTimeToMinutes(timeString) {
  if (typeof timeString === 'number') {
    return timeString;
  }
  
  if (typeof timeString !== 'string') {
    return 0;
  }
  
  let totalMinutes = 0;
  
  // Match hours (e.g., "2h", "2 hours", "2 hrs")
  const hourMatch = timeString.match(/(\d+)\s*(?:h|hour|hrs|hours)/i);
  if (hourMatch) {
    totalMinutes += parseInt(hourMatch[1]) * 60;
  }
  
  // Match minutes (e.g., "30m", "30 minutes", "30 mins")
  const minuteMatch = timeString.match(/(\d+)\s*(?:m|min|mins|minutes)/i);
  if (minuteMatch) {
    totalMinutes += parseInt(minuteMatch[1]);
  }
  
  // If no units found, assume minutes
  if (!hourMatch && !minuteMatch) {
    const numberMatch = timeString.match(/(\d+)/);
    if (numberMatch) {
      totalMinutes = parseInt(numberMatch[1]);
    }
  }
  
  return totalMinutes;
}

/**
 * Format cooking time from minutes to readable string
 */
export function formatCookingTime(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Calculate recipe difficulty score based on factors
 */
export function calculateDifficultyScore(recipe) {
  let score = 0;
  
  // Factor 1: Number of ingredients
  const ingredientCount = recipe.ingredients?.length || 0;
  if (ingredientCount <= 5) score += 1;
  else if (ingredientCount <= 10) score += 2;
  else score += 3;
  
  // Factor 2: Number of steps
  const stepCount = recipe.instructions?.length || 0;
  if (stepCount <= 5) score += 1;
  else if (stepCount <= 10) score += 2;
  else score += 3;
  
  // Factor 3: Cooking time
  const totalTime = recipe.totalTime || 0;
  if (totalTime <= 30) score += 1;
  else if (totalTime <= 60) score += 2;
  else score += 3;
  
  // Factor 4: Cooking methods
  const complexMethods = ['braising', 'smoking', 'fermenting', 'curing'];
  const hasComplexMethod = recipe.cookingMethods?.some(method => 
    complexMethods.includes(method.toLowerCase())
  );
  if (hasComplexMethod) score += 2;
  
  // Convert score to difficulty level
  if (score <= 4) return 'easy';
  if (score <= 7) return 'medium';
  return 'hard';
}

/**
 * Generate recipe tags based on ingredients and properties
 */
export function generateRecipeTags(recipe) {
  const tags = [];
  
  // Time-based tags
  if (recipe.totalTime <= 15) tags.push('quick');
  if (recipe.totalTime <= 30) tags.push('weeknight');
  if (recipe.totalTime >= 120) tags.push('weekend-project');
  
  // Difficulty-based tags
  if (recipe.difficulty === 'easy') tags.push('beginner-friendly');
  if (recipe.difficulty === 'hard') tags.push('advanced');
  
  // Serving-based tags
  if (recipe.servings >= 6) tags.push('crowd-pleaser');
  if (recipe.servings <= 2) tags.push('date-night');
  
  // Ingredient-based tags
  const ingredients = recipe.ingredients?.map(ing => ing.name.toLowerCase()) || [];
  if (ingredients.some(ing => ing.includes('chicken'))) tags.push('chicken');
  if (ingredients.some(ing => ing.includes('beef'))) tags.push('beef');
  if (ingredients.some(ing => ing.includes('chocolate'))) tags.push('chocolate');
  
  // Method-based tags
  if (recipe.cookingMethods?.includes('grilling')) tags.push('grilled');
  if (recipe.cookingMethods?.includes('baking')) tags.push('baked');
  if (!recipe.cookingMethods?.some(method => ['baking', 'frying', 'grilling'].includes(method))) {
    tags.push('no-cook');
  }
  
  return [...new Set(tags)]; // Remove duplicates
}

/**
 * Check if recipe matches dietary restrictions
 */
export function matchesDietaryRestrictions(recipe, restrictions) {
  if (!restrictions || restrictions.length === 0) return true;
  
  const recipeTags = recipe.tags?.map(tag => tag.toLowerCase()) || [];
  const recipeCategories = recipe.categories?.map(cat => cat.toLowerCase()) || [];
  const allRecipeLabels = [...recipeTags, ...recipeCategories];
  
  return restrictions.every(restriction => {
    const restrictionLower = restriction.toLowerCase();
    return allRecipeLabels.includes(restrictionLower) || 
           recipe.dietaryInfo?.[restrictionLower] === true;
  });
}

/**
 * Search recipes by ingredients
 */
export function searchByIngredients(recipes, searchIngredients) {
  if (!searchIngredients || searchIngredients.length === 0) {
    return recipes;
  }
  
  const searchTerms = searchIngredients.map(ing => ing.toLowerCase());
  
  return recipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients?.map(ing => 
      ing.name.toLowerCase()
    ) || [];
    
    return searchTerms.some(term => 
      recipeIngredients.some(ingredient => ingredient.includes(term))
    );
  });
}

/**
 * Calculate recipe rating summary
 */
export function calculateRatingSummary(ratings) {
  if (!ratings || ratings.length === 0) {
    return {
      average: 0,
      total: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };
  }
  
  const total = ratings.length;
  const sum = ratings.reduce((acc, rating) => acc + rating.value, 0);
  const average = sum / total;
  
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  ratings.forEach(rating => {
    distribution[rating.value]++;
  });
  
  return {
    average: Math.round(average * 10) / 10,
    total,
    distribution
  };
}

/**
 * Convert recipe to shopping list format
 */
export function recipeToShoppingList(recipe, servings = null) {
  if (!recipe.ingredients) return [];
  
  const targetServings = servings || recipe.servings;
  const scaledIngredients = servings && servings !== recipe.servings
    ? scaleIngredients(recipe.ingredients, recipe.servings, targetServings)
    : recipe.ingredients;
  
  return scaledIngredients.map(ingredient => ({
    id: generateId(),
    name: ingredient.name,
    quantity: ingredient.quantity,
    unit: ingredient.unit,
    category: ingredient.category || 'Other',
    checked: false,
    recipeId: recipe.id,
    recipeName: recipe.title
  }));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}