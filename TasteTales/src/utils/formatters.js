/**
 * Utility functions for formatting data
 */

/**
 * Format cooking time from minutes to readable string
 */
export function formatCookTime(minutes) {
  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''}`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Format date to readable string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const formatOptions = { ...defaultOptions, ...options };
  
  if (typeof date === 'string') {
    date = new Date(date);
  }
  
  return date.toLocaleDateString('en-US', formatOptions);
}

/**
 * Format relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date) {
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const diffInSeconds = Math.floor((now - targetDate) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
}

/**
 * Format number with commas (e.g., 1,234)
 */
export function formatNumber(number) {
  return number.toLocaleString();
}

/**
 * Format rating to display with stars
 */
export function formatRating(rating, maxRating = 5) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    rating: Number(rating).toFixed(1),
    fullStars,
    hasHalfStar,
    emptyStars
  };
}

/**
 * Format serving size text
 */
export function formatServings(servings) {
  if (servings === 1) {
    return '1 serving';
  }
  return `${servings} servings`;
}

/**
 * Format calories with unit
 */
export function formatCalories(calories) {
  return `${calories} cal`;
}

/**
 * Format recipe difficulty level
 */
export function formatDifficulty(difficulty) {
  const difficultyMap = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  };
  
  return difficultyMap[difficulty?.toLowerCase()] || difficulty;
}

/**
 * Format ingredient quantity with fractions
 */
export function formatQuantity(quantity) {
  if (typeof quantity === 'number') {
    // Convert decimal to fraction if needed
    if (quantity % 1 !== 0) {
      const fractionMap = {
        0.25: '¼',
        0.33: '⅓',
        0.5: '½',
        0.67: '⅔',
        0.75: '¾'
      };
      
      const decimal = quantity % 1;
      const whole = Math.floor(quantity);
      const fraction = fractionMap[Math.round(decimal * 100) / 100];
      
      if (fraction) {
        return whole > 0 ? `${whole} ${fraction}` : fraction;
      }
    }
    
    return quantity.toString();
  }
  
  return quantity;
}

/**
 * Format file size in bytes to human readable format
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.slice(0, maxLength).trim() + '...';
}