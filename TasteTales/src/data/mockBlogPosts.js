/**
 * Mock blog post data for development and testing
 */

export const mockBlogPosts = [
  {
    id: 1,
    title: "10 Essential Knife Skills Every Home Cook Should Master",
    excerpt: "Proper knife technique is the foundation of good cooking. Learn these essential cuts and safety tips to transform your kitchen skills.",
    content: `
      <p>Whether you're a beginner cook or looking to refine your technique, mastering basic knife skills is essential for efficient and safe cooking. Here are the fundamental cuts every home cook should know.</p>
      
      <h2>1. The Basic Grip</h2>
      <p>Hold the knife with your dominant hand, gripping the handle firmly but not tightly. Your index finger and thumb should pinch the blade just above the handle for better control.</p>
      
      <h2>2. The Claw Grip</h2>
      <p>Use your non-dominant hand to hold the food, curving your fingertips under like a claw. This protects your fingers while providing stability.</p>
      
      <h2>3. Essential Cuts</h2>
      <ul>
        <li><strong>Julienne:</strong> Thin matchstick cuts, perfect for stir-fries</li>
        <li><strong>Dice:</strong> Uniform cubes in small, medium, or large sizes</li>
        <li><strong>Chiffonade:</strong> Thin ribbon cuts for herbs and leafy greens</li>
        <li><strong>Brunoise:</strong> Very fine dice, typically 1/8 inch</li>
      </ul>
      
      <h2>Safety Tips</h2>
      <p>Always keep your knives sharp - dull knives are more dangerous than sharp ones. Clean and store them properly, and never try to catch a falling knife.</p>
    `,
    image: "https://images.unsplash.com/photo-1594736797933-d0d3847d7d2d?w=800&h=400&fit=crop",
    author: "Chef Maria Rodriguez",
    authorBio: "Head chef with 15 years of culinary experience, specializing in technique education.",
    authorImage: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Techniques",
    tags: ["knife-skills", "techniques", "cooking-basics", "safety"],
    views: 3420,
    likes: 156,
    comments: 23,
    featured: true,
    seo: {
      metaDescription: "Master essential knife skills with our comprehensive guide. Learn proper grip, basic cuts, and safety tips for efficient cooking.",
      keywords: ["knife skills", "cooking techniques", "culinary basics"]
    },
    relatedRecipes: [1, 2, 3],
    commentsList: [
      {
        id: 1,
        author: "FoodLover92",
        authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
        content: "This really helped me improve my chopping technique! The claw grip was a game-changer.",
        date: "2024-01-16",
        likes: 5,
        replies: []
      },
      {
        id: 2,
        author: "HomeCookJenny",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b3e2?w=50&h=50&fit=crop&crop=face",
        content: "Great tips! I've been cooking for years but learned something new about knife safety.",
        date: "2024-01-17",
        likes: 3,
        replies: [
          {
            id: 3,
            author: "Chef Maria Rodriguez",
            authorImage: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=50&h=50&fit=crop&crop=face",
            content: "Thanks Jenny! It's always great when experienced cooks pick up new tips.",
            date: "2024-01-17",
            likes: 2
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Science Behind Perfect Pasta Water",
    excerpt: "Why salting your pasta water matters more than you think, and how to achieve the perfect al dente texture every time.",
    content: `
      <p>Cooking pasta seems simple, but there's actually quite a bit of science behind achieving that perfect al dente texture. Let's dive into the chemistry of pasta cooking.</p>
      
      <h2>Why Salt Matters</h2>
      <p>Salting pasta water isn't just about flavor - though that's important too. Salt raises the boiling point of water slightly and helps the pasta cook more evenly. The general rule is to use about 1 tablespoon of salt per gallon of water.</p>
      
      <h2>The Starch Connection</h2>
      <p>As pasta cooks, it releases starch into the water. This starchy water becomes a valuable cooking liquid that can help bind sauces to your pasta. Always reserve a cup of pasta water before draining!</p>
      
      <h2>Achieving Al Dente</h2>
      <p>Al dente means "to the tooth" in Italian. The pasta should have a slight firmness when bitten. This texture is achieved by cooking the pasta until the starch granules are just fully hydrated but not overcooked.</p>
      
      <h2>The Finishing Touch</h2>
      <p>Never rinse pasta unless you're making a cold salad. Instead, transfer hot pasta directly to your sauce and toss with a splash of that starchy pasta water for the perfect consistency.</p>
    `,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d946?w=800&h=400&fit=crop",
    author: "Dr. Food Science",
    authorBio: "Food scientist and culinary educator with a PhD in Food Chemistry.",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Food Science",
    tags: ["pasta", "food-science", "cooking-tips", "techniques"],
    views: 2150,
    likes: 89,
    comments: 15,
    featured: false,
    seo: {
      metaDescription: "Learn the science behind perfect pasta cooking. Discover why salting water matters and how to achieve al dente texture.",
      keywords: ["pasta cooking", "food science", "al dente", "cooking techniques"]
    },
    relatedRecipes: [1],
    commentsList: [
      {
        id: 1,
        author: "PastaPerfectionist",
        authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop&crop=face",
        content: "I never knew about the starch connection! This explains why my sauces never stuck properly before.",
        date: "2024-01-11",
        likes: 8,
        replies: []
      }
    ]
  },
  {
    id: 3,
    title: "Seasonal Cooking: Making the Most of Winter Produce",
    excerpt: "Discover how to create delicious, nutritious meals using winter's bounty of root vegetables, citrus, and hearty greens.",
    content: `
      <p>Winter might seem like a challenging time for fresh produce, but it's actually a season rich with unique flavors and nutritious options. Let's explore how to make the most of winter's offerings.</p>
      
      <h2>Root Vegetables: Winter's Comfort Food</h2>
      <p>Root vegetables like carrots, parsnips, turnips, and sweet potatoes are at their peak in winter. These vegetables are perfect for roasting, braising, or adding to hearty stews.</p>
      
      <h2>Citrus Season</h2>
      <p>Winter is citrus season! Oranges, lemons, limes, and grapefruits are at their juiciest. Use them to brighten heavy winter dishes or create refreshing desserts.</p>
      
      <h2>Hardy Greens</h2>
      <p>Kale, collard greens, and Brussels sprouts actually taste better after a frost. The cold weather converts some of their starches to sugars, making them sweeter and more tender.</p>
      
      <h2>Storage Tips</h2>
      <p>Most winter vegetables store well in cool, dry places. Root vegetables can last for weeks when stored properly, making them economical choices for meal planning.</p>
      
      <h2>Cooking Techniques</h2>
      <p>Winter vegetables shine when roasted, braised, or slow-cooked. These methods bring out their natural sweetness and create comforting, warming dishes perfect for cold days.</p>
    `,
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&h=400&fit=crop",
    author: "Seasonal Chef Tom",
    authorBio: "Farm-to-table chef specializing in seasonal and sustainable cooking practices.",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Seasonal Cooking",
    tags: ["winter", "seasonal", "vegetables", "produce", "healthy"],
    views: 1890,
    likes: 67,
    comments: 12,
    featured: true,
    seo: {
      metaDescription: "Make the most of winter produce with seasonal cooking tips. Learn about root vegetables, citrus, and hardy greens.",
      keywords: ["winter cooking", "seasonal produce", "root vegetables", "healthy eating"]
    },
    relatedRecipes: [3],
    commentsList: []
  },
  {
    id: 4,
    title: "Mastering the Art of Bread Making",
    excerpt: "From understanding yeast to achieving the perfect crust, learn the fundamentals of baking artisan bread at home.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=400&fit=crop",
    author: "Baker Sarah",
    authorBio: "Professional baker and bread-making instructor with 12 years of experience.",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "Baking",
    tags: ["bread", "baking", "yeast", "artisan"],
    views: 2890,
    likes: 198,
    comments: 34,
    featured: false
  },
  {
    id: 5,
    title: "Spice Blending 101: Creating Your Own Signature Mixes",
    excerpt: "Learn the art of combining spices to create unique flavor profiles that will elevate your cooking to the next level.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=400&fit=crop",
    author: "Spice Master Ahmed",
    authorBio: "Third-generation spice merchant and cookbook author specializing in Middle Eastern and Indian cuisines.",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-18",
    readTime: "9 min read",
    category: "Ingredients",
    tags: ["spices", "seasoning", "flavor", "blending"],
    views: 1650,
    likes: 124,
    comments: 28,
    featured: true
  },
  {
    id: 6,
    title: "Kitchen Equipment Essentials for Beginners",
    excerpt: "Building your first kitchen? Here's everything you need to know about choosing the right tools without breaking the bank.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    author: "Kitchen Expert Lisa",
    authorBio: "Culinary school instructor and kitchen consultant helping home cooks optimize their cooking spaces.",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-12",
    readTime: "10 min read",
    category: "Kitchen Tools",
    tags: ["equipment", "kitchen", "beginner", "tools"],
    views: 3200,
    likes: 167,
    comments: 45,
    featured: false
  }
];

export const blogCategories = [
  { 
    id: 'techniques', 
    name: 'Techniques', 
    count: 24, 
    description: 'Master fundamental cooking skills and methods',
    color: '#3B82F6'
  },
  { 
    id: 'food-science', 
    name: 'Food Science', 
    count: 18, 
    description: 'Understand the why behind cooking',
    color: '#10B981'
  },
  { 
    id: 'seasonal-cooking', 
    name: 'Seasonal Cooking', 
    count: 15, 
    description: 'Cook with the seasons for best flavor',
    color: '#F59E0B'
  },
  { 
    id: 'tips-tricks', 
    name: 'Tips & Tricks', 
    count: 32, 
    description: 'Quick hacks to improve your cooking',
    color: '#EF4444'
  },
  { 
    id: 'ingredients', 
    name: 'Ingredients', 
    count: 21, 
    description: 'Deep dives into specific ingredients',
    color: '#8B5CF6'
  },
  { 
    id: 'kitchen-tools', 
    name: 'Kitchen Tools', 
    count: 12, 
    description: 'Reviews and guides for kitchen equipment',
    color: '#06B6D4'
  }
];

export const popularTags = [
  'cooking-basics',
  'knife-skills', 
  'pasta',
  'techniques',
  'seasonal',
  'healthy',
  'quick-tips',
  'food-science',
  'baking',
  'spices',
  'vegetables',
  'meat',
  'seafood',
  'desserts',
  'international'
];

export const featuredAuthors = [
  {
    id: 1,
    name: "Chef Maria Rodriguez",
    bio: "Head chef with 15 years of culinary experience, specializing in technique education.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=150&h=150&fit=crop&crop=face",
    specialties: ["Techniques", "Mediterranean Cuisine"],
    postCount: 23,
    social: {
      instagram: "@chef_maria_r",
      twitter: "@chefmaria"
    }
  },
  {
    id: 2,
    name: "Dr. Food Science",
    bio: "Food scientist and culinary educator with a PhD in Food Chemistry.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    specialties: ["Food Science", "Baking"],
    postCount: 18,
    social: {
      linkedin: "dr-food-science",
      website: "foodscienceguide.com"
    }
  },
  {
    id: 3,
    name: "Seasonal Chef Tom",
    bio: "Farm-to-table chef specializing in seasonal and sustainable cooking practices.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    specialties: ["Seasonal Cooking", "Sustainability"],
    postCount: 15,
    social: {
      instagram: "@seasonal_chef_tom",
      website: "seasonalcooking.org"
    }
  }
];

export const recentPosts = mockBlogPosts.slice(0, 5);
export const featuredPosts = mockBlogPosts.filter(post => post.featured);