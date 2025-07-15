import React from 'react';
import { Search, Calendar, User, Eye, Heart, TrendingUp, Tag } from 'lucide-react';

const BlogSidebar = ({ 
  posts = [], 
  onPostClick, 
  onCategoryClick, 
  onTagClick,
  onAuthorClick 
}) => {
  // Get recent posts (last 5)
  const recentPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Get popular posts (by views or likes)
  const popularPosts = posts
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  // Get categories with post counts
  const categories = posts.reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {});

  // Get popular tags
  const tagCounts = posts.reduce((acc, post) => {
    if (post.tags) {
      post.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {});

  const popularTags = Object.entries(tagCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);

  // Get featured authors
  const authorCounts = posts.reduce((acc, post) => {
    if (post.author) {
      if (!acc[post.author]) {
        acc[post.author] = {
          name: post.author,
          count: 0,
          image: post.authorImage,
          totalViews: 0
        };
      }
      acc[post.author].count++;
      acc[post.author].totalViews += post.views || 0;
    }
    return acc;
  }, {});

  const topAuthors = Object.values(authorCounts)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Search Widget */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-primary-600" />
          Recent Posts
        </h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onPostClick && onPostClick(post)}
              className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-primary-600" />
          Popular Posts
        </h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => onPostClick && onPostClick(post)}
              className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary-600 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                  <div className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{post.views || 0}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-3 w-3 mr-1" />
                    <span>{post.likes || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {Object.entries(categories).map(([category, count]) => (
            <div
              key={category}
              onClick={() => onCategoryClick && onCategoryClick(category)}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <span className="text-sm text-gray-700 hover:text-primary-600">
                {category}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2 text-primary-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => onTagClick && onTagClick(tag)}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              #{tag} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Featured Authors */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <User className="h-5 w-5 mr-2 text-primary-600" />
          Featured Authors
        </h3>
        <div className="space-y-3">
          {topAuthors.map((author) => (
            <div
              key={author.name}
              onClick={() => onAuthorClick && onAuthorClick(author.name)}
              className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              {author.image ? (
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
              )}
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors">
                  {author.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {author.count} {author.count === 1 ? 'post' : 'posts'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-4 text-white">
        <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-sm text-primary-100 mb-4">
          Get the latest recipes and cooking tips delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-primary-600 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogSidebar;