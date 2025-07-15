import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';

const BlogPost = ({ post, onBack, onShare, onLike, onBookmark }) => {
  const {
    id,
    title,
    content,
    image,
    author,
    authorImage,
    date,
    readTime,
    category,
    tags = [],
    likes = 0,
    isLiked = false,
    isBookmarked = false
  } = post;

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </button>
        
        {category && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
              {category}
            </span>
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          {title}
        </h1>
        
        {/* Author Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {authorImage && (
                <img 
                  src={authorImage} 
                  alt={author}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span className="font-medium text-gray-900">{author}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLike && onLike(id)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'bg-red-50 text-red-600' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{likes}</span>
            </button>
            
            <button
              onClick={() => onBookmark && onBookmark(id)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={() => onShare && onShare(post)}
              className="p-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {image && (
        <div className="mb-8">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div 
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Share Section */}
      <div className="border-t pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Share this post:</span>
            <button
              onClick={() => onShare && onShare(post)}
              className="flex items-center space-x-1 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLike && onLike(id)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'bg-red-50 text-red-600' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likes} likes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;