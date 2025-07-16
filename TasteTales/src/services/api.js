// Mock API functions for the Recipe Finder application
// In a real application, these would make actual HTTP requests to your backend

import { mockRecipes } from '../data/mockRecipes';
import { mockBlogPosts } from '../data/mockBlogPosts';

// Utility function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Recipe API functions
export const getRecipes = async (filters = {}) => {
  await delay(500);
  
  let filteredRecipes = [...mockRecipes];
  
  // Apply filters
  if (filters.category) {
    filteredRecipes = filteredRecipes.filter(r => r.category === filters.category);
  }
  
  if (filters.cuisine) {
    filteredRecipes = filteredRecipes.filter(r => r.cuisine.toLowerCase() === filters.cuisine.toLowerCase());
  }
  
  if (filters.difficulty) {
    filteredRecipes = filteredRecipes.filter(r => r.difficulty === filters.difficulty);
  }
  
  if (filters.dietary && filters.dietary.length > 0) {
    filteredRecipes = filteredRecipes.filter(r => 
      filters.dietary.every(diet => r.dietaryInfo && r.dietaryInfo[diet] === true)
    );
  }
  
  // Pagination
  const limit = filters.limit || 12;
  const page = filters.page || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);
  
  return {
    recipes: paginatedRecipes,
    total: filteredRecipes.length,
    totalPages: Math.ceil(filteredRecipes.length / limit),
    currentPage: page
  };
};

export const getFeaturedRecipes = async () => {
  await delay(300);
  // Return the first 6 recipes as featured
  return mockRecipes.slice(0, 6);
};

export const getPopularRecipes = async (limit = 6) => {
  await delay(300);
  // Sort by rating and return top recipes
  return [...mockRecipes]
    .sort((a, b) => (b.rating * b.ratingCount) - (a.rating * a.ratingCount))
    .slice(0, limit);
};

export const getRecipeById = async (id) => {
  await delay(400);
  
  const recipe = mockRecipes.find(r => r.id === parseInt(id));
  
  if (!recipe) {
    throw new Error('Recipe not found');
  }
  
  // Add mock reviews if they don't exist
  if (!recipe.reviews || recipe.reviews.length === 0) {
    recipe.reviews = [
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
      },
      {
        author: 'Lisa K.',
        rating: 5,
        comment: 'This has become a regular in our meal rotation!',
        date: '2 weeks ago'
      }
    ];
  }
  
  return recipe;
};

export const getRelatedRecipes = async (recipeId, limit = 4) => {
  await delay(300);
  
  const currentRecipe = mockRecipes.find(r => r.id === parseInt(recipeId));
  
  if (!currentRecipe) {
    return mockRecipes.slice(0, limit);
  }
  
  // Find recipes with same category or cuisine
  const related = mockRecipes
    .filter(r => 
      r.id !== parseInt(recipeId) && 
      (r.category === currentRecipe.category || r.cuisine === currentRecipe.cuisine)
    )
    .slice(0, limit);
  
  // If not enough related, add random recipes
  if (related.length < limit) {
    const additional = mockRecipes
      .filter(r => r.id !== parseInt(recipeId) && !related.find(rel => rel.id === r.id))
      .slice(0, limit - related.length);
    related.push(...additional);
  }
  
  return related;
};

export const searchRecipes = async (query, filters = {}) => {
  await delay(600);
  
  let results = [...mockRecipes];
  
  // Search by query
  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(recipe => 
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm))
    );
  }
  
  // Apply additional filters
  if (filters.category) {
    results = results.filter(r => r.category === filters.category);
  }
  
  if (filters.cuisine) {
    results = results.filter(r => r.cuisine.toLowerCase() === filters.cuisine.toLowerCase());
  }
  
  if (filters.difficulty) {
    results = results.filter(r => r.difficulty === filters.difficulty);
  }
  
  // Pagination
  const limit = filters.limit || 12;
  const page = filters.page || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    recipes: results.slice(startIndex, endIndex),
    total: results.length,
    totalPages: Math.ceil(results.length / limit),
    currentPage: page
  };
};

export const rateRecipe = async (recipeId, rating) => {
  await delay(200);
  // In a real app, this would save to backend
  return { success: true, rating };
};

// Blog API functions
// If you don't have mockBlogPosts.js yet, we'll create some sample data
const sampleBlogPosts = [
  {
    id: 1,
    title: "10 Essential Kitchen Tools Every Home Cook Needs",
    excerpt: "Discover the must-have tools that will transform your cooking experience and make meal preparation a breeze.",
    content: `<h2>Introduction</h2>
    <p>Having the right tools in your kitchen can make all the difference between a frustrating cooking experience and an enjoyable one. In this comprehensive guide, we'll explore the ten essential kitchen tools that every home cook should have in their arsenal.</p>
    
    <h2>1. A Good Chef's Knife</h2>
    <p>The cornerstone of any kitchen is a quality chef's knife. A sharp, well-balanced 8-10 inch chef's knife can handle 90% of your cutting tasks.</p>
    
    <h2>2. Cutting Board</h2>
    <p>Invest in a large, sturdy cutting board. Wood or plastic both work well, but make sure it's big enough to give you plenty of workspace.</p>`,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    author: "Chef Maria Rodriguez",
    authorBio: "Professional chef with 15 years of experience in Michelin-starred restaurants.",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Kitchen Tools",
    tags: ["tools", "kitchen", "cooking", "essentials"],
    views: 1542,
    likes: 234,
    comments: 18
  },
  {
    id: 2,
    title: "The Art of Meal Prep: Save Time and Eat Healthy",
    excerpt: "Learn how to master meal preparation to save time, reduce stress, and maintain a healthy diet throughout the week.",
    content: `<h2>Why Meal Prep?</h2>
    <p>Meal preparation is more than just a trend—it's a lifestyle change that can revolutionize how you approach eating and cooking.</p>`,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    author: "Sarah Chen",
    authorBio: "Nutritionist and meal prep enthusiast helping busy professionals eat better.",
    date: "January 12, 2024",
    readTime: "7 min read",
    category: "Tips & Tricks",
    tags: ["meal-prep", "healthy", "planning", "time-saving"],
    views: 2103,
    likes: 412,
    comments: 32
  },
  {
    id: 3,
    title: "Understanding Spices: A Beginner's Guide",
    excerpt: "Unlock the secrets of spices and learn how to use them to elevate your cooking to new heights.",
    content: `<h2>The Spice Renaissance</h2>
    <p>Spices have been the driving force behind exploration, trade, and culinary innovation for thousands of years.</p>`,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    author: "Chef John Williams",
    authorBio: "Award-winning chef specializing in global cuisine and spice blending.",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Ingredients",
    tags: ["spices", "flavor", "cooking", "guide"],
    views: 1876,
    likes: 287,
    comments: 24
  }
];

export const getBlogPosts = async (filters = {}) => {
  await delay(500);
  
  const posts = mockBlogPosts || sampleBlogPosts;
  const limit = filters.limit || 9;
  const page = filters.page || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    posts: posts.slice(startIndex, endIndex),
    total: posts.length,
    totalPages: Math.ceil(posts.length / limit),
    currentPage: page
  };
};

export const getFeaturedPosts = async (limit = 3) => {
  await delay(300);
  const posts = mockBlogPosts || sampleBlogPosts;
  return posts.slice(0, limit);
};

export const getRecentBlogPosts = async (limit = 3) => {
  await delay(300);
  const posts = mockBlogPosts || sampleBlogPosts;
  // In a real app, these would be sorted by date
  return posts.slice(-limit).reverse();
};

export const getBlogPostById = async (id) => {
  await delay(400);
  const posts = mockBlogPosts || sampleBlogPosts;
  const post = posts.find(p => p.id === parseInt(id));
  
  if (!post) {
    throw new Error('Blog post not found');
  }
  
  return post;
};

export const getRelatedPosts = async (postId, limit = 3) => {
  await delay(300);
  const posts = mockBlogPosts || sampleBlogPosts;
  
  // Return posts excluding the current one
  return posts
    .filter(p => p.id !== parseInt(postId))
    .slice(0, limit);
};

export const searchBlogPosts = async (query, filters = {}) => {
  await delay(600);
  const posts = mockBlogPosts || sampleBlogPosts;
  
  let results = [...posts];
  
  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  const limit = filters.limit || 9;
  const page = filters.page || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    posts: results.slice(startIndex, endIndex),
    total: results.length,
    totalPages: Math.ceil(results.length / limit),
    currentPage: page
  };
};

export const getBlogCategories = async () => {
  await delay(200);
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
  await delay(200);
  return { success: true };
};

// Utility functions
export const submitContactForm = async (formData) => {
  await delay(1000);
  // In a real app, this would send an email or save to database
  console.log('Contact form submitted:', formData);
  return { success: true, message: 'Message sent successfully!' };
};

export const subscribeNewsletter = async (email) => {
  await delay(800);
  // In a real app, this would add email to mailing list
  console.log('Newsletter subscription:', email);
  return { success: true, message: 'Successfully subscribed!' };
};

// Recipe categories for filtering
export const getRecipeCategories = async () => {
  await delay(200);
  const categories = {};
  mockRecipes.forEach(recipe => {
    categories[recipe.category] = (categories[recipe.category] || 0) + 1;
  });
  
  return Object.entries(categories).map(([name, count]) => ({ name, count }));
};

// Get cuisine types for filtering
export const getCuisineTypes = async () => {
  await delay(200);
  const cuisines = {};
  mockRecipes.forEach(recipe => {
    cuisines[recipe.cuisine] = (cuisines[recipe.cuisine] || 0) + 1;
  });
  
  return Object.entries(cuisines).map(([name, count]) => ({ name, count }));
};