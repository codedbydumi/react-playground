import { useState, useEffect, useMemo } from 'react';

export const useSearch = (data, searchFields = ['title', 'description']) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Search results
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return data;
    }

    const lowercaseSearch = debouncedSearchTerm.toLowerCase();
    
    return data.filter(item => {
      // Search in specified fields
      const matchesFields = searchFields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowercaseSearch);
        }
        return false;
      });

      // Search in arrays (like ingredients, tags)
      const matchesArrays = ['ingredients', 'tags'].some(field => {
        const array = item[field];
        if (Array.isArray(array)) {
          return array.some(element => 
            element.toLowerCase().includes(lowercaseSearch)
          );
        }
        return false;
      });

      // Search in nested objects (like author)
      const matchesNested = item.author && 
        item.author.name && 
        item.author.name.toLowerCase().includes(lowercaseSearch);

      return matchesFields || matchesArrays || matchesNested;
    });
  }, [data, debouncedSearchTerm, searchFields]);

  // Search statistics
  const searchStats = useMemo(() => {
    return {
      total: data.length,
      filtered: searchResults.length,
      isSearching: debouncedSearchTerm.length > 0
    };
  }, [data.length, searchResults.length, debouncedSearchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    searchResults,
    searchStats,
    clearSearch
  };
};