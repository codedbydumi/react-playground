import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SearchContext = createContext();

const initialState = {
  currentQuery: '',
  searchHistory: [],
  recentSearches: [],
  searchResults: {
    recipes: [],
    blogPosts: [],
    loading: false,
    error: null
  },
  filters: {
    category: '',
    difficulty: '',
    cookingTime: '',
    cuisine: '',
    dietaryRestrictions: [],
    rating: 0
  },
  suggestions: [],
  showSuggestions: false
};

const ActionTypes = {
  SET_QUERY: 'SET_QUERY',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  ADD_TO_HISTORY: 'ADD_TO_HISTORY',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
  SET_FILTERS: 'SET_FILTERS',
  RESET_FILTERS: 'RESET_FILTERS',
  SET_SUGGESTIONS: 'SET_SUGGESTIONS',
  SHOW_SUGGESTIONS: 'SHOW_SUGGESTIONS',
  HIDE_SUGGESTIONS: 'HIDE_SUGGESTIONS'
};

function searchReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_QUERY:
      return {
        ...state,
        currentQuery: action.payload
      };

    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          ...action.payload
        }
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          loading: action.payload
        }
      };

    case ActionTypes.SET_ERROR:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          error: action.payload,
          loading: false
        }
      };

    case ActionTypes.ADD_TO_HISTORY:
      const newHistory = [
        action.payload,
        ...state.searchHistory.filter(item => item !== action.payload)
      ].slice(0, 10); // Keep only last 10 searches

      return {
        ...state,
        searchHistory: newHistory,
        recentSearches: newHistory.slice(0, 5) // Keep 5 most recent for quick access
      };

    case ActionTypes.CLEAR_HISTORY:
      return {
        ...state,
        searchHistory: [],
        recentSearches: []
      };

    case ActionTypes.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    case ActionTypes.RESET_FILTERS:
      return {
        ...state,
        filters: {
          category: '',
          difficulty: '',
          cookingTime: '',
          cuisine: '',
          dietaryRestrictions: [],
          rating: 0
        }
      };

    case ActionTypes.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      };

    case ActionTypes.SHOW_SUGGESTIONS:
      return {
        ...state,
        showSuggestions: true
      };

    case ActionTypes.HIDE_SUGGESTIONS:
      return {
        ...state,
        showSuggestions: false
      };

    default:
      return state;
  }
}

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const [storedHistory, setStoredHistory] = useLocalStorage('searchHistory', []);

  // Load search history from localStorage on mount
  useEffect(() => {
    if (storedHistory.length > 0) {
      dispatch({
        type: ActionTypes.ADD_TO_HISTORY,
        payload: storedHistory[0] // This will set the entire history through the reducer logic
      });
      // Set the full history
      dispatch({
        type: ActionTypes.SET_SEARCH_RESULTS,
        payload: { searchHistory: storedHistory }
      });
    }
  }, [storedHistory]);

  // Persist search history to localStorage
  useEffect(() => {
    if (state.searchHistory.length > 0) {
      setStoredHistory(state.searchHistory);
    }
  }, [state.searchHistory, setStoredHistory]);

  const setQuery = (query) => {
    dispatch({ type: ActionTypes.SET_QUERY, payload: query });
  };

  const performSearch = async (query, searchType = 'all') => {
    if (!query.trim()) return;

    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    dispatch({ type: ActionTypes.SET_ERROR, payload: null });

    try {
      // Add to search history
      dispatch({ type: ActionTypes.ADD_TO_HISTORY, payload: query });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock search results
      const mockResults = {
        recipes: [
          { id: 1, title: `${query} Recipe 1`, type: 'recipe' },
          { id: 2, title: `${query} Recipe 2`, type: 'recipe' },
          { id: 3, title: `${query} Recipe 3`, type: 'recipe' }
        ],
        blogPosts: [
          { id: 1, title: `${query} Blog Post 1`, type: 'blog' },
          { id: 2, title: `${query} Blog Post 2`, type: 'blog' }
        ]
      };

      dispatch({
        type: ActionTypes.SET_SEARCH_RESULTS,
        payload: {
          ...mockResults,
          loading: false
        }
      });

    } catch (error) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: error.message || 'Search failed'
      });
    }
  };

  const getSuggestions = async (query) => {
    if (!query || query.length < 2) {
      dispatch({ type: ActionTypes.SET_SUGGESTIONS, payload: [] });
      return;
    }

    // Mock suggestions based on query
    const mockSuggestions = [
      `${query} recipe`,
      `${query} chicken`,
      `${query} vegetarian`,
      `${query} quick`,
      `${query} healthy`
    ].slice(0, 5);

    dispatch({ type: ActionTypes.SET_SUGGESTIONS, payload: mockSuggestions });
  };

  const clearSearchHistory = () => {
    dispatch({ type: ActionTypes.CLEAR_HISTORY });
    setStoredHistory([]);
  };

  const setFilters = (filters) => {
    dispatch({ type: ActionTypes.SET_FILTERS, payload: filters });
  };

  const resetFilters = () => {
    dispatch({ type: ActionTypes.RESET_FILTERS });
  };

  const showSuggestions = () => {
    dispatch({ type: ActionTypes.SHOW_SUGGESTIONS });
  };

  const hideSuggestions = () => {
    dispatch({ type: ActionTypes.HIDE_SUGGESTIONS });
  };

  const getPopularSearches = () => {
    // Mock popular searches
    return [
      'chicken recipes',
      'chocolate cake',
      'pasta dishes',
      'healthy meals',
      'quick dinner',
      'vegetarian recipes',
      'desserts',
      'breakfast ideas'
    ];
  };

  const getSearchSuggestions = (query) => {
    const popular = getPopularSearches();
    const history = state.searchHistory;
    
    if (!query) {
      return {
        recent: history.slice(0, 3),
        popular: popular.slice(0, 5)
      };
    }

    const filteredHistory = history.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    
    const filteredPopular = popular.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );

    return {
      recent: filteredHistory.slice(0, 3),
      popular: filteredPopular.slice(0, 5),
      suggestions: state.suggestions
    };
  };

  const value = {
    ...state,
    setQuery,
    performSearch,
    getSuggestions,
    clearSearchHistory,
    setFilters,
    resetFilters,
    showSuggestions,
    hideSuggestions,
    getPopularSearches,
    getSearchSuggestions
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export default SearchContext;