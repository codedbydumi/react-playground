import { useApp } from '../context/AppContext';
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

/**
 * Custom hook for managing favorites with localStorage persistence
 */
export function useFavorites() {
  const { state, actions } = useApp();
  const [storedFavorites, setStoredFavorites] = useLocalStorage('recipe-favorites', []);

  // Sync localStorage with app state on mount
  useEffect(() => {
    if (storedFavorites.length > 0) {
      actions.setFavorites(storedFavorites);
    }
  }, []);

  // Sync app state with localStorage when favorites change
  useEffect(() => {
    setStoredFavorites(state.favorites);
  }, [state.favorites, setStoredFavorites]);

  const toggleFavorite = (recipeId) => {
    if (state.favorites.includes(recipeId)) {
      actions.removeFavorite(recipeId);
    } else {
      actions.addFavorite(recipeId);
    }
  };

  const isFavorite = (recipeId) => {
    return state.favorites.includes(recipeId);
  };

  const getFavoriteCount = () => {
    return state.favorites.length;
  };

  return {
    favorites: state.favorites,
    toggleFavorite,
    isFavorite,
    getFavoriteCount,
    addFavorite: actions.addFavorite,
    removeFavorite: actions.removeFavorite
  };
}