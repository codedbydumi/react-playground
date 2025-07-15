import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';

// Pages
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Context
import { AppProvider } from './context/AppContext';

// Services
import { recipeService } from './services/recipeService';
import { blogService } from './services/blogService';

// Styles
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  // Initialize app data
  useEffect(() => {
    const initializeApp = async () => {
      try {
        setLoading(true);
        
        // Load initial data
        const [recipesData, blogData] = await Promise.all([
          recipeService.getRecipes(),
          blogService.getBlogPosts()
        ]);
        
        setRecipes(recipesData);
        setBlogPosts(blogData);
        
        // Load user preferences from localStorage
        const savedFavorites = localStorage.getItem('favorites');
        const savedBookmarks = localStorage.getItem('bookmarks');
        
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
        
        if (savedBookmarks) {
          setBookmarks(JSON.parse(savedBookmarks));
        }
        
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Recipe functions
  const addToFavorites = (recipe) => {
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === recipe.id);
      if (exists) {
        return prev.filter(fav => fav.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  const removeFromFavorites = (recipeId) => {
    setFavorites(prev => prev.filter(fav => fav.id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    return favorites.some(fav => fav.id === recipeId);
  };

  // Blog functions
  const addToBookmarks = (post) => {
    setBookmarks(prev => {
      const exists = prev.find(bookmark => bookmark.id === post.id);
      if (exists) {
        return prev.filter(bookmark => bookmark.id !== post.id);
      }
      return [...prev, post];
    });
  };

  const removeFromBookmarks = (postId) => {
    setBookmarks(prev => prev.filter(bookmark => bookmark.id !== postId));
  };

  const isBookmarked = (postId) => {
    return bookmarks.some(bookmark => bookmark.id === postId);
  };

  const likePost = (postId) => {
    setBlogPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? (post.likes || 0) - 1 : (post.likes || 0) + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const sharePost = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/blog/${post.id}`
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = `${window.location.origin}/blog/${post.id}`;
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  // App context value
  const contextValue = {
    recipes,
    setRecipes,
    blogPosts,
    setBlogPosts,
    favorites,
    bookmarks,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    addToBookmarks,
    removeFromBookmarks,
    isBookmarked,
    likePost,
    sharePost,
    loading,
    setLoading
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <AppProvider value={contextValue}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          
          <main className="flex-1">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />
              
              {/* Recipe Routes */}
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/recipe/:id" element={<RecipeDetailPage />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              
              {/* Other Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Redirects */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;