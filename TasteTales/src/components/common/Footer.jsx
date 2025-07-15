import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerNavigation = {
    recipes: {
      title: 'Recipes',
      links: [
        { label: 'Browse All', path: '/recipes' },
        { label: 'By Category', path: '/recipes' },
        { label: 'Quick & Easy', path: '/recipes?time=30' },
        { label: 'Healthy Options', path: '/recipes?tag=healthy' },
        { label: 'Popular This Week', path: '/recipes?sort=popular' }
      ]
    },
    community: {
      title: 'Community',
      links: [
        { label: 'Submit Recipe', path: '/recipes/submit' },
        { label: 'Recipe Reviews', path: '/reviews' },
        { label: 'Cooking Tips', path: '/blog?category=tips' },
        { label: 'Chef Profiles', path: '/chefs' },
        { label: 'Newsletter', path: '/newsletter' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about#team' },
        { label: 'Careers', path: '/careers' },
        { label: 'Press Kit', path: '/press' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '/help' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Cookie Policy', path: '/cookies' }
      ]
    }
  };

  const socialLinks = [
    { platform: 'Facebook', url: 'https://facebook.com/recipefinder' },
    { platform: 'Twitter', url: 'https://twitter.com/recipefinder' },
    { platform: 'Instagram', url: 'https://instagram.com/recipefinder' },
    { platform: 'Pinterest', url: 'https://pinterest.com/recipefinder' },
    { platform: 'YouTube', url: 'https://youtube.com/recipefinder' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">Recipe Finder</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Discover, create, and share amazing recipes with our global community of food lovers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@recipefinder.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Culinary Street, Food City</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get weekly recipe recommendations and cooking tips delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-md transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Recipe Finder. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Follow us on ${social.platform}`}
              >
                <span className="text-sm">{social.platform[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;