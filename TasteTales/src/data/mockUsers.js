/**
 * Mock user data for development and testing
 */

export const mockUsers = [
  {
    id: 1,
    username: "foodie_sarah",
    email: "sarah@example.com",
    firstName: "Sarah",
    lastName: "Johnson",
    avatar: "/api/placeholder/100/100",
    bio: "Home cook passionate about healthy, delicious meals. Love experimenting with international cuisines!",
    location: "San Francisco, CA",
    joinDate: "2023-03-15",
    preferences: {
      dietaryRestrictions: ["vegetarian"],
      favoriteCategories: ["breakfast", "dinner", "healthy"],
      spiceLevel: "medium",
      cookingSkillLevel: "intermediate",
      notifications: {
        email: true,
        push: true,
        newRecipes: true,
        comments: true,
        newsletter: true
      }
    },
    stats: {
      recipesCreated: 12,
      recipesRated: 45,
      favoriteRecipes: 23,
      following: 15,
      followers: 8,
      totalViews: 1250
    },
    socialLinks: {
      instagram: "@foodie_sarah",
      pinterest: "sarahcooks"
    },
    achievements: [
      { id: 1, name: "First Recipe", description: "Posted your first recipe", earnedDate: "2023-03-20" },
      { id: 2, name: "Rate Master", description: "Rated 25 recipes", earnedDate: "2023-06-15" },
      { id: 3, name: "Healthy Eater", description: "Created 5 healthy recipes", earnedDate: "2023-08-10" }
    ]
  },
  {
    id: 2,
    username: "chef_mike",
    email: "mike@example.com",
    firstName: "Michael",
    lastName: "Chen",
    avatar: "/api/placeholder/100/100",
    bio: "Professional chef sharing restaurant-quality recipes for home cooks. Specializing in Asian fusion cuisine.",
    location: "New York, NY",
    joinDate: "2022-11-08",
    preferences: {
      dietaryRestrictions: [],
      favoriteCategories: ["dinner", "asian", "fusion"],
      spiceLevel: "hot",
      cookingSkillLevel: "expert",
      notifications: {
        email: true,
        push: false,
        newRecipes: false,
        comments: true,
        newsletter: false
      }
    },
    stats: {
      recipesCreated: 47,
      recipesRated: 89,
      favoriteRecipes: 12,
      following: 32,
      followers: 156,
      totalViews: 8750
    },
    socialLinks: {
      instagram: "@chef_mike_fusion",
      youtube: "MikeChenCooks",
      website: "mikechenfusion.com"
    },
    achievements: [
      { id: 1, name: "First Recipe", description: "Posted your first recipe", earnedDate: "2022-11-15" },
      { id: 2, name: "Rate Master", description: "Rated 25 recipes", earnedDate: "2023-01-20" },
      { id: 4, name: "Recipe Creator", description: "Created 25 recipes", earnedDate: "2023-07-05" },
      { id: 5, name: "Popular Chef", description: "Gained 100 followers", earnedDate: "2023-09-12" }
    ]
  },
  {
    id: 3,
    username: "healthy_jenny",
    email: "jenny@example.com",
    firstName: "Jennifer",
    lastName: "Martinez",
    avatar: "/api/placeholder/100/100",
    bio: "Nutritionist and wellness coach sharing balanced, nutritious recipes that don't compromise on taste.",
    location: "Austin, TX",
    joinDate: "2023-01-22",
    preferences: {
      dietaryRestrictions: ["gluten-free", "dairy-free"],
      favoriteCategories: ["healthy", "breakfast", "snacks"],
      spiceLevel: "mild",
      cookingSkillLevel: "intermediate",
      notifications: {
        email: true,
        push: true,
        newRecipes: true,
        comments: true,
        newsletter: true
      }
    },
    stats: {
      recipesCreated: 29,
      recipesRated: 67,
      favoriteRecipes: 34,
      following: 25,
      followers: 42,
      totalViews: 3420
    },
    socialLinks: {
      instagram: "@healthy_jenny_eats",
      blog: "jennyshealthykitchen.com"
    },
    achievements: [
      { id: 1, name: "First Recipe", description: "Posted your first recipe", earnedDate: "2023-02-01" },
      { id: 2, name: "Rate Master", description: "Rated 25 recipes", earnedDate: "2023-04-18" },
      { id: 3, name: "Healthy Eater", description: "Created 5 healthy recipes", earnedDate: "2023-03-10" },
      { id: 6, name: "Wellness Guru", description: "Created 20 healthy recipes", earnedDate: "2023-10-05" }
    ]
  }
];

export const currentUser = {
  id: 1,
  username: "foodie_sarah",
  email: "sarah@example.com",
  firstName: "Sarah",
  lastName: "Johnson",
  avatar: "/api/placeholder/100/100",
  isAuthenticated: true,
  preferences: {
    theme: "light",
    language: "en",
    timezone: "America/Los_Angeles",
    dietaryRestrictions: ["vegetarian"],
    favoriteCategories: ["breakfast", "dinner", "healthy"],
    spiceLevel: "medium",
    cookingSkillLevel: "intermediate",
    notifications: {
      email: true,
      push: true,
      newRecipes: true,
      comments: true,
      newsletter: true
    }
  },
  favorites: [1, 3, 5, 8, 12],
  bookmarks: [2, 4, 7, 9],
  recentlyViewed: [1, 2, 3, 4, 5],
  shoppingLists: [
    {
      id: 1,
      name: "This Week's Meals",
      items: [
        { id: 1, name: "Chicken breast", quantity: "2 lbs", checked: false },
        { id: 2, name: "Broccoli", quantity: "1 head", checked: true },
        { id: 3, name: "Rice", quantity: "2 cups", checked: false }
      ],
      createdDate: "2024-01-15"
    }
  ]
};

export const userRoles = {
  ADMIN: "admin",
  MODERATOR: "moderator", 
  CHEF: "chef",
  USER: "user",
  GUEST: "guest"
};

export const userPermissions = {
  admin: [
    "create_recipe",
    "edit_recipe", 
    "delete_recipe",
    "moderate_comments",
    "manage_users",
    "view_analytics"
  ],
  moderator: [
    "create_recipe",
    "edit_recipe",
    "moderate_comments",
    "view_analytics"
  ],
  chef: [
    "create_recipe",
    "edit_recipe"
  ],
  user: [
    "create_recipe"
  ],
  guest: []
};

export const mockReviews = [
  {
    id: 1,
    recipeId: 1,
    userId: 2,
    username: "chef_mike",
    userAvatar: "/api/placeholder/50/50",
    rating: 5,
    title: "Perfect carbonara technique!",
    comment: "This recipe nails the traditional technique. The key really is working quickly with the egg mixture. Made this for my family and they loved it!",
    date: "2024-01-10",
    helpful: 15,
    images: ["/api/placeholder/300/200"],
    verified: true
  },
  {
    id: 2,
    recipeId: 1,
    userId: 3,
    username: "healthy_jenny",
    userAvatar: "/api/placeholder/50/50",
    rating: 4,
    title: "Great recipe, made some modifications",
    comment: "Excellent base recipe! I used turkey bacon instead of pancetta for a healthier version and it turned out great. Maybe add some notes for substitutions?",
    date: "2024-01-08",
    helpful: 8,
    images: [],
    verified: false
  }
];

export const mockFollowSuggestions = [
  {
    id: 4,
    username: "pasta_master",
    firstName: "Antonio",
    lastName: "Rossi",
    avatar: "/api/placeholder/100/100",
    bio: "Traditional Italian pasta recipes from Nonna's kitchen",
    followersCount: 234,
    recipesCount: 45,
    specialties: ["Italian", "Pasta"]
  },
  {
    id: 5,
    username: "baking_betty",
    firstName: "Betty",
    lastName: "Williams",
    avatar: "/api/placeholder/100/100",
    bio: "Home baker sharing tried-and-true dessert recipes",
    followersCount: 189,
    recipesCount: 67,
    specialties: ["Baking", "Desserts"]
  }
];