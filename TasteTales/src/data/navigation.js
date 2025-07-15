/**
 * Navigation and menu data for the application
 */

import { Home, ChefHat, BookOpen, Users, Mail, User, Heart, Bookmark, Settings, Search } from 'lucide-react';

export const mainNavigation = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: Home,
    description: 'Discover featured recipes and trending content'
  },
  {
    id: 'recipes',
    label: 'Recipes',
    path: '/recipes',
    icon: ChefHat,
    description: 'Browse our collection of delicious recipes',
    badge: 'New',
    submenu: [
      { id: 'all-recipes', label: 'All Recipes', path: '/recipes' },
      { id: 'breakfast', label: 'Breakfast', path: '/recipes?category=breakfast' },
      { id: 'lunch', label: 'Lunch', path: '/recipes?category=lunch' },
      { id: 'dinner', label: 'Dinner', path: '/recipes?category=dinner' },
      { id: 'desserts', label: 'Desserts', path: '/recipes?category=dessert' },
      { id: 'quick-meals', label: 'Quick Meals', path: '/recipes?time=30' },
      { id: 'healthy', label: 'Healthy', path: '/recipes?tag=healthy' }
    ]
  },
  {
    id: 'blog',
    label: 'Blog',
    path: '/blog',
    icon: BookOpen,
    description: 'Cooking tips, techniques, and culinary inspiration',
    submenu: [
      { id: 'all-posts', label: 'All Posts', path: '/blog' },
      { id: 'techniques', label: 'Techniques', path: '/blog?category=techniques' },
      { id: 'tips-tricks', label: 'Tips & Tricks', path: '/blog?category=tips-tricks' },
      { id: 'ingredients', label: 'Ingredients', path: '/blog?category=ingredients' },
      { id: 'kitchen-tools', label: 'Kitchen Tools', path: '/blog?category=kitchen-tools' }
    ]
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
    icon: Users,
    description: 'Learn more about our mission and team'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: Mail,
    description: 'Get in touch with us'
  }
];

export const userNavigation = [
  {
    id: 'profile',
    label: 'My Profile',
    path: '/profile',
    icon: User,
    description: 'View and edit your profile'
  },
  {
    id: 'favorites',
    label: 'Favorites',
    path: '/favorites',
    icon: Heart,
    description: 'Your favorite recipes',
    count: 'favorites'
  },
  {
    id: 'bookmarks',
    label: 'Saved Recipes',
    path: '/bookmarks',
    icon: Bookmark,
    description: 'Recipes you want to try later',
    count: 'bookmarks'
  },
  {
    id: 'my-recipes',
    label: 'My Recipes',
    path: '/my-recipes',
    icon: ChefHat,
    description: 'Recipes you\'ve created'
  },
  {
    id: 'shopping-lists',
    label: 'Shopping Lists',
    path: '/shopping-lists',
    icon: Search,
    description: 'Manage your grocery lists'
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings,
    description: 'Account and app preferences'
  }
];

export const footerNavigation = {
  recipes: {
    title: 'Recipes',
    links: [
      { label: 'Browse All', path: '/recipes' },
      { label: 'By Category', path: '/recipes/categories' },
      { label: 'Quick & Easy', path: '/recipes?time=30' },
      { label: 'Healthy Options', path: '/recipes?tag=healthy' },
      { label: 'Popular This Week', path: '/recipes?sort=popular' }
    ]
  },
  community: {
    title: 'Community',
    links: [
      { label: 'Submit Recipe', path: '/recipes/submit' },
      { label: 'Recipe Reviews', path: '/reviews' },
      { label: 'Cooking Tips', path: '/blog?category=tips' },
      { label: 'Chef Profiles', path: '/chefs' },
      { label: 'Newsletter', path: '/newsletter' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/about#team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press Kit', path: '/press' },
      { label: 'Contact', path: '/contact' }
    ]
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', path: '/help' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' }
    ]
  }
};

export const breadcrumbConfig = {
  '/': { label: 'Home' },
  '/recipes': { label: 'Recipes' },
  '/recipes/:id': { label: 'Recipe Details', parent: '/recipes' },
  '/blog': { label: 'Blog' },
  '/blog/:id': { label: 'Blog Post', parent: '/blog' },
  '/about': { label: 'About' },
  '/contact': { label: 'Contact' },
  '/profile': { label: 'Profile' },
  '/favorites': { label: 'Favorites' },
  '/bookmarks': { label: 'Saved Recipes' },
  '/settings': { label: 'Settings' }
};

export const mobileMenuSections = [
  {
    title: 'Main',
    items: mainNavigation
  },
  {
    title: 'Quick Access',
    items: [
      { id: 'search', label: 'Search Recipes', path: '/search', icon: Search },
      { id: 'favorites', label: 'My Favorites', path: '/favorites', icon: Heart },
      { id: 'recent', label: 'Recently Viewed', path: '/recent', icon: BookOpen }
    ]
  }
];

export const searchCategories = [
  { id: 'all', label: 'All', count: null },
  { id: 'recipes', label: 'Recipes', count: 1250 },
  { id: 'blog', label: 'Blog Posts', count: 89 },
  { id: 'ingredients', label: 'Ingredients', count: 340 },
  { id: 'techniques', label: 'Techniques', count: 45 }
];

export const quickLinks = [
  { label: 'Popular Recipes', path: '/recipes?sort=popular' },
  { label: 'Quick Meals', path: '/recipes?time=30' },
  { label: 'Healthy Options', path: '/recipes?tag=healthy' },
  { label: 'Desserts', path: '/recipes?category=dessert' },
  { label: 'Vegetarian', path: '/recipes?dietary=vegetarian' },
  { label: 'Latest Blog Posts', path: '/blog?sort=newest' }
];

export const categoryIcons = {
  breakfast: '🍳',
  lunch: '🥗',
  dinner: '🍽️',
  dessert: '🍰',
  snack: '🍿',
  beverage: '🥤',
  appetizer: '🍤',
  'side-dish': '🥔'
};

export const difficultyConfig = {
  easy: { label: 'Easy', color: 'green', icon: '👌' },
  medium: { label: 'Medium', color: 'yellow', icon: '🤔' },
  hard: { label: 'Hard', color: 'red', icon: '💪' }
};

export const socialLinks = [
  { 
    platform: 'Facebook', 
    url: 'https://facebook.com/recipefinder',
    icon: 'facebook',
    color: '#1877F2'
  },
  { 
    platform: 'Twitter', 
    url: 'https://twitter.com/recipefinder',
    icon: 'twitter',
    color: '#1DA1F2'
  },
  { 
    platform: 'Instagram', 
    url: 'https://instagram.com/recipefinder',
    icon: 'instagram',
    color: '#E4405F'
  },
  { 
    platform: 'Pinterest', 
    url: 'https://pinterest.com/recipefinder',
    icon: 'pinterest',
    color: '#BD081C'
  },
  { 
    platform: 'YouTube', 
    url: 'https://youtube.com/recipefinder',
    icon: 'youtube',
    color: '#FF0000'
  }
];