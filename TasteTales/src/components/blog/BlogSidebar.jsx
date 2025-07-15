import React from 'react';
import { Calendar, Tag, TrendingUp } from 'lucide-react';

const BlogSidebar = ({ 
  categories = [], 
  popularTags = [], 
  recentPosts = [],
  selectedCategory,
  selectedTag,
  onCategoryClick,
  onTagClick,
  onPostClick
}) => {
  
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-blue-600" />
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryClick('all')}
            className={`block w-full text-left px-3 py-2 rounded transition-colors ${
              !selectedCategory || selectedCategory === 'all'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryClick(category.name.toLowerCase())}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                selectedCategory === category.name.toLowerCase()
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{category.name}</span>
                <span className="text-sm text-gray-400">({category.count})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2 text-blue-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => onTagClick(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            Recent Posts
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onPostClick(post)}
                className="cursor-pointer group"
              >
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.image || 'https://via.placeholder.com/64x64'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {post.date} • {post.readTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest cooking tips and recipes delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="w-full bg-white text-blue-600 py-2 rounded font-medium text-sm hover:bg-blue-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;