/**
 * Application settings and configuration data
 */

export const defaultUserPreferences = {
  // Display preferences
  theme: 'light', // 'light', 'dark', 'auto'
  language: 'en',
  timezone: 'America/New_York',
  dateFormat: 'MM/DD/YYYY',
  temperatureUnit: 'fahrenheit', // 'fahrenheit', 'celsius'
  measurementSystem: 'imperial', // 'imperial', 'metric'
  
  // Dietary preferences
  dietaryRestrictions: [],
  allergies: [],
  preferredCuisines: [],
  spiceLevel: 'medium', // 'mild', 'medium', 'hot'
  
  // Cooking preferences
  cookingSkillLevel: 'beginner', // 'beginner', 'intermediate', 'advanced'
  preferredCookingMethods: [],
  kitchenEquipment: [],
  
  // Content preferences
  favoriteCategories: [],
  contentLanguages: ['en'],
  showNutritionalInfo: true,
  showCookingTips: true,
  autoPlayVideos: false,
  
  // Notification preferences
  notifications: {
    email: {
      enabled: true,
      newRecipes: true,
      weeklyDigest: true,
      comments: true,
      likes: false,
      follows: true,
      newsletter: true,
      promotions: false
    },
    push: {
      enabled: true,
      newRecipes: false,
      comments: true,
      likes: false,
      follows: true,
      cookingReminders: true,
      mealPlanningAlerts: false
    },
    inApp: {
      enabled: true,
      all: true
    }
  },
  
  // Privacy preferences
  privacy: {
    profileVisibility: 'public', // 'public', 'friends', 'private'
    showRealName: true,
    showLocation: false,
    allowMessaging: 'friends', // 'everyone', 'friends', 'none'
    shareActivity: true,
    allowDataAnalytics: true
  },
  
  // Recipe display preferences
  recipes: {
    defaultServingSize: 4,
    showImperialAndMetric: false,
    hideIngredientImages: false,
    showNutritionalBreakdown: true,
    showCookingTimeline: true,
    autoScale: true
  }
};

export const availableLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' }
];

export const availableTimezones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HST)' },
  { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' },
  { value: 'Europe/Paris', label: 'Central European Time (CET)' },
  { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
  { value: 'Asia/Seoul', label: 'Korea Standard Time (KST)' },
  { value: 'Asia/Shanghai', label: 'China Standard Time (CST)' },
  { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' }
];

export const dietaryRestrictionOptions = [
  { id: 'vegetarian', label: 'Vegetarian', description: 'No meat or fish' },
  { id: 'vegan', label: 'Vegan', description: 'No animal products' },
  { id: 'gluten-free', label: 'Gluten-Free', description: 'No wheat, barley, or rye' },
  { id: 'dairy-free', label: 'Dairy-Free', description: 'No milk or dairy products' },
  { id: 'nut-free', label: 'Nut-Free', description: 'No tree nuts or peanuts' },
  { id: 'soy-free', label: 'Soy-Free', description: 'No soy products' },
  { id: 'egg-free', label: 'Egg-Free', description: 'No eggs' },
  { id: 'shellfish-free', label: 'Shellfish-Free', description: 'No shellfish' },
  { id: 'fish-free', label: 'Fish-Free', description: 'No fish or seafood' },
  { id: 'low-sodium', label: 'Low Sodium', description: 'Reduced sodium content' },
  { id: 'low-sugar', label: 'Low Sugar', description: 'Reduced sugar content' },
  { id: 'keto', label: 'Ketogenic', description: 'High fat, low carb' },
  { id: 'paleo', label: 'Paleo', description: 'No processed foods, grains, or legumes' },
  { id: 'whole30', label: 'Whole30', description: 'No grains, dairy, sugar, or legumes' }
];

export const allergyOptions = [
  'Milk', 'Eggs', 'Fish', 'Shellfish', 'Tree Nuts', 'Peanuts', 
  'Wheat', 'Soybeans', 'Sesame', 'Mustard', 'Celery', 'Lupin'
];

export const cuisineOptions = [
  'American', 'Italian', 'Mexican', 'Chinese', 'Japanese', 'Thai', 
  'Indian', 'French', 'Mediterranean', 'Middle Eastern', 'Korean', 
  'Vietnamese', 'Greek', 'Spanish', 'German', 'British', 'Caribbean', 
  'African', 'Russian', 'Scandinavian', 'Brazilian', 'Peruvian'
];

export const cookingMethodOptions = [
  'Baking', 'Grilling', 'Frying', 'Sautéing', 'Roasting', 'Boiling', 
  'Steaming', 'Braising', 'Slow Cooking', 'Pressure Cooking', 'Smoking', 
  'Poaching', 'Broiling', 'Stir-frying', 'Deep Frying', 'Pan Frying'
];

export const kitchenEquipmentOptions = [
  'Oven', 'Stovetop', 'Microwave', 'Slow Cooker', 'Pressure Cooker', 
  'Air Fryer', 'Food Processor', 'Blender', 'Stand Mixer', 'Hand Mixer', 
  'Grill', 'Toaster Oven', 'Rice Cooker', 'Bread Maker', 'Ice Cream Maker', 
  'Sous Vide', 'Dehydrator', 'Juicer', 'Coffee Maker', 'Espresso Machine'
];

export const spiceLevelOptions = [
  { value: 'mild', label: 'Mild', emoji: '🌶️', description: 'Little to no heat' },
  { value: 'medium', label: 'Medium', emoji: '🌶️🌶️', description: 'Moderate heat' },
  { value: 'hot', label: 'Hot', emoji: '🌶️🌶️🌶️', description: 'High heat level' },
  { value: 'extra-hot', label: 'Extra Hot', emoji: '🌶️🌶️🌶️🌶️', description: 'Very high heat' }
];

export const skillLevelOptions = [
  { 
    value: 'beginner', 
    label: 'Beginner', 
    description: 'New to cooking, prefer simple recipes',
    icon: '🌱'
  },
  { 
    value: 'intermediate', 
    label: 'Intermediate', 
    description: 'Comfortable with basic techniques',
    icon: '🍳'
  },
  { 
    value: 'advanced', 
    label: 'Advanced', 
    description: 'Experienced with complex techniques',
    icon: '👨‍🍳'
  },
  { 
    value: 'expert', 
    label: 'Expert', 
    description: 'Professional level skills',
    icon: '⭐'
  }
];

export const privacyOptions = {
  profileVisibility: [
    { value: 'public', label: 'Public', description: 'Visible to everyone' },
    { value: 'friends', label: 'Friends Only', description: 'Visible to friends only' },
    { value: 'private', label: 'Private', description: 'Only visible to you' }
  ],
  messagingPermissions: [
    { value: 'everyone', label: 'Everyone', description: 'Anyone can message you' },
    { value: 'friends', label: 'Friends Only', description: 'Only friends can message you' },
    { value: 'none', label: 'No One', description: 'No one can message you' }
  ]
};

export const accountSettings = {
  security: {
    changePassword: true,
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: 30 // minutes
  },
  dataManagement: {
    exportData: true,
    deleteAccount: true,
    dataRetention: 365 // days
  }
};

export const appSettings = {
  version: '1.0.0',
  buildNumber: '2024.01.15',
  apiVersion: 'v1',
  supportedPlatforms: ['web', 'ios', 'android'],
  minimumRequirements: {
    browser: {
      chrome: '90+',
      firefox: '88+',
      safari: '14+',
      edge: '90+'
    },
    mobile: {
      ios: '13.0+',
      android: '8.0+'
    }
  }
};