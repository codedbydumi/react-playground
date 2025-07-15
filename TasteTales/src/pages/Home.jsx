import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Clock, Users, Star, ArrowRight, Search, TrendingUp } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import RecipeCard from '../components/recipe/RecipeCard';
import BlogCard from '../components/blog/BlogCard';
import Button from '../components/common/Button';
import { useApp } from '../context/AppContext';
import { getFeaturedRecipes, getPopularRecipes, getRecentBlogPosts } from '../services/api';

const Home = () => {
  const navigate = useNavigate();
  const { state, actions } = useApp();
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const [featured, popular, posts] = await Promise.all([
          getFeaturedRecipes(),
          getPopularRecipes(6),
          getRecentBlogPosts(3)
        ]);
        
        setFeaturedRecipes(featured);
        setPopularRecipes(popular);
        setRecentPosts(posts);
      } catch (error) {
        actions.setError('Failed to load home data');
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, [actions]);

  const handleSearch = (query) => {
    actions.setSearchQuery(query);
    navigate(`/recipes?search=${encodeURIComponent(query)}`);
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleBlogClick = (post) => {
    navigate(`/blog/${post.id}`);
  };

  const stats = [
    { icon: ChefHat, label: 'Recipes', value: '1,000+' },
    { icon: Clock, label: 'Minutes Saved', value: '50,000+' },
    { icon: Users, label: 'Happy Cooks', value: '25,000+' },
    { icon: Star, label: 'Average Rating', value: '4.8' }
  ];

  const categories = [
    { name: 'Breakfast', image: '/api/placeholder/300/200', count: 150 },
    { name: 'Lunch', image: '/api/placeholder/300/200', count: 200 },
    { name: 'Dinner', image: '/api/placeholder/300/200', count: 300 },
    { name: 'Desserts', image: '/api/placeholder/300/200', count: 120 },
    { name: 'Snacks', image: '/api/placeholder/300/200', count: 80 },
    { name: 'Beverages', image: '/api/placeholder/300/200', count: 60 }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Discover Your Next
              <span className="block text-accent-400">Favorite Recipe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-100">
              From quick weeknight dinners to special occasion treats, find recipes that fit your lifestyle
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Search recipes, ingredients, or cuisines..."
                size="large"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => navigate('/recipes')}
                size="large"
                className="bg-accent-500 hover:bg-accent-600"
              >
                Browse All Recipes
              </Button>
              <Button 
                onClick={() => navigate('/blog')}
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Read Our Blog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked recipes from our culinary experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={handleRecipeClick}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find recipes for every meal and occasion
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/recipes?category=${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} recipes</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Popular This Week
              </h2>
              <p className="text-xl text-gray-600">
                Most loved recipes by our community
              </p>
            </div>
            <Button
              onClick={() => navigate('/recipes?sort=popular')}
              variant="outline"
              icon={TrendingUp}
            >
              View All Popular
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={handleRecipeClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-xl text-gray-600">
                Tips, tricks, and culinary inspiration
              </p>
            </div>
            <Button
              onClick={() => navigate('/blog')}
              variant="outline"
              icon={ArrowRight}
            >
              Read More Posts
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={handleBlogClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Never Miss a Recipe
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get weekly recipe recommendations and cooking tips delivered to your inbox
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

export default Home;