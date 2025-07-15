import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Clock, Users, Star, ArrowRight, Search, TrendingUp } from 'lucide-react';
import Button from '../components/common/Button';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: ChefHat, label: 'Recipes', value: '1,000+' },
    { icon: Clock, label: 'Minutes Saved', value: '50,000+' },
    { icon: Users, label: 'Happy Cooks', value: '25,000+' },
    { icon: Star, label: 'Average Rating', value: '4.8' }
  ];

  const categories = [
    { name: 'Breakfast', image: 'https://via.placeholder.com/300x200', count: 150 },
    { name: 'Lunch', image: 'https://via.placeholder.com/300x200', count: 200 },
    { name: 'Dinner', image: 'https://via.placeholder.com/300x200', count: 300 },
    { name: 'Desserts', image: 'https://via.placeholder.com/300x200', count: 120 },
    { name: 'Snacks', image: 'https://via.placeholder.com/300x200', count: 80 },
    { name: 'Beverages', image: 'https://via.placeholder.com/300x200', count: 60 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="block text-yellow-400">Favorite Recipe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From quick weeknight dinners to special occasion treats, find recipes that fit your lifestyle
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => navigate('/recipes')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              >
                Browse All Recipes
              </Button>
              <Button 
                onClick={() => navigate('/blog')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Recipe
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly recipe recommendations and cooking tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;