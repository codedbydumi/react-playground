import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, onClick, variant = 'default' }) => {
  const {
    id,
    title,
    excerpt,
    image,
    author,
    date,
    readTime,
    category,
    tags = []
  } = post;

  if (variant === 'featured') {
    return (
      <div 
        onClick={() => onClick && onClick(post)}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  {category}
                </span>
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              {title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{author}</span>
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{readTime}</span>
              </div>
            </div>
            <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
              Read More
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick && onClick(post)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              <span>{author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;