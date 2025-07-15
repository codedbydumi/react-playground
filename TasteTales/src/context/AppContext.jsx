import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  recipes: [],
  blogPosts: [],
  favorites: [],
  bookmarks: [],
  filters: {
    category: 'all',
    difficulty: 'all',
    cookingTime: 'all',
    dietary: []
  },
  searchQuery: '',
  loading: false,
  error: null,
  theme: 'light',
  user: null
};

// Action types
export const ActionTypes = {
  SET_RECIPES: 'SET_RECIPES',
  SET_BLOG_POSTS: 'SET_BLOG_POSTS',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_BOOKMARKS: 'SET_BOOKMARKS',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  SET_FILTERS: 'SET_FILTERS',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_THEME: 'SET_THEME',
  SET_USER: 'SET_USER',
  LIKE_POST: 'LIKE_POST',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };

    case ActionTypes.SET_BLOG_POSTS:
      return {
        ...state,
        blogPosts: action.payload,
        loading: false
      };

    case ActionTypes.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };

    case ActionTypes.SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload
      };

    case ActionTypes.ADD_FAVORITE:
      const existingFavorite = state.favorites.find(fav => fav.id === action.payload.id);
      if (existingFavorite) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case ActionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload)
      };

    case ActionTypes.ADD_BOOKMARK:
      const existingBookmark = state.bookmarks.find(bookmark => bookmark.id === action.payload.id);
      if (existingBookmark) {
        return state;
      }
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };

    case ActionTypes.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload)
      };

    case ActionTypes.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    case ActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };

    case ActionTypes.LIKE_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.map(post => {
          if (post.id === action.payload) {
            return {
              ...post,
              likes: post.isLiked ? (post.likes || 0) - 1 : (post.likes || 0) + 1,
              isLiked: !post.isLiked
            };
          }
          return post;
        })
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children, value }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const actions = {
    setRecipes: (recipes) => dispatch({ type: ActionTypes.SET_RECIPES, payload: recipes }),
    setBlogPosts: (posts) => dispatch({ type: ActionTypes.SET_BLOG_POSTS, payload: posts }),
    setFavorites: (favorites) => dispatch({ type: ActionTypes.SET_FAVORITES, payload: favorites }),
    setBookmarks: (bookmarks) => dispatch({ type: ActionTypes.SET_BOOKMARKS, payload: bookmarks }),
    
    addToFavorites: (recipe) => dispatch({ type: ActionTypes.ADD_FAVORITE, payload: recipe }),
    removeFromFavorites: (recipeId) => dispatch({ type: ActionTypes.REMOVE_FAVORITE, payload: recipeId }),
    
    addToBookmarks: (post) => dispatch({ type: ActionTypes.ADD_BOOKMARK, payload: post }),
    removeFromBookmarks: (postId) => dispatch({ type: ActionTypes.REMOVE_BOOKMARK, payload: postId }),
    
    setFilters: (filters) => dispatch({ type: ActionTypes.SET_FILTERS, payload: filters }),
    setSearchQuery: (query) => dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: query }),
    
    setLoading: (loading) => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ActionTypes.SET_ERROR, payload: error }),
    clearError: () => dispatch({ type: ActionTypes.CLEAR_ERROR }),
    
    setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, payload: theme }),
    setUser: (user) => dispatch({ type: ActionTypes.SET_USER, payload: user }),
    
    likePost: (postId) => dispatch({ type: ActionTypes.LIKE_POST, payload: postId }),
    
    // Helper functions
    isFavorite: (recipeId) => state.favorites.some(fav => fav.id === recipeId),
    isBookmarked: (postId) => state.bookmarks.some(bookmark => bookmark.id === postId),
    
    // Share functionality
    sharePost: (post) => {
      if (navigator.share) {
        navigator.share({
          title: post.title,
          text: post.excerpt,
          url: `${window.location.origin}/blog/${post.id}`
        });
      } else {
        const url = `${window.location.origin}/blog/${post.id}`;
        navigator.clipboard.writeText(url);
        // You might want to show a toast notification here
        alert('Link copied to clipboard!');
      }
    }
  };

  // Combine state and actions
  const contextValue = {
    ...state,
    ...actions,
    // Override with any passed values (for backward compatibility)
    ...value
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Selectors for derived state
export const useRecipes = () => {
  const { recipes, filters, searchQuery } = useApp();
  
  return React.useMemo(() => {
    let filteredRecipes = recipes;
    
    // Apply search filter
    if (searchQuery) {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    // Apply category filter
    if (filters.category !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.category === filters.category);
    }
    
    // Apply difficulty filter
    if (filters.difficulty !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty === filters.difficulty);
    }
    
    // Apply cooking time filter
    if (filters.cookingTime !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => {
        const time = parseInt(recipe.cookingTime);
        switch (filters.cookingTime) {
          case 'quick': return time <= 30;
          case 'medium': return time > 30 && time <= 60;
          case 'long': return time > 60;
          default: return true;
        }
      });
    }
    
    // Apply dietary filters
    if (filters.dietary.length > 0) {
      filteredRecipes = filteredRecipes.filter(recipe =>
        filters.dietary.some(diet => recipe.dietary?.includes(diet))
      );
    }
    
    return filteredRecipes;
  }, [recipes, filters, searchQuery]);
};

export const useBlogPosts = () => {
  const { blogPosts, searchQuery } = useApp();
  
  return React.useMemo(() => {
    if (!searchQuery) return blogPosts;
    
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogPosts, searchQuery]);
};

export default AppContext;