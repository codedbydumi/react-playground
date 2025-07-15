import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Calendar, Tag, TrendingUp, Clock } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import BlogCard from '../components/blog/BlogCard';
import BlogSidebar from '../components/blog/BlogSidebar';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import { useApp } from '../context/AppContext';
import { getBlogPosts, searchBlogPosts, getBlogCategories, getFeaturedPosts } from '../services/api';

const Blog = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, actions } = useApp();
  
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [sortBy, setSortBy] = useState('newest');
  
  const postsPerPage = 9;

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true);
        
        const searchQuery = searchParams.get('search') || '';
        const category = searchParams.get('category') || '';
        const tag = searchParams.get('tag') || '';
        const sort = searchParams.get('sort') || 'newest';
        
        setSortBy(sort);
        
        const [postsResult, categoriesData, featuredData] = await Promise.all([
          searchQuery 
            ? searchBlogPosts(searchQuery, {
                category,
                tag,
                sort,
                page: currentPage,
                limit: postsPerPage
              })
            : getBlogPosts({
                category,
                tag,
                sort,
                page: currentPage,
                limit: postsPerPage
              }),
          getBlogCategories(),
          currentPage === 1 ? getFeaturedPosts(3) : Promise.resolve([])
        ]);
        
        setPosts(postsResult.posts);
        setTotalPages(postsResult.totalPages);
        setTotalPosts(postsResult.total);
        setCategories(categoriesData);
        
        if (currentPage === 1) {
          setFeaturedPosts(featuredData);
        }
      } catch (error) {
        actions.setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadBlogData();
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

  const handleCategoryFilter = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category && category !== 'all') {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  const handleTagFilter = (tag) => {
    const newParams = new URLSearchParams(searchParams);
    if (tag) {
      newParams.set('tag', tag);
    } else {
      newParams.delete('tag');
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

  const handlePostClick = (post) => {
    navigate(`/blog/${post.id}`);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setCurrentPage(1);
  };

  const hasActiveFilters = () => {
    return searchParams.get('search') || 
           searchParams.get('category') || 
           searchParams.get('tag');
  };

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' },
    { value: 'oldest', label: 'Oldest First' }
  ];

  const recentPosts = posts.slice(0, 5);
  const popularTags = [
    'Cooking Tips', 'Healthy Eating', 'Quick Meals', 'Baking', 'Seasonal',
    'Vegetarian', 'Meal Prep', 'Kitchen Tools', 'International', 'Desserts'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Culinary Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover cooking tips, techniques, and culinary inspiration from our kitchen to yours
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 max-w-2xl">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search blog posts..."
                defaultValue={searchParams.get('search') || ''}
              />
            </div>
            
            <div className="flex gap-2">
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
            </div>
          </div>
          
          {hasActiveFilters() && (
            <div className="mt-4 flex items-center gap-2 justify-center">
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
              {searchParams.get('tag') && (
                <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded">
                  Tag: {searchParams.get('tag')}
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
        {/* Featured Posts */}
        {currentPage === 1 && featuredPosts.length > 0 && !hasActiveFilters() && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-6 w-6 text-primary-600" />
              <h2 className="text-2xl font-display font-bold text-gray-900">
                Featured Posts
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={handlePostClick}
                  variant="featured"
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:order-2">
            <BlogSidebar
              categories={categories}
              popularTags={popularTags}
              recentPosts={recentPosts}
              selectedCategory={searchParams.get('category')}
              selectedTag={searchParams.get('tag')}
              onCategoryClick={handleCategoryFilter}
              onTagClick={handleTagFilter}
              onPostClick={handlePostClick}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 lg:order-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  {hasActiveFilters() ? 'Search Results' : 'Latest Posts'}
                </h2>
                <p className="text-gray-600 mt-1">
                  {totalPosts > 0 ? `${totalPosts} posts found` : 'No posts found'}
                </p>
              </div>
            </div>

            {loading ? (
              <Loading />
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No posts found
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
                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {posts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onClick={handlePostClick}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center">
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

      {/* Newsletter Section */}
      <section className="bg-primary-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get weekly cooking tips, recipes, and culinary insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-primary-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-accent-500 hover:bg-accent-600 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;