import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import RecipeCard from '../components/recipe/RecipeCard';
import BlogCard from '../components/blog/BlogCard';
import Loading from '../components/common/Loading';
import { recipeService } from '../services/recipeService';
import { blogService } from '../services/blogService';

const HomePage = () => {
  const { recipes, blogPosts, loading } = useApp();
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [stats, setStats] = useState({
    totalRecipes: 0,
    totalPosts: 0,
    categories: 0
  });

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        // Get featured recipes
        const featured = await recipeService.getFeaturedRecipes();
        setFeaturedRecipes(featured.slice(0, 3));

        // Get recent blog posts
        const recent = blogPosts.slice(0, 3);
        setRecentPosts(recent);

        // Calculate stats
        const categories = await recipeService.getCategories();
        setStats({
          totalRecipes: recipes.length,
          totalPosts: blogPosts.length,
          categories: categories.length
        });
      } catch (error) {
        console.error('Error loading home data:', error);
      }
    };

    if (recipes.length > 0 && blogPosts.length > 0) {
      loadHomeData();
    }
  }, [recipes, blogPosts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Recipes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From quick weeknight dinners to elaborate weekend feasts, find the perfect recipe for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recipes"
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Recipes
              </Link>
              <Link
                to="/blog"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                {stats.totalRecipes}+
              </div>
              <div className="text-gray-600">Delicious Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                {stats.categories}+
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                {stats.totalPosts}+
              </div>
              <div className="text-gray-600">Blog Posts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked recipes that our community loves the most
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/recipes"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tips, tricks, and stories from the world of cooking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Read More Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who trust our recipes for their daily meals
          </p>
          <Link
            to="/recipes"
            className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;