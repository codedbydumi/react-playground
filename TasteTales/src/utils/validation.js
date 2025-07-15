/**
 * Validation utility functions
 */

/**
 * Validate email address
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate required field
 */
export function validateRequired(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
}

/**
 * Validate minimum length
 */
export function validateMinLength(value, minLength) {
  if (typeof value !== 'string') {
    return false;
  }
  return value.trim().length >= minLength;
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value, maxLength) {
  if (typeof value !== 'string') {
    return false;
  }
  return value.length <= maxLength;
}

/**
 * Validate phone number (basic US format)
 */
export function validatePhone(phone) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
}

/**
 * Validate URL
 */
export function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate number range
 */
export function validateNumberRange(value, min, max) {
  const num = Number(value);
  if (isNaN(num)) {
    return false;
  }
  return num >= min && num <= max;
}

/**
 * Validate rating (1-5 stars)
 */
export function validateRating(rating) {
  return validateNumberRange(rating, 1, 5);
}

/**
 * Validate cooking time (positive number)
 */
export function validateCookTime(time) {
  const num = Number(time);
  return !isNaN(num) && num > 0 && num <= 1440; // Max 24 hours
}

/**
 * Validate servings (positive integer)
 */
export function validateServings(servings) {
  const num = Number(servings);
  return Number.isInteger(num) && num > 0 && num <= 50;
}

/**
 * Comprehensive form validation
 */
export function validateForm(data, rules) {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const value = data[field];
    const fieldRules = rules[field];
    
    // Check if field is required
    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = `${fieldRules.label || field} is required`;
      return;
    }
    
    // Skip other validations if field is empty and not required
    if (!validateRequired(value) && !fieldRules.required) {
      return;
    }
    
    // Email validation
    if (fieldRules.email && !validateEmail(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid email address`;
      return;
    }
    
    // Min length validation
    if (fieldRules.minLength && !validateMinLength(value, fieldRules.minLength)) {
      errors[field] = `${fieldRules.label || field} must be at least ${fieldRules.minLength} characters`;
      return;
    }
    
    // Max length validation
    if (fieldRules.maxLength && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[field] = `${fieldRules.label || field} must be no more than ${fieldRules.maxLength} characters`;
      return;
    }
    
    // Phone validation
    if (fieldRules.phone && !validatePhone(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid phone number`;
      return;
    }
    
    // URL validation
    if (fieldRules.url && !validateUrl(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid URL`;
      return;
    }
    
    // Number range validation
    if (fieldRules.numberRange) {
      const { min, max } = fieldRules.numberRange;
      if (!validateNumberRange(value, min, max)) {
        errors[field] = `${fieldRules.label || field} must be between ${min} and ${max}`;
        return;
      }
    }
    
    // Custom validation function
    if (fieldRules.custom && typeof fieldRules.custom === 'function') {
      const customResult = fieldRules.custom(value, data);
      if (customResult !== true) {
        errors[field] = customResult || `${fieldRules.label || field} is invalid`;
        return;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Recipe form validation rules
 */
export const recipeValidationRules = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 100,
    label: 'Recipe title'
  },
  description: {
    required: true,
    minLength: 10,
    maxLength: 500,
    label: 'Recipe description'
  },
  prepTime: {
    required: true,
    numberRange: { min: 1, max: 300 },
    label: 'Preparation time'
  },
  cookTime: {
    required: true,
    numberRange: { min: 1, max: 1440 },
    label: 'Cooking time'
  },
  servings: {
    required: true,
    numberRange: { min: 1, max: 50 },
    label: 'Number of servings'
  },
  difficulty: {
    required: true,
    custom: (value) => ['easy', 'medium', 'hard'].includes(value) || 'Difficulty must be easy, medium, or hard',
    label: 'Difficulty level'
  }
};

/**
 * Contact form validation rules
 */
export const contactValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    label: 'Name'
  },
  email: {
    required: true,
    email: true,
    label: 'Email address'
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100,
    label: 'Subject'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    label: 'Message'
  }
};