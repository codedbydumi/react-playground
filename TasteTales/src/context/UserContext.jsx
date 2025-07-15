import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { currentUser } from '../data/mockUsers';

const UserContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  preferences: {
    theme: 'light',
    language: 'en',
    notifications: {
      email: true,
      push: true,
      newRecipes: true,
      comments: true,
      newsletter: true
    },
    dietaryRestrictions: [],
    favoriteCategories: [],
    spiceLevel: 'medium',
    cookingSkillLevel: 'beginner'
  },
  favorites: [],
  bookmarks: [],
  recentlyViewed: [],
  shoppingLists: [],
  following: [],
  followers: []
};

const ActionTypes = {
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  UPDATE_PREFERENCES: 'UPDATE_PREFERENCES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  ADD_TO_RECENTLY_VIEWED: 'ADD_TO_RECENTLY_VIEWED',
  UPDATE_SHOPPING_LIST: 'UPDATE_SHOPPING_LIST',
  ADD_SHOPPING_LIST: 'ADD_SHOPPING_LIST',
  DELETE_SHOPPING_LIST: 'DELETE_SHOPPING_LIST',
  FOLLOW_USER: 'FOLLOW_USER',
  UNFOLLOW_USER: 'UNFOLLOW_USER'
};

function userReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        preferences: { ...state.preferences, ...action.payload.user.preferences },
        favorites: action.payload.user.favorites || [],
        bookmarks: action.payload.user.bookmarks || [],
        recentlyViewed: action.payload.user.recentlyViewed || [],
        shoppingLists: action.payload.user.shoppingLists || [],
        isLoading: false
      };

    case ActionTypes.LOGOUT:
      return {
        ...initialState,
        isLoading: false
      };

    case ActionTypes.UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload },
        user: state.user ? {
          ...state.user,
          preferences: { ...state.user.preferences, ...action.payload }
        } : null
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

    case ActionTypes.ADD_TO_RECENTLY_VIEWED:
      const updatedRecentlyViewed = [
        action.payload,
        ...state.recentlyViewed.filter(id => id !== action.payload)
      ].slice(0, 10); // Keep only last 10 items

      return {
        ...state,
        recentlyViewed: updatedRecentlyViewed
      };

    case ActionTypes.ADD_SHOPPING_LIST:
      return {
        ...state,
        shoppingLists: [...state.shoppingLists, action.payload]
      };

    case ActionTypes.UPDATE_SHOPPING_LIST:
      return {
        ...state,
        shoppingLists: state.shoppingLists.map(list =>
          list.id === action.payload.id ? action.payload : list
        )
      };

    case ActionTypes.DELETE_SHOPPING_LIST:
      return {
        ...state,
        shoppingLists: state.shoppingLists.filter(list => list.id !== action.payload)
      };

    case ActionTypes.FOLLOW_USER:
      return {
        ...state,
        following: [...state.following, action.payload]
      };

    case ActionTypes.UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(id => id !== action.payload)
      };

    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Simulate checking for existing authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulate API call to check authentication
        const token = localStorage.getItem('authToken');
        if (token) {
          // Simulate loading user data
          await new Promise(resolve => setTimeout(resolve, 1000));
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: { user: currentUser }
          });
        } else {
          dispatch({ type: ActionTypes.SET_LOADING, payload: false });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      }
    };

    checkAuth();
  }, []);

  // Persist user data to localStorage when it changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('userData', JSON.stringify({
        favorites: state.favorites,
        bookmarks: state.bookmarks,
        preferences: state.preferences,
        recentlyViewed: state.recentlyViewed,
        shoppingLists: state.shoppingLists
      }));
    }
  }, [state.favorites, state.bookmarks, state.preferences, state.recentlyViewed, state.shoppingLists, state.user]);

  const login = async (credentials) => {
    try {
      // Simulate API login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      localStorage.setItem('authToken', 'mock-jwt-token');
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { user: currentUser }
      });
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    dispatch({ type: ActionTypes.LOGOUT });
  };

  const register = async (userData) => {
    try {
      // Simulate API registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        ...currentUser,
        ...userData,
        id: Date.now() // Mock ID generation
      };
      
      localStorage.setItem('authToken', 'mock-jwt-token');
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { user: newUser }
      });
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updatePreferences = (newPreferences) => {
    dispatch({
      type: ActionTypes.UPDATE_PREFERENCES,
      payload: newPreferences
    });
  };

  const toggleFavorite = (recipeId) => {
    if (state.favorites.includes(recipeId)) {
      dispatch({ type: ActionTypes.REMOVE_FAVORITE, payload: recipeId });
    } else {
      dispatch({ type: ActionTypes.ADD_FAVORITE, payload: recipeId });
    }
  };

  const toggleBookmark = (recipeId) => {
    if (state.bookmarks.includes(recipeId)) {
      dispatch({ type: ActionTypes.REMOVE_BOOKMARK, payload: recipeId });
    } else {
      dispatch({ type: ActionTypes.ADD_BOOKMARK, payload: recipeId });
    }
  };

  const addToRecentlyViewed = (recipeId) => {
    dispatch({ type: ActionTypes.ADD_TO_RECENTLY_VIEWED, payload: recipeId });
  };

  const createShoppingList = (name, items = []) => {
    const newList = {
      id: Date.now(),
      name,
      items,
      createdDate: new Date().toISOString().split('T')[0]
    };
    
    dispatch({ type: ActionTypes.ADD_SHOPPING_LIST, payload: newList });
    return newList;
  };

  const updateShoppingList = (listId, updates) => {
    const updatedList = {
      ...state.shoppingLists.find(list => list.id === listId),
      ...updates
    };
    
    dispatch({ type: ActionTypes.UPDATE_SHOPPING_LIST, payload: updatedList });
  };

  const deleteShoppingList = (listId) => {
    dispatch({ type: ActionTypes.DELETE_SHOPPING_LIST, payload: listId });
  };

  const toggleShoppingListItem = (listId, itemId) => {
    const list = state.shoppingLists.find(l => l.id === listId);
    if (list) {
      const updatedItems = list.items.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );
      updateShoppingList(listId, { items: updatedItems });
    }
  };

  const addToShoppingList = (listId, item) => {
    const list = state.shoppingLists.find(l => l.id === listId);
    if (list) {
      const newItem = {
        id: Date.now(),
        checked: false,
        ...item
      };
      const updatedItems = [...list.items, newItem];
      updateShoppingList(listId, { items: updatedItems });
    }
  };

  const followUser = (userId) => {
    dispatch({ type: ActionTypes.FOLLOW_USER, payload: userId });
  };

  const unfollowUser = (userId) => {
    dispatch({ type: ActionTypes.UNFOLLOW_USER, payload: userId });
  };

  const value = {
    ...state,
    login,
    logout,
    register,
    updatePreferences,
    toggleFavorite,
    toggleBookmark,
    addToRecentlyViewed,
    createShoppingList,
    updateShoppingList,
    deleteShoppingList,
    toggleShoppingListItem,
    addToShoppingList,
    followUser,
    unfollowUser,
    // Helper functions
    isFavorite: (recipeId) => state.favorites.includes(recipeId),
    isBookmarked: (recipeId) => state.bookmarks.includes(recipeId),
    isFollowing: (userId) => state.following.includes(userId)
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext;