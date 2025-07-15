import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import RecipeCard from '../components/recipe/RecipeCard';
import FilterSidebar from '../components/recipe/FilterSidebar';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import { useApp } from '../context/AppContext';
import { getRecipes, searchRecipes } from '../services/api';

const Recipes = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, actions } = useApp();
  
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecipes, setTotalRecipes] = useState(0);
  
  const recipesPerPage = 12;

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        
        const searchQuery = searchParams.get('search') || '';
        const category = searchParams.get('category') || '';
        const sort = searchParams.get('sort') || 'newest';
        
        setSortBy(sort);
        actions.setSearchQuery(searchQuery);
        
        const filters = {
          category,
          difficulty: searchParams.get('difficulty') || '',
          cookingTime: searchParams.get('cookingTime') || '',
          dietary: searchParams.get('dietary')?.split(',').filter(Boolean) || []
        };
        
        actions.setFilters(filters);
        
        let result;
        if (searchQuery) {
          result = await searchRecipes(searchQuery, {
            ...filters,
            sort,
            page: currentPage,
            limit: recipesPerPage
          });
        } else {
          result = await getRecipes({
            ...filters,
            sort,
            page: currentPage,
            limit: recipesPerPage
          });
        }
        
        setRecipes(result.recipes);
        setTotalPages(result.totalPages);
        setTotalRecipes(result.total);
      } catch (error) {
        actions.setError('Failed to load recipes');
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [searchParams, currentPage, actions]);

  const handleSearch = (query) => {
    const newParams = new URLSearchParams(searchParams);
    if (query) {
      newParams.set('search', query);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (filterType === 'dietary') {
      const currentDietary = searchParams.get('dietary')?.split(',').filter(Boolean) || [];
      let newDietary;
      
      if (currentDietary.includes(value)) {
        newDietary = currentDietary.filter(item => item !== value);
      } else {
        newDietary = [...currentDietary, value];
      }
      
      if (newDietary.length > 0) {
        newParams.set('dietary', newDietary.join(','));
      } else {
        newParams.delete('dietary');
      }
    } else {
      if (value) {
        newParams.set(filterType, value);
      } else {
        newParams.delete(filterType);
      }
    }
    
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSort);
    setSearchParams(newParams);
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setCurrentPage(1);
  };

  const hasActiveFilters = () => {
    return searchParams.get('search') || 
           searchParams.get('category') || 
           searchParams.get('difficulty') || 
           searchParams.get('cookingTime') || 
           searchParams.get('dietary');
  };

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'cookTime', label: 'Cook Time (Low to High)' },
    { value: 'difficulty', label: 'Difficulty (Easy to Hard)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Recipes
            </h1>
            <p className="text-gray-600">
              {totalRecipes > 0 ? `${totalRecipes} recipes found` : 'Discover delicious recipes'}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search recipes..."
                defaultValue={searchParams.get('search') || ''}
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                icon={SlidersHorizontal}
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                Filters
              </Button>
              
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {hasActiveFilters() && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {searchParams.get('search') && (
                <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded">
                  Search: {searchParams.get('search')}
                </span>
              )}
              {searchParams.get('category') && (
                <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded">
                  Category: {searchParams.get('category')}
                </span>
              )}
              {searchParams.get('difficulty') && (
                <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded">
                  Difficulty: {searchParams.get('difficulty')}
                </span>
              )}
              <Button
                variant="outline"
                size="small"
                onClick={clearAllFilters}
                className="text-xs"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-64 flex-shrink-0`}>
            <FilterSidebar
              filters={state.filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearAllFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {loading ? (
              <Loading />
            ) : recipes.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No recipes found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                {/* Recipe Grid/List */}
                <div className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-6'
                }>
                  {recipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      onClick={handleRecipeClick}
                      variant={viewMode === 'list' ? 'horizontal' : 'default'}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex gap-2">
                      <Button
                        variant="outline"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        Previous
                      </Button>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? 'default' : 'outline'}
                            onClick={() => setCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                      
                      <Button
                        variant="outline"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Next
                      </Button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;