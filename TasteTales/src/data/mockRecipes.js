/**
 * Mock recipe data for development and testing
 */

export const mockRecipes = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    description: "A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper. Creamy without cream!",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop&crop=center",
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
  },
  {
    id: 4,
    title: "Avocado Toast",
    description: "Simple and nutritious avocado toast with various topping options.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop&crop=center",
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
    },
    ingredients: [
      { name: "Whole grain bread", quantity: "4", unit: "slices", category: "Bread" },
      { name: "Ripe avocados", quantity: "2", unit: "medium", category: "Produce" },
      { name: "Lemon juice", quantity: "1", unit: "tbsp", category: "Produce" },
      { name: "Salt", quantity: "1/2", unit: "tsp", category: "Spices" },
      { name: "Black pepper", quantity: "1/4", unit: "tsp", category: "Spices" },
      { name: "Red pepper flakes", quantity: "1/4", unit: "tsp", category: "Spices" }
    ],
    instructions: [
      {
        step: 1,
        text: "Toast bread slices until golden brown and crispy.",
        time: "3 mins"
      },
      {
        step: 2,
        text: "Cut avocados in half, remove pit, and scoop flesh into a bowl.",
        time: "2 mins"
      },
      {
        step: 3,
        text: "Mash avocados with lemon juice, salt, and pepper until desired consistency.",
        time: "2 mins"
      },
      {
        step: 4,
        text: "Spread avocado mixture on toast and sprinkle with red pepper flakes.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "280",
      protein: "8g",
      carbs: "32g",
      fat: "15g",
      fiber: "12g",
      sugar: "3g",
      sodium: "420mg"
    },
    notes: "Add toppings like cherry tomatoes, feta cheese, or poached eggs for extra flavor and nutrition.",
    cookingMethods: ["toasting"],
    equipment: ["Toaster", "Mixing bowl", "Fork"],
    difficulty_factors: {
      technique: "easy",
      time: "quick",
      ingredients: "simple"
    }
  },
  {
    id: 5,
    title: "Chicken Tikka Masala",
    description: "Tender chicken pieces in a rich, creamy tomato-based sauce with aromatic spices.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop&crop=center",
    prepTime: 30,
    cookTime: 40,
    totalTime: 70,
    servings: 6,
    difficulty: "medium",
    cuisine: "Indian",
    category: "dinner",
    rating: 4.6,
    ratingCount: 567,
    calories: 420,
    tags: ["indian", "curry", "chicken", "creamy", "spicy"],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "Chicken breast", quantity: "2", unit: "lbs", preparation: "cut into chunks", category: "Meat" },
      { name: "Plain yogurt", quantity: "1/2", unit: "cup", category: "Dairy & Eggs" },
      { name: "Garam masala", quantity: "2", unit: "tbsp", category: "Spices" },
      { name: "Onion", quantity: "1", unit: "large", preparation: "diced", category: "Vegetables" },
      { name: "Garlic", quantity: "4", unit: "cloves", preparation: "minced", category: "Vegetables" },
      { name: "Ginger", quantity: "1", unit: "tbsp", preparation: "grated", category: "Vegetables" },
      { name: "Tomato sauce", quantity: "1", unit: "can (14 oz)", category: "Canned Goods" },
      { name: "Heavy cream", quantity: "1/2", unit: "cup", category: "Dairy & Eggs" },
      { name: "Turmeric", quantity: "1", unit: "tsp", category: "Spices" },
      { name: "Paprika", quantity: "1", unit: "tsp", category: "Spices" },
      { name: "Cumin", quantity: "1", unit: "tsp", category: "Spices" }
    ],
    instructions: [
      {
        step: 1,
        text: "Marinate chicken with yogurt, half the garam masala, and salt for 30 minutes.",
        time: "30 mins"
      },
      {
        step: 2,
        text: "Cook marinated chicken in a large skillet until browned. Remove and set aside.",
        time: "8 mins"
      },
      {
        step: 3,
        text: "In the same skillet, sauté onions until golden, then add garlic and ginger.",
        time: "5 mins"
      },
      {
        step: 4,
        text: "Add remaining spices and cook for 1 minute until fragrant.",
        time: "1 min"
      },
      {
        step: 5,
        text: "Add tomato sauce and simmer for 10 minutes.",
        time: "10 mins"
      },
      {
        step: 6,
        text: "Return chicken to skillet, add cream, and simmer for 15 minutes.",
        time: "15 mins"
      },
      {
        step: 7,
        text: "Adjust seasoning and serve with basmati rice and naan bread.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "420",
      protein: "35g",
      carbs: "12g",
      fat: "26g",
      fiber: "3g",
      sugar: "8g",
      sodium: "780mg"
    },
    notes: "For a lighter version, substitute heavy cream with coconut milk. Adjust spice level to taste.",
    cookingMethods: ["marinating", "sautéing", "simmering"],
    equipment: ["Large skillet", "Mixing bowl"],
    difficulty_factors: {
      technique: "medium",
      time: "lengthy",
      ingredients: "specialized"
    }
  },
  {
    id: 6,
    title: "Classic Caesar Salad",
    description: "Crisp romaine lettuce with homemade Caesar dressing, parmesan, and croutons.",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&h=400&fit=crop&crop=center",
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    difficulty: "medium",
    cuisine: "American",
    category: "lunch",
    rating: 4.4,
    ratingCount: 298,
    calories: 320,
    tags: ["salad", "classic", "vegetarian", "fresh"],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      keto: true,
      paleo: false
    },
    ingredients: [
      { name: "Romaine lettuce", quantity: "2", unit: "heads", preparation: "chopped", category: "Produce" },
      { name: "Parmesan cheese", quantity: "1/2", unit: "cup", preparation: "grated", category: "Dairy & Eggs" },
      { name: "Bread", quantity: "3", unit: "slices", preparation: "cubed", category: "Bread" },
      { name: "Egg yolk", quantity: "1", unit: "large", category: "Dairy & Eggs" },
      { name: "Lemon juice", quantity: "2", unit: "tbsp", category: "Produce" },
      { name: "Olive oil", quantity: "1/3", unit: "cup", category: "Oils" },
      { name: "Anchovy paste", quantity: "1", unit: "tsp", category: "Condiments" },
      { name: "Garlic", quantity: "2", unit: "cloves", preparation: "minced", category: "Vegetables" },
      { name: "Dijon mustard", quantity: "1", unit: "tsp", category: "Condiments" },
      { name: "Worcestershire sauce", quantity: "1/2", unit: "tsp", category: "Condiments" }
    ],
    instructions: [
      {
        step: 1,
        text: "Preheat oven to 400°F. Toss bread cubes with olive oil and bake for 10 minutes until golden.",
        time: "10 mins"
      },
      {
        step: 2,
        text: "In a large bowl, whisk together egg yolk, lemon juice, garlic, and anchovy paste.",
        time: "3 mins"
      },
      {
        step: 3,
        text: "Slowly drizzle in olive oil while whisking to create an emulsion.",
        time: "5 mins"
      },
      {
        step: 4,
        text: "Add Dijon mustard and Worcestershire sauce, whisk until combined.",
        time: "1 min"
      },
      {
        step: 5,
        text: "Add chopped romaine lettuce and toss with dressing.",
        time: "2 mins"
      },
      {
        step: 6,
        text: "Top with croutons and grated Parmesan cheese.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "320",
      protein: "12g",
      carbs: "18g",
      fat: "24g",
      fiber: "4g",
      sugar: "4g",
      sodium: "620mg"
    },
    notes: "Use the freshest eggs possible for the dressing. For food safety, pasteurized eggs can be used.",
    cookingMethods: ["baking", "whisking"],
    equipment: ["Baking sheet", "Large bowl", "Whisk"],
    difficulty_factors: {
      technique: "medium",
      time: "moderate",
      ingredients: "simple"
    }
  },
  {
    id: 7,
    title: "Beef Tacos",
    description: "Seasoned ground beef in soft tortillas with fresh toppings and lime.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    difficulty: "easy",
    cuisine: "Mexican",
    category: "dinner",
    rating: 4.7,
    ratingCount: 423,
    calories: 380,
    tags: ["tacos", "mexican", "beef", "quick", "family-friendly"],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "Ground beef", quantity: "1", unit: "lb", category: "Meat" },
      { name: "Taco seasoning", quantity: "2", unit: "tbsp", category: "Spices" },
      { name: "Soft tortillas", quantity: "8", unit: "small", category: "Bread" },
      { name: "Lettuce", quantity: "2", unit: "cups", preparation: "shredded", category: "Produce" },
      { name: "Tomatoes", quantity: "2", unit: "medium", preparation: "diced", category: "Produce" },
      { name: "Cheddar cheese", quantity: "1", unit: "cup", preparation: "shredded", category: "Dairy & Eggs" },
      { name: "Sour cream", quantity: "1/2", unit: "cup", category: "Dairy & Eggs" },
      { name: "Lime", quantity: "2", unit: "medium", preparation: "cut into wedges", category: "Produce" },
      { name: "Onion", quantity: "1/2", unit: "medium", preparation: "diced", category: "Vegetables" }
    ],
    instructions: [
      {
        step: 1,
        text: "Cook ground beef in a large skillet over medium-high heat until browned.",
        time: "8 mins"
      },
      {
        step: 2,
        text: "Add taco seasoning and 1/4 cup water. Simmer for 5 minutes.",
        time: "5 mins"
      },
      {
        step: 3,
        text: "Warm tortillas in microwave or dry skillet.",
        time: "2 mins"
      },
      {
        step: 4,
        text: "Fill tortillas with beef mixture and desired toppings.",
        time: "3 mins"
      },
      {
        step: 5,
        text: "Serve with lime wedges and additional toppings on the side.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "380",
      protein: "26g",
      carbs: "28g",
      fat: "18g",
      fiber: "3g",
      sugar: "4g",
      sodium: "720mg"
    },
    notes: "Try adding jalapeños, cilantro, or avocado for extra flavor. Ground turkey can be substituted for beef.",
    cookingMethods: ["sautéing", "warming"],
    equipment: ["Large skillet", "Microwave or small skillet"],
    difficulty_factors: {
      technique: "easy",
      time: "quick",
      ingredients: "simple"
    }
  },
  {
    id: 8,
    title: "Mushroom Risotto",
    description: "Creamy arborio rice with mixed mushrooms and parmesan cheese.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop&crop=center",
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 4,
    difficulty: "hard",
    cuisine: "Italian",
    category: "dinner",
    rating: 4.5,
    ratingCount: 187,
    calories: 450,
    tags: ["risotto", "mushrooms", "italian", "creamy", "vegetarian"],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "Arborio rice", quantity: "1 1/2", unit: "cups", category: "Pasta & Grains" },
      { name: "Mixed mushrooms", quantity: "1", unit: "lb", preparation: "sliced", category: "Vegetables" },
      { name: "Vegetable broth", quantity: "6", unit: "cups", preparation: "warm", category: "Pantry" },
      { name: "White wine", quantity: "1/2", unit: "cup", category: "Pantry" },
      { name: "Onion", quantity: "1", unit: "medium", preparation: "diced", category: "Vegetables" },
      { name: "Garlic", quantity: "3", unit: "cloves", preparation: "minced", category: "Vegetables" },
      { name: "Parmesan cheese", quantity: "3/4", unit: "cup", preparation: "grated", category: "Dairy & Eggs" },
      { name: "Butter", quantity: "3", unit: "tbsp", category: "Dairy & Eggs" },
      { name: "Olive oil", quantity: "2", unit: "tbsp", category: "Oils" },
      { name: "Fresh thyme", quantity: "1", unit: "tbsp", category: "Herbs" }
    ],
    instructions: [
      {
        step: 1,
        text: "Heat broth in a saucepan and keep warm over low heat.",
        time: "5 mins"
      },
      {
        step: 2,
        text: "Sauté mushrooms in olive oil until golden. Season and set aside.",
        time: "8 mins"
      },
      {
        step: 3,
        text: "In the same pan, sauté onion until translucent, add garlic and thyme.",
        time: "5 mins"
      },
      {
        step: 4,
        text: "Add rice and stir for 2 minutes until grains are coated.",
        time: "2 mins"
      },
      {
        step: 5,
        text: "Add wine and stir until absorbed.",
        time: "3 mins"
      },
      {
        step: 6,
        text: "Add warm broth one ladle at a time, stirring constantly until absorbed before adding more.",
        time: "20 mins"
      },
      {
        step: 7,
        text: "Stir in mushrooms, butter, and Parmesan. Season to taste.",
        time: "2 mins"
      }
    ],
    nutrition: {
      calories: "450",
      protein: "14g",
      carbs: "65g",
      fat: "16g",
      fiber: "3g",
      sugar: "6g",
      sodium: "890mg"
    },
    notes: "Patience is key - don't rush the process. The rice should be creamy but still have a slight bite.",
    cookingMethods: ["sautéing", "stirring", "simmering"],
    equipment: ["Large saucepan", "Ladle", "Wooden spoon"],
    difficulty_factors: {
      technique: "hard",
      time: "lengthy",
      ingredients: "specialized"
    }
  },
  {
    id: 9,
    title: "Pancakes",
    description: "Fluffy American-style pancakes perfect for weekend breakfast.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=400&fit=crop&crop=center",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: "easy",
    cuisine: "American",
    category: "breakfast",
    rating: 4.8,
    ratingCount: 512,
    calories: 280,
    tags: ["pancakes", "breakfast", "fluffy", "family-friendly"],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "All-purpose flour", quantity: "2", unit: "cups", category: "Baking" },
      { name: "Sugar", quantity: "2", unit: "tbsp", category: "Baking" },
      { name: "Baking powder", quantity: "2", unit: "tsp", category: "Baking" },
      { name: "Salt", quantity: "1", unit: "tsp", category: "Spices" },
      { name: "Milk", quantity: "1 3/4", unit: "cups", category: "Dairy & Eggs" },
      { name: "Large eggs", quantity: "2", unit: "whole", category: "Dairy & Eggs" },
      { name: "Butter", quantity: "4", unit: "tbsp", preparation: "melted", category: "Dairy & Eggs" },
      { name: "Vanilla extract", quantity: "1", unit: "tsp", category: "Baking" }
    ],
    instructions: [
      {
        step: 1,
        text: "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
        time: "2 mins"
      },
      {
        step: 2,
        text: "In another bowl, whisk together milk, eggs, melted butter, and vanilla.",
        time: "3 mins"
      },
      {
        step: 3,
        text: "Pour wet ingredients into dry ingredients and stir until just combined. Don't overmix.",
        time: "2 mins"
      },
      {
        step: 4,
        text: "Heat a griddle or large skillet over medium heat. Lightly grease with butter.",
        time: "3 mins"
      },
      {
        step: 5,
        text: "Pour 1/4 cup batter for each pancake. Cook until bubbles form on surface, then flip.",
        time: "4 mins"
      },
      {
        step: 6,
        text: "Cook until golden brown on both sides. Serve immediately with syrup.",
        time: "2 mins"
      }
    ],
    nutrition: {
      calories: "280",
      protein: "8g",
      carbs: "42g",
      fat: "9g",
      fiber: "2g",
      sugar: "8g",
      sodium: "520mg"
    },
    notes: "Don't overmix the batter - a few lumps are fine. This keeps pancakes tender and fluffy.",
    cookingMethods: ["griddle cooking"],
    equipment: ["Large bowl", "Whisk", "Griddle or large skillet"],
    difficulty_factors: {
      technique: "easy",
      time: "quick",
      ingredients: "simple"
    }
  },
  {
    id: 10,
    title: "Salmon Teriyaki",
    description: "Glazed salmon fillets with homemade teriyaki sauce and steamed vegetables.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop&crop=center",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: "medium",
    cuisine: "Japanese",
    category: "dinner",
    rating: 4.6,
    ratingCount: 276,
    calories: 340,
    tags: ["salmon", "japanese", "healthy", "fish", "teriyaki"],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: true,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "Salmon fillets", quantity: "4", unit: "6oz pieces", category: "Seafood" },
      { name: "Soy sauce", quantity: "1/3", unit: "cup", category: "Condiments" },
      { name: "Mirin", quantity: "2", unit: "tbsp", category: "Condiments" },
      { name: "Brown sugar", quantity: "2", unit: "tbsp", category: "Baking" },
      { name: "Rice vinegar", quantity: "1", unit: "tbsp", category: "Condiments" },
      { name: "Garlic", quantity: "2", unit: "cloves", preparation: "minced", category: "Vegetables" },
      { name: "Ginger", quantity: "1", unit: "tbsp", preparation: "grated", category: "Vegetables" },
      { name: "Cornstarch", quantity: "1", unit: "tbsp", category: "Baking" },
      { name: "Sesame oil", quantity: "1", unit: "tsp", category: "Oils" },
      { name: "Green onions", quantity: "2", unit: "stalks", preparation: "sliced", category: "Vegetables" }
    ],
    instructions: [
      {
        step: 1,
        text: "In a small saucepan, combine soy sauce, mirin, brown sugar, rice vinegar, garlic, and ginger.",
        time: "3 mins"
      },
      {
        step: 2,
        text: "Bring to a simmer and cook for 5 minutes. Mix cornstarch with 2 tbsp water and stir in.",
        time: "7 mins"
      },
      {
        step: 3,
        text: "Continue cooking until sauce thickens, about 2 minutes. Remove from heat.",
        time: "2 mins"
      },
      {
        step: 4,
        text: "Season salmon fillets with salt and pepper. Heat sesame oil in a large skillet.",
        time: "2 mins"
      },
      {
        step: 5,
        text: "Cook salmon skin-side down for 4 minutes, then flip and cook 3 more minutes.",
        time: "7 mins"
      },
      {
        step: 6,
        text: "Brush salmon with teriyaki sauce and garnish with green onions.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "340",
      protein: "35g",
      carbs: "12g",
      fat: "18g",
      fiber: "0g",
      sugar: "10g",
      sodium: "920mg"
    },
    notes: "Don't overcook the salmon - it should still be slightly pink in the center. Serve with steamed rice and vegetables.",
    cookingMethods: ["pan-searing", "simmering"],
    equipment: ["Small saucepan", "Large skillet"],
    difficulty_factors: {
      technique: "medium",
      time: "moderate",
      ingredients: "specialized"
    }
  },
  {
    id: 11,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop&crop=center",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 4,
    difficulty: "easy",
    cuisine: "Greek",
    category: "lunch",
    rating: 4.4,
    ratingCount: 203,
    calories: 210,
    tags: ["greek", "salad", "mediterranean", "healthy", "vegetarian"],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      keto: true,
      paleo: false
    },
    ingredients: [
      { name: "Tomatoes", quantity: "4", unit: "medium", preparation: "cut into wedges", category: "Produce" },
      { name: "Cucumber", quantity: "1", unit: "large", preparation: "sliced", category: "Produce" },
      { name: "Red onion", quantity: "1/2", unit: "medium", preparation: "thinly sliced", category: "Vegetables" },
      { name: "Kalamata olives", quantity: "1/2", unit: "cup", preparation: "pitted", category: "Canned Goods" },
      { name: "Feta cheese", quantity: "4", unit: "oz", preparation: "crumbled", category: "Dairy & Eggs" },
      { name: "Extra virgin olive oil", quantity: "1/4", unit: "cup", category: "Oils" },
      { name: "Red wine vinegar", quantity: "2", unit: "tbsp", category: "Condiments" },
      { name: "Oregano", quantity: "1", unit: "tsp", preparation: "dried", category: "Spices" },
      { name: "Salt", quantity: "1/2", unit: "tsp", category: "Spices" },
      { name: "Black pepper", quantity: "1/4", unit: "tsp", category: "Spices" }
    ],
    instructions: [
      {
        step: 1,
        text: "Arrange tomato wedges and cucumber slices on a large platter.",
        time: "5 mins"
      },
      {
        step: 2,
        text: "Add red onion slices and olives to the platter.",
        time: "2 mins"
      },
      {
        step: 3,
        text: "Crumble feta cheese over the vegetables.",
        time: "2 mins"
      },
      {
        step: 4,
        text: "In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.",
        time: "3 mins"
      },
      {
        step: 5,
        text: "Drizzle dressing over salad and serve immediately.",
        time: "1 min"
      }
    ],
    nutrition: {
      calories: "210",
      protein: "6g",
      carbs: "12g",
      fat: "17g",
      fiber: "3g",
      sugar: "8g",
      sodium: "520mg"
    },
    notes: "Use the ripest tomatoes available for best flavor. This salad is best served immediately after dressing.",
    cookingMethods: ["no cooking required"],
    equipment: ["Large platter", "Small bowl", "Whisk"],
    difficulty_factors: {
      technique: "easy",
      time: "quick",
      ingredients: "simple"
    }
  },
  {
    id: 12,
    title: "Banana Bread",
    description: "Moist and flavorful banana bread made with ripe bananas and warm spices.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop&crop=center",
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    servings: 12,
    difficulty: "easy",
    cuisine: "American",
    category: "dessert",
    rating: 4.7,
    ratingCount: 389,
    calories: 220,
    tags: ["banana", "bread", "baking", "comfort-food"],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      keto: false,
      paleo: false
    },
    ingredients: [
      { name: "Ripe bananas", quantity: "3", unit: "large", preparation: "mashed", category: "Produce" },
      { name: "All-purpose flour", quantity: "1 3/4", unit: "cups", category: "Baking" },
      { name: "Sugar", quantity: "3/4", unit: "cup", category: "Baking" },
      { name: "Butter", quantity: "1/3", unit: "cup", preparation: "melted", category: "Dairy & Eggs" },
      { name: "Large egg", quantity: "1", unit: "whole", preparation: "beaten", category: "Dairy & Eggs" },
      { name: "Baking soda", quantity: "1", unit: "tsp", category: "Baking" },
      { name: "Salt", quantity: "1/2", unit: "tsp", category: "Spices" },
      { name: "Vanilla extract", quantity: "1", unit: "tsp", category: "Baking" },
      { name: "Cinnamon", quantity: "1/2", unit: "tsp", category: "Spices" },
      { name: "Walnuts", quantity: "1/2", unit: "cup", preparation: "chopped (optional)", category: "Nuts" }
    ],
    instructions: [
      {
        step: 1,
        text: "Preheat oven to 350°F (175°C). Grease a 9x5 inch loaf pan.",
        time: "3 mins"
      },
      {
        step: 2,
        text: "In a large bowl, mash bananas until smooth.",
        time: "3 mins"
      },
      {
        step: 3,
        text: "Mix in melted butter, sugar, beaten egg, and vanilla extract.",
        time: "3 mins"
      },
      {
        step: 4,
        text: "In another bowl, whisk together flour, baking soda, salt, and cinnamon.",
        time: "2 mins"
      },
      {
        step: 5,
        text: "Add dry ingredients to banana mixture and stir until just combined. Fold in nuts if using.",
        time: "3 mins"
      },
      {
        step: 6,
        text: "Pour batter into prepared loaf pan and bake for 55-60 minutes until golden brown.",
        time: "60 mins"
      },
      {
        step: 7,
        text: "Cool in pan for 10 minutes, then turn out onto wire rack to cool completely.",
        time: "10 mins"
      }
    ],
    nutrition: {
      calories: "220",
      protein: "3g",
      carbs: "42g",
      fat: "6g",
      fiber: "2g",
      sugar: "22g",
      sodium: "180mg"
    },
    notes: "The riper the bananas, the sweeter and more flavorful your bread will be. Bread is done when a toothpick inserted in center comes out clean.",
    cookingMethods: ["baking"],
    equipment: ["9x5 inch loaf pan", "Large bowl", "Wire rack"],
    difficulty_factors: {
      technique: "easy",
      time: "lengthy",
      ingredients: "simple"
    }
  }
];

export const mockFeaturedRecipes = mockRecipes.slice(0, 3);

export const mockPopularRecipes = mockRecipes;

export const recipeCategories = [
  { id: 'breakfast', name: 'Breakfast', count: 45, image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop&crop=center' },
  { id: 'lunch', name: 'Lunch', count: 67, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&crop=center' },
  { id: 'dinner', name: 'Dinner', count: 123, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop&crop=center' },
  { id: 'dessert', name: 'Dessert', count: 89, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop&crop=center' },
  { id: 'snack', name: 'Snacks', count: 34, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=200&fit=crop&crop=center' },
  { id: 'beverage', name: 'Beverages', count: 28, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop&crop=center' },
  { id: 'appetizer', name: 'Appetizers', count: 52, image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=200&fit=crop&crop=center' },
  { id: 'soup', name: 'Soups', count: 41, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop&crop=center' },
  { id: 'salad', name: 'Salads', count: 38, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&crop=center' },
  { id: 'pasta', name: 'Pasta', count: 56, image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=300&h=200&fit=crop&crop=center' }
];

export const popularIngredients = [
  'chicken', 'tomatoes', 'onions', 'garlic', 'olive oil', 'salt', 'pepper',
  'eggs', 'flour', 'butter', 'cheese', 'milk', 'herbs', 'spices', 'beef',
  'salmon', 'rice', 'pasta', 'lemon', 'avocado', 'mushrooms', 'basil',
  'parmesan', 'coconut milk', 'ginger', 'soy sauce', 'lime', 'cilantro'
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
  },
  {
    id: 4,
    title: "Mise en place is key",
    description: "Prepare and organize all ingredients before you start cooking."
  },
  {
    id: 5,
    title: "Let meat rest after cooking",
    description: "Resting allows juices to redistribute, resulting in more tender and flavorful meat."
  },
  {
    id: 6,
    title: "Don't overcrowd the pan",
    description: "Overcrowding leads to steaming instead of proper browning."
  },
  {
    id: 7,
    title: "Use a meat thermometer",
    description: "Ensure food safety and perfect doneness with accurate temperature readings."
  },
  {
    id: 8,
    title: "Salt pasta water generously",
    description: "Well-salted pasta water should taste like the sea and enhances the pasta's flavor."
  }
];

export const cuisineTypes = [
  { id: 'italian', name: 'Italian', count: 34 },
  { id: 'mexican', name: 'Mexican', count: 28 },
  { id: 'chinese', name: 'Chinese', count: 31 },
  { id: 'indian', name: 'Indian', count: 25 },
  { id: 'thai', name: 'Thai', count: 22 },
  { id: 'french', name: 'French', count: 19 },
  { id: 'japanese', name: 'Japanese', count: 24 },
  { id: 'american', name: 'American', count: 45 },
  { id: 'mediterranean', name: 'Mediterranean', count: 18 },
  { id: 'korean', name: 'Korean', count: 16 }
];

export const dietaryFilters = [
  { id: 'vegetarian', name: 'Vegetarian', count: 87 },
  { id: 'vegan', name: 'Vegan', count: 43 },
  { id: 'glutenFree', name: 'Gluten-Free', count: 56 },
  { id: 'dairyFree', name: 'Dairy-Free', count: 39 },
  { id: 'keto', name: 'Keto', count: 28 },
  { id: 'paleo', name: 'Paleo', count: 35 },
  { id: 'lowCarb', name: 'Low Carb', count: 42 },
  { id: 'lowFat', name: 'Low Fat', count: 33 }
];