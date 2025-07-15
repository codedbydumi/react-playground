import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  searchQuery: '',
  loading: false,
  error: null,
  theme: 'light',
  user: null,
  favorites: [],
  bookmarks: [],
  filters: {
    category: '',
    difficulty: '',
    cookingTime: '',
    dietary: []
  }
};

// Action types
const ActionTypes = {
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
  SET_USER: 'SET_USER'
};

function appReducer(state, action) {
  switch (action.type) {
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
        error: action.payload
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
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    
    case ActionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    
    case ActionTypes.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    
    case ActionTypes.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(id => id !== action.payload)
      };
    
    case ActionTypes.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    actions: {
      setSearchQuery: (query) => dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: query }),
      setLoading: (loading) => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
      setError: (error) => dispatch({ type: ActionTypes.SET_ERROR, payload: error }),
      setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, payload: theme }),
      setUser: (user) => dispatch({ type: ActionTypes.SET_USER, payload: user }),
      setFavorites: (favorites) => dispatch({ type: ActionTypes.SET_FAVORITES, payload: favorites }),
      setBookmarks: (bookmarks) => dispatch({ type: ActionTypes.SET_BOOKMARKS, payload: bookmarks }),
      addFavorite: (id) => dispatch({ type: ActionTypes.ADD_FAVORITE, payload: id }),
      removeFavorite: (id) => dispatch({ type: ActionTypes.REMOVE_FAVORITE, payload: id }),
      addBookmark: (id) => dispatch({ type: ActionTypes.ADD_BOOKMARK, payload: id }),
      removeBookmark: (id) => dispatch({ type: ActionTypes.REMOVE_BOOKMARK, payload: id }),
      setFilters: (filters) => dispatch({ type: ActionTypes.SET_FILTERS, payload: filters }),
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export default AppContext;