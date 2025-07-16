// Mock API functions for the Recipe Finder application
// In a real application, these would make actual HTTP requests to your backend

// Sample data generators
const generateMockRecipe = (id) => ({
  id,
  title: `Delicious Recipe ${id}`,
  description: 'A mouth-watering recipe that will delight your taste buds and impress your guests.',
  image: `/api/placeholder/400/300`,
  prepTime: Math.floor(Math.random() * 30) + 10,
  cookTime: Math.floor(Math.random() * 60) + 15,
  totalTime: Math.floor(Math.random() * 90) + 25,
  servings: Math.floor(Math.random() * 6) + 2,
  difficulty: ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)],
  cuisine: ['Italian', 'Mexican', 'Asian', 'American', 'French'][Math.floor(Math.random() * 5)],
  category: ['breakfast', 'lunch', 'dinner', 'dessert', 'snack'][Math.floor(Math.random() * 5)],
  rating: Number((Math.random() * 2 + 3).toFixed(1)),
  ratingCount: Math.floor(Math.random() * 500) + 50,
  calories: Math.floor(Math.random() * 600) + 200,
  tags: ['quick', 'healthy', 'family-friendly', 'vegetarian'].slice(0, Math.floor(Math.random() * 3) + 1),
  ingredients: [
    { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
    { name: 'Garlic', quantity: '3', unit: 'cloves', preparation: 'minced' },
    { name: 'Onion', quantity: '1', unit: 'medium', preparation: 'diced' },
    { name: 'Salt', quantity: '1', unit: 'tsp' },
    { name: 'Black pepper', quantity: '1/2', unit: 'tsp' }
  ],
  instructions: [
    { text: 'Preheat your oven to 375°F (190°C).', time: '5 mins' },
    { text: 'Heat olive oil in a large skillet over medium heat.', time: '2 mins' },
    { text: 'Add minced garlic and diced onion, cook until fragrant.', time: '3 mins' },
    { text: 'Season with salt and pepper to taste.', time: '1 min' },
    { text: 'Continue cooking according to your recipe variations.' }
  ],
  nutrition: {
    calories: '320',
    protein: '25g',
    carbs: '35g',
    fat: '12g',
    fiber: '6g',
    sugar: '8g'
  },
  notes: 'For best results, use fresh ingredients and adjust seasoning to your taste preferences.',
  reviews: [
    {
      author: 'Sarah M.',
      rating: 5,
      comment: 'Absolutely delicious! My family loved it.',
      date: '2 days ago'
    },
    {
      author: 'Mike R.',
      rating: 4,
      comment: 'Great recipe, easy to follow instructions.',
      date: '1 week ago'
    }
  ]
});

const generateMockBlogPost = (id) => ({
  id,
  title: `Culinary Tips and Tricks ${id}`,
  excerpt: 'Discover amazing cooking techniques that will elevate your culinary skills and transform your kitchen experience.',
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <h2>Cooking Techniques</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`,
  image: `/api/placeholder/600/400`,
  author: ['Chef Maria', 'Chef John', 'Chef Sarah'][Math.floor(Math.random() * 3)],
  authorBio: 'A passionate chef with over 10 years of experience in creating delicious and innovative recipes.',
  date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  readTime: `${Math.floor(Math.random() * 8) + 3} min read`,
  category: ['Tips & Tricks', 'Techniques', 'Ingredients', 'Kitchen Tools'][Math.floor(Math.random() * 4)],
  tags: ['cooking', 'tips', 'techniques', 'kitchen'].slice(0, Math.floor(Math.random() * 3) + 1),
  views: Math.floor(Math.random() * 5000) + 500,
  likes: Math.floor(Math.random() * 200) + 20,
  comments: Math.floor(Math.random() * 50) + 5,
  commentsList: [
    {
      author: 'Food Lover',
      content: 'Great tips! This really helped improve my cooking.',
      date: '2 days ago'
    },
    {
      author: 'Home Chef',
      content: 'Thanks for sharing these techniques.',
      date: '5 days ago'
    }
  ]
});

// Recipe API functions
export const getRecipes = async (filters = {}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const totalRecipes = 120;
  const limit = filters.limit || 12;
  const page = filters.page || 1;
  const totalPages = Math.ceil(totalRecipes / limit);
  
  const recipes = Array.from({ length: limit }, (_, i) => 
    generateMockRecipe((page - 1) * limit + i + 1)
  );
  
  return {
    recipes,
    total: totalRecipes,
    totalPages,
    currentPage: page
  };
};

export const getFeaturedRecipes = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from({ length: 6 }, (_, i) => generateMockRecipe(i + 1));
};

export const getPopularRecipes = async (limit = 6) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from({ length: limit }, (_, i) => generateMockRecipe(i + 100));
};

export const getRecipeById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return generateMockRecipe(id);
};

export const getRelatedRecipes = async (recipeId, limit = 4) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from({ length: limit }, (_, i) => generateMockRecipe(i + 200));
};

export const searchRecipes = async (query, filters = {}) => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const totalRecipes = Math.floor(Math.random() * 50) + 10;
  const limit = filters.limit || 12;
  const page = filters.page || 1;
  const totalPages = Math.ceil(totalRecipes / limit);
  
  const recipes = Array.from({ length: Math.min(limit, totalRecipes) }, (_, i) => ({
    ...generateMockRecipe((page - 1) * limit + i + 1),
    title: `${query} Recipe ${i + 1}`
  }));
  
  return {
    recipes,
    total: totalRecipes,
    totalPages,
    currentPage: page
  };
};

export const rateRecipe = async (recipeId, rating) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return { success: true, rating };
};

// Blog API functions
export const getBlogPosts = async (filters = {}) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const totalPosts = 80;
  const limit = filters.limit || 9;
  const page = filters.page || 1;
  const totalPages = Math.ceil(totalPosts / limit);
  
  const posts = Array.from({ length: limit }, (_, i) => 
    generateMockBlogPost((page - 1) * limit + i + 1)
  );
  
  return {
    posts,
    total: totalPosts,
    totalPages,
    currentPage: page
  };
};

export const getFeaturedPosts = async (limit = 3) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from({ length: limit }, (_, i) => generateMockBlogPost(i + 1));
};

export const getRecentBlogPosts = async (limit = 3) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from({ length: limit }, (_, i) => generateMockBlogPost(i + 50));
};

export const getBlogPostById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return {
    ...generateMockBlogPost(id),
    sections: [
      {
        type: 'paragraph',
        content: 'Welcome to this comprehensive guide on mastering culinary techniques. Whether you\'re a beginner or an experienced cook, these tips will help elevate your cooking game.'
      },
      {
        type: 'heading',
        content: 'Essential Knife Skills'
      },
      {
        type: 'paragraph',
        content: 'Proper knife technique is the foundation of good cooking. A sharp knife is not only more efficient but also safer to use than a dull one.'
      },
      {
        type: 'list',
        items: [
          'Keep your knives sharp with regular honing',
          'Use the proper cutting board for each task',
          'Master the basic cuts: julienne, dice, and chiffonade',
          'Practice proper hand positioning for safety'
        ]
      },
      {
        type: 'image',
        src: '/api/placeholder/600/300',
        alt: 'Knife skills demonstration',
        caption: 'Proper knife grip and cutting technique'
      },
      {
        type: 'quote',
        content: 'Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it\'s how you combine them that sets you apart.',
        author: 'Wolfgang Puck'
      }
    ]
  };
};

export const getRelatedPosts = async (postId, limit = 3) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from({ length: limit }, (_, i) => generateMockBlogPost(i + 300));
};

export const searchBlogPosts = async (query, filters = {}) => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const totalPosts = Math.floor(Math.random() * 30) + 5;
  const limit = filters.limit || 9;
  const page = filters.page || 1;
  const totalPages = Math.ceil(totalPosts / limit);
  
  const posts = Array.from({ length: Math.min(limit, totalPosts) }, (_, i) => ({
    ...generateMockBlogPost((page - 1) * limit + i + 1),
    title: `${query} Tips ${i + 1}`
  }));
  
  return {
    posts,
    total: totalPosts,
    totalPages,
    currentPage: page
  };
};

export const getBlogCategories = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return [
    { name: 'Tips & Tricks', count: 25 },
    { name: 'Techniques', count: 18 },
    { name: 'Ingredients', count: 22 },
    { name: 'Kitchen Tools', count: 15 },
    { name: 'Seasonal Cooking', count: 12 },
    { name: 'International Cuisine', count: 20 }
  ];
};

export const likeBlogPost = async (postId) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return { success: true };
};

// Utility functions
export const submitContactForm = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: 'Message sent successfully!' };
};

export const subscribeNewsletter = async (email) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return { success: true, message: 'Successfully subscribed!' };
};