import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, User, Clock, Share2, Heart, 
  MessageSquare, Tag, Eye, Facebook, Twitter, Link as LinkIcon 
} from 'lucide-react';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import BlogCard from '../components/blog/BlogCard';
import { useApp } from '../context/AppContext';
import { getBlogPostById, getRelatedPosts, likeBlogPost } from '../services/api';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { actions } = useApp();
  
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const [postData, related] = await Promise.all([
          getBlogPostById(id),
          getRelatedPosts(id, 3)
        ]);
        
        setPost(postData);
        setRelatedPosts(related);
      } catch (error) {
        actions.setError('Failed to load blog post');
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadPost();
    }
  }, [id, actions, navigate]);

  const handleLike = async () => {
    try {
      setLiked(!liked);
      await likeBlogPost(post.id);
      setPost(prev => ({
        ...prev,
        likes: liked ? prev.likes - 1 : prev.likes + 1
      }));
    } catch (error) {
      setLiked(liked); // Revert on error
      actions.setError('Failed to like post');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // Show toast notification
        break;
      default:
        if (navigator.share) {
          navigator.share({ title, text, url });
        }
    }
    setShowShareMenu(false);
  };

  const handlePostClick = (relatedPost) => {
    navigate(`/blog/${relatedPost.id}`);
  };

  if (loading) {
    return <Loading />;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h2>
          <Button onClick={() => navigate('/blog')}>
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-video md:aspect-[21/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="absolute top-4 left-4">
          <Button
            variant="outline"
            icon={ArrowLeft}
            onClick={() => navigate('/blog')}
            className="bg-white/90 hover:bg-white"
          >
            Back to Blog
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <div className="max-w-4xl mx-auto text-white">
            {post.category && (
              <Link
                to={`/blog?category=${post.category.toLowerCase()}`}
                className="inline-block px-3 py-1 bg-primary-600 rounded-full text-sm font-medium mb-4 hover:bg-primary-700 transition-colors"
              >
                {post.category}
              </Link>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg md:text-xl mb-6 max-w-3xl text-gray-200">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <Button
              onClick={handleLike}
              variant="outline"
              icon={Heart}
              className={liked ? 'text-red-600 border-red-600' : ''}
            >
              {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
            </Button>
            
            <Button variant="outline" icon={MessageSquare}>
              {post.comments} Comments
            </Button>
          </div>
          
          <div className="relative">
            <Button
              onClick={() => setShowShareMenu(!showShareMenu)}
              variant="outline"
              icon={Share2}
            >
              Share
            </Button>
            
            {showShareMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-2 z-10">
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  Facebook
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                >
                  <Twitter className="h-4 w-4 text-blue-400" />
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                >
                  <LinkIcon className="h-4 w-4 text-gray-600" />
                  Copy Link
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.content && (
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-gray-700 leading-relaxed"
                />
              )}
              
              {/* If content is in sections */}
              {post.sections && post.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === 'heading' && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.content}
                    </h2>
                  )}
                  {section.type === 'paragraph' && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.content}
                    </p>
                  )}
                  {section.type === 'image' && (
                    <div className="my-8">
                      <img
                        src={section.src}
                        alt={section.alt}
                        className="w-full rounded-lg"
                      />
                      {section.caption && (
                        <p className="text-sm text-gray-500 text-center mt-2">
                          {section.caption}
                        </p>
                      )}
                    </div>
                  )}
                  {section.type === 'list' && (
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-primary-600 pl-6 my-6 italic text-gray-600">
                      {section.content}
                      {section.author && (
                        <cite className="block text-sm text-gray-500 mt-2">
                          — {section.author}
                        </cite>
                      )}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="border-t border-gray-200 px-8 py-6">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Author Bio */}
        {post.authorBio && (
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-medium text-gray-600">
                  {post.author[0]}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.authorBio}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Comments ({post.comments})
          </h3>
          
          {/* Comment Form */}
          <form className="mb-8">
            <textarea
              placeholder="Leave a comment..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
            <div className="mt-3 flex justify-end">
              <Button>Post Comment</Button>
            </div>
          </form>
          
          {/* Comments List */}
          {post.commentsList && post.commentsList.length > 0 ? (
            <div className="space-y-6">
              {post.commentsList.map((comment, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-600">
                        {comment.author[0]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-900">{comment.author}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No comments yet. Be the first to share your thoughts!
            </p>
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Related Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  onClick={handlePostClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;