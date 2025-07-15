/**
 * Application constants
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
};

// Pagination
export const PAGINATION = {
  RECIPES_PER_PAGE: 12,
  BLOG_POSTS_PER_PAGE: 9,
  COMMENTS_PER_PAGE: 10
};

// Recipe Categories
export const RECIPE_CATEGORIES = [
  'breakfast',
  'lunch',
  'dinner',
  'dessert',
  'snack',
  'appetizer',
  'side-dish',
  'beverage'
];

// Difficulty Levels
export const DIFFICULTY_LEVELS = [
  { value: 'easy', label: 'Easy', color: 'green' },
  { value: 'medium', label: 'Medium', color: 'yellow' },
  { value: 'hard', label: 'Hard', color: 'red' }
];

// Cuisine Types
export const CUISINE_TYPES = [
  'American',
  'Italian',
  'Mexican',
  'Chinese',
  'Japanese',
  'Indian',
  'French',
  'Thai',
  'Mediterranean',
  'Middle Eastern',
  'Korean',
  'Vietnamese',
  'Greek',
  'Spanish',
  'German',
  'Other'
];

// Dietary Restrictions
export const DIETARY_RESTRICTIONS = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten Free' },
  { value: 'dairy-free', label: 'Dairy Free' },
  { value: 'keto', label: 'Keto' },
  { value: 'paleo', label: 'Paleo' },
  { value: 'low-carb', label: 'Low Carb' },
  { value: 'low-fat', label: 'Low Fat' },
  { value: 'nut-free', label: 'Nut Free' },
  { value: 'soy-free', label: 'Soy Free' }
];

// Cooking Methods
export const COOKING_METHODS = [
  'Baking',
  'Grilling',
  'Frying',
  'Boiling',
  'Steaming',
  'Roasting',
  'Sautéing',
  'Braising',
  'Poaching',
  'Smoking',
  'Slow Cooking',
  'Pressure Cooking',
  'No Cook'
];

// Time Ranges for Filtering
export const TIME_RANGES = [
  { value: '15', label: 'Under 15 minutes' },
  { value: '30', label: 'Under 30 minutes' },
  { value: '60', label: 'Under 1 hour' },
  { value: '120', label: 'Under 2 hours' },
  { value: '240', label: 'Under 4 hours' }
];

// Blog Categories
export const BLOG_CATEGORIES = [
  'Tips & Tricks',
  'Techniques',
  'Ingredients',
  'Kitchen Tools',
  'Seasonal Cooking',
  'International Cuisine',
  'Healthy Eating',
  'Meal Planning',
  'Food Science',
  'Recipe Stories'
];

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/recipefinder',
  twitter: 'https://twitter.com/recipefinder',
  instagram: 'https://instagram.com/recipefinder',
  youtube: 'https://youtube.com/recipefinder',
  pinterest: 'https://pinterest.com/recipefinder'
};

// Contact Information
export const CONTACT_INFO = {
  email: 'hello@recipefinder.com',
  phone: '+1 (555) 123-4567',
  address: '123 Culinary Street, Food City, FC 12345',
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  }
};

// Image Placeholder URLs
export const PLACEHOLDER_IMAGES = {
  recipe: '/api/placeholder/400/300',
  blog: '/api/placeholder/600/400',
  user: '/api/placeholder/100/100',
  hero: '/api/placeholder/1200/600'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  FAVORITES: 'recipe-favorites',
  BOOKMARKS: 'recipe-bookmarks',
  SEARCH_HISTORY: 'search-history',
  USER_PREFERENCES: 'user-preferences',
  THEME: 'app-theme'
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  GENERIC_ERROR: 'Something went wrong. Please try again.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  RECIPE_SAVED: 'Recipe saved to favorites!',
  RECIPE_REMOVED: 'Recipe removed from favorites.',
  MESSAGE_SENT: 'Message sent successfully!',
  NEWSLETTER_SUBSCRIBED: 'Successfully subscribed to newsletter!',
  RATING_SUBMITTED: 'Thank you for your rating!'
};

// Theme Colors (matches Tailwind config)
export const THEME_COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  accent: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12'
  }
};

// Animation Durations
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
};

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
};

// File Upload Limits
export const FILE_LIMITS = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  MAX_FILES: 5
};

// Rating Configuration
export const RATING_CONFIG = {
  MIN_RATING: 1,
  MAX_RATING: 5,
  DEFAULT_RATING: 0
};

// Search Configuration
export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
  MAX_SUGGESTIONS: 5,
  MAX_HISTORY_ITEMS: 10
};

// Notification Types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Recipe Serving Sizes
export const SERVING_SIZES = [1, 2, 4, 6, 8, 10, 12];

// Measurement Units
export const MEASUREMENT_UNITS = {
  VOLUME: [
    'tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gallon',
    'ml', 'l', 'dl'
  ],
  WEIGHT: [
    'oz', 'lb', 'g', 'kg'
  ],
  LENGTH: [
    'in', 'ft', 'cm', 'mm'
  ],
  TEMPERATURE: [
    '°F', '°C'
  ]
};

// Common Cooking Temperatures
export const COOKING_TEMPERATURES = {
  MEAT: {
    RARE: '120-125°F (49-52°C)',
    MEDIUM_RARE: '130-135°F (54-57°C)',
    MEDIUM: '135-145°F (57-63°C)',
    MEDIUM_WELL: '145-155°F (63-68°C)',
    WELL_DONE: '155°F+ (68°C+)'
  },
  POULTRY: '165°F (74°C)',
  FISH: '145°F (63°C)',
  PORK: '145°F (63°C)'
};

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_USER_ACCOUNTS: true,
  ENABLE_RECIPE_SHARING: true,
  ENABLE_COMMENTS: true,
  ENABLE_RATINGS: true,
  ENABLE_FAVORITES: true,
  ENABLE_NEWSLETTER: true,
  ENABLE_DARK_MODE: false,
  ENABLE_OFFLINE_MODE: false
};