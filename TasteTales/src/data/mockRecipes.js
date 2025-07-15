/**
 * Mock recipe data for development and testing
 */

export const mockRecipes = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    description: "A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper. Creamy without cream!",
    image: "/api/placeholder/600/400",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: "medium",
    cuisine: "Italian",
    category: "dinner",
    rating: 4.8,
    ratingCount: 324,
    calories: 520,
    tags: ["pasta", "italian", "quick", "comfort-food"],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "Spaghetti", quantity: "1", unit: "lb", category: "Pasta & Grains" },
      { name: "Pancetta", quantity: "6", unit: "oz", preparation: "diced", category: "Meat" },
      { name: "Large eggs", quantity: "3", unit: "whole", category: "Dairy & Eggs" },
      { name: "Parmesan cheese", quantity: "1", unit: "cup", preparation: "grated", category: "Dairy & Eggs" },
      { name: "Black pepper", quantity: "1", unit: "tsp", preparation: "freshly ground", category: "Spices" },
      { name: "Salt", quantity: "1", unit: "tsp", category: "Spices" }
    ],
    instructions: [
      { 
        step: 1,
        text: "Bring a large pot of salted water to boil for the pasta.",
        time: "5 mins"
      },
      {
        step: 2,
        text: "In a large skillet, cook pancetta over medium heat until crispy, about 5-7 minutes.",
        time: "7 mins"
      },
      {
        step: 3,
        text: "In a bowl, whisk together eggs, grated Parmesan, and black pepper.",
        time: "2 mins"
      },
      {
        step: 4,
        text: "Cook spaghetti according to package directions until al dente. Reserve 1 cup pasta water.",
        time: "10 mins"
      },
      {
        step: 5,
        text: "Add hot pasta to the skillet with pancetta. Remove from heat and quickly stir in egg mixture, adding pasta water as needed to create a creamy sauce.",
        time: "3 mins"
      }
    ],
    nutrition: {
      calories: "520",
      protein: "28g",
      carbs: "55g",
      fat: "22g",
      fiber: "3g",
      sugar: "3g",
      sodium: "890mg"
    },
    notes: "The key is to work quickly when adding the egg mixture to prevent scrambling. The residual heat from the pasta and pancetta will cook the eggs gently.",
    cookingMethods: ["boiling", "sautéing"],
    equipment: ["Large pot", "Large skillet", "Mixing bowl", "Whisk"],
    difficulty_factors: {
      technique: "medium",
      time: "quick",
      ingredients: "simple"
    }
  },
  {
    id: 2,
    title: "Chocolate Chip Cookies",
    description: "Perfect chewy chocolate chip cookies with crispy edges and soft centers. A family favorite!",
    image: "/api/placeholder/600/400",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 24,
    difficulty: "easy",
    cuisine: "American",
    category: "dessert",
    rating: 4.9,
    ratingCount: 456,
    calories: 180,
    tags: ["cookies", "chocolate", "baking", "family-friendly"],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "All-purpose flour", quantity: "2 1/4", unit: "cups", category: "Baking" },
      { name: "Baking soda", quantity: "1", unit: "tsp", category: "Baking" },
      { name: "Salt", quantity: "1", unit: "tsp", category: "Spices" },
      { name: "Butter", quantity: "1", unit: "cup", preparation: "softened", category: "Dairy & Eggs" },
      { name: "Granulated sugar", quantity: "3/4", unit: "cup", category: "Baking" },
      { name: "Brown sugar", quantity: "3/4", unit: "cup", preparation: "packed", category: "Baking" },
      { name: "Large eggs", quantity: "2", unit: "whole", category: "Dairy & Eggs" },
      { name: "Vanilla extract", quantity: "2", unit: "tsp", category: "Baking" },
      { name: "Chocolate chips", quantity: "2", unit: "cups", category: "Baking" }
    ],
    instructions: [
      {
        step: 1,
        text: "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
        time: "2 mins"
      },
      {
        step: 2,
        text: "In a medium bowl, whisk together flour, baking soda, and salt. Set aside.",
        time: "2 mins"
      },
      {
        step: 3,
        text: "In a large bowl, cream together butter and both sugars until light and fluffy, about 3-4 minutes.",
        time: "4 mins"
      },
      {
        step: 4,
        text: "Beat in eggs one at a time, then stir in vanilla extract.",
        time: "2 mins"
      },
      {
        step: 5,
        text: "Gradually blend in flour mixture, then fold in chocolate chips.",
        time: "3 mins"
      },
      {
        step: 6,
        text: "Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.",
        time: "2 mins"
      },
      {
        step: 7,
        text: "Bake for 9-11 minutes or until golden brown. Cool on baking sheet for 2 minutes before transferring to wire rack.",
        time: "12 mins"
      }
    ],
    nutrition: {
      calories: "180",
      protein: "2g",
      carbs: "26g",
      fat: "8g",
      fiber: "1g",
      sugar: "18g",
      sodium: "125mg"
    },
    notes: "For chewier cookies, slightly underbake them. For crispier cookies, bake an extra 1-2 minutes.",
    cookingMethods: ["baking"],
    equipment: ["Electric mixer", "Baking sheets", "Parchment paper", "Wire rack"],
    difficulty_factors: {
      technique: "easy",
      time: "quick",
      ingredients: "simple"
    }
  },
  {
    id: 3,
    title: "Thai Green Curry",
    description: "Aromatic and spicy Thai green curry with vegetables and your choice of protein in coconut milk.",
    image: "/api/placeholder/600/400",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 4,
    difficulty: "medium",
    cuisine: "Thai",
    category: "dinner",
    rating: 4.7,
    ratingCount: 189,
    calories: 350,
    tags: ["curry", "thai", "spicy", "coconut", "gluten-free"],
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      keto: false,
      paleo: true
    },
    ingredients: [
      { name: "Green curry paste", quantity: "3", unit: "tbsp", category: "Condiments" },
      { name: "Coconut milk", quantity: "1", unit: "can (14 oz)", category: "Canned Goods" },
      { name: "Vegetable broth", quantity: "1", unit: "cup", category: "Pantry" },
      { name: "Thai eggplant", quantity: "2", unit: "medium", preparation: "sliced", category: "Vegetables" },
      { name: "Bell peppers", quantity: "2", unit: "medium", preparation: "sliced", category: "Vegetables" },
      { name: "Bamboo shoots", quantity: "1/2", unit: "cup", preparation: "sliced", category: "Vegetables" },
      { name: "Thai basil", quantity: "1/4", unit: "cup", preparation: "leaves", category: "Herbs" },
      { name: "Fish sauce", quantity: "2", unit: "tbsp", category: "Condiments" },
      { name: "Palm sugar", quantity: "1", unit: "tbsp", category: "Condiments" },
      { name: "Lime juice", quantity: "1", unit: "tbsp", category: "Produce" }
    ],
    instructions: [
      {
        step: 1,
        text: "Heat 2 tablespoons of coconut cream from the top of the can in a large pot over medium heat.",
        time: "2 mins"
      },
      {
        step: 2,
        text: "Add green curry paste and fry for 2-3 minutes until fragrant.",
        time: "3 mins"
      },
      {
        step: 3,
        text: "Gradually add remaining coconut milk and vegetable broth, stirring constantly.",
        time: "3 mins"
      },
      {
        step: 4,
        text: "Add eggplant and simmer for 10 minutes until tender.",
        time: "10 mins"
      },
      {
        step: 5,
        text: "Add bell peppers and bamboo shoots, cook for 5 minutes.",
        time: "5 mins"
      },
      {
        step: 6,
        text: "Season with fish sauce, palm sugar, and lime juice. Adjust to taste.",
        time: "2 mins"
      },
      {
        step: 7,
        text: "Garnish with Thai basil leaves and serve with jasmine rice.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "350",
      protein: "8g",
      carbs: "15g",
      fat: "28g",
      fiber: "4g",
      sugar: "8g",
      sodium: "950mg"
    },
    notes: "For vegan version, substitute fish sauce with soy sauce or tamari. Adjust spice level by using more or less curry paste.",
    cookingMethods: ["simmering", "sautéing"],
    equipment: ["Large pot", "Wooden spoon"],
    difficulty_factors: {
      technique: "medium",
      time: "moderate",
      ingredients: "specialized"
    }
  }
];

export const mockFeaturedRecipes = mockRecipes.slice(0, 3);

export const mockPopularRecipes = [
  ...mockRecipes,
  {
    id: 4,
    title: "Avocado Toast",
    description: "Simple and nutritious avocado toast with various topping options.",
    image: "/api/placeholder/600/400",
    prepTime: 5,
    cookTime: 3,
    totalTime: 8,
    servings: 2,
    difficulty: "easy",
    cuisine: "American",
    category: "breakfast",
    rating: 4.5,
    ratingCount: 234,
    calories: 280,
    tags: ["healthy", "quick", "vegetarian", "avocado"],
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true,
      keto: false,
      paleo: false
    }
  }
];

export const recipeCategories = [
  { id: 'breakfast', name: 'Breakfast', count: 45, image: '/api/placeholder/300/200' },
  { id: 'lunch', name: 'Lunch', count: 67, image: '/api/placeholder/300/200' },
  { id: 'dinner', name: 'Dinner', count: 123, image: '/api/placeholder/300/200' },
  { id: 'dessert', name: 'Dessert', count: 89, image: '/api/placeholder/300/200' },
  { id: 'snack', name: 'Snacks', count: 34, image: '/api/placeholder/300/200' },
  { id: 'beverage', name: 'Beverages', count: 28, image: '/api/placeholder/300/200' }
];

export const popularIngredients = [
  'chicken', 'tomatoes', 'onions', 'garlic', 'olive oil', 'salt', 'pepper',
  'eggs', 'flour', 'butter', 'cheese', 'milk', 'herbs', 'spices'
];

export const cookingTips = [
  {
    id: 1,
    title: "Always taste as you go",
    description: "Seasoning should be adjusted throughout the cooking process, not just at the end."
  },
  {
    id: 2,
    title: "Keep your knives sharp",
    description: "Sharp knives are safer and make prep work much more efficient."
  },
  {
    id: 3,
    title: "Read the entire recipe first",
    description: "Understanding all steps before starting prevents mistakes and timing issues."
  }
];