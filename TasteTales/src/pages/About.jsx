import React from 'react';
import { ChefHat, Heart, Users, Award, Target, Lightbulb } from 'lucide-react';
import Button from '../components/common/Button';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'We believe cooking is an act of love - for yourself, your family, and your community.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our platform brings together home cooks from around the world to share and discover.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly evolve our platform to make cooking more accessible and enjoyable.'
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'Every recipe is carefully tested and reviewed to ensure the best cooking experience.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Head Chef & Co-Founder',
      image: '/api/placeholder/300/300',
      bio: 'Culinary Institute graduate with 15 years of experience in fine dining and home cooking.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Recipe Developer',
      image: '/api/placeholder/300/300',
      bio: 'Former restaurant chef turned recipe creator, specializing in international cuisines.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Nutritionist',
      image: '/api/placeholder/300/300',
      bio: 'Registered dietitian helping create balanced, nutritious recipes for healthy living.'
    },
    {
      name: 'David Kim',
      role: 'Community Manager',
      image: '/api/placeholder/300/300',
      bio: 'Food blogger and social media expert connecting our global community of home cooks.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Recipes' },
    { number: '1M+', label: 'Active Users' },
    { number: '25+', label: 'Countries' },
    { number: '4.8★', label: 'Average Rating' }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started as a small blog sharing family recipes and cooking tips.'
    },
    {
      year: '2020',
      title: 'Community Growth',
      description: 'Launched our platform and welcomed our first 1,000 users.'
    },
    {
      year: '2021',
      title: 'Recipe Database',
      description: 'Reached 10,000 tested and verified recipes from around the world.'
    },
    {
      year: '2022',
      title: 'Mobile App Launch',
      description: 'Introduced our mobile app to bring recipes to your kitchen.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Added smart recipe recommendations and meal planning features.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Now serving over 1 million home cooks across 25 countries.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ChefHat className="h-16 w-16 mx-auto mb-6 text-accent-400" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About Recipe Finder
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-100">
              We're passionate about making cooking accessible, enjoyable, and delicious for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To inspire and empower home cooks around the world by providing access to 
            high-quality, tested recipes and a supportive community that celebrates the 
            joy of cooking and sharing meals together.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Recipe Finder began in 2019 as a simple idea: what if we could create a 
                  platform where home cooks could easily find, share, and discover amazing 
                  recipes from around the world?
                </p>
                <p>
                  Our founder, Sarah Chen, was frustrated by the lack of reliable, 
                  well-tested recipes online. Too many times, she'd follow a recipe only 
                  to have it fail spectacularly. She envisioned a platform where every 
                  recipe would be thoroughly tested, clearly written, and backed by a 
                  community of passionate cooks.
                </p>
                <p>
                  Today, we're proud to serve over a million home cooks worldwide, with 
                  a library of more than 50,000 tested recipes. Our community continues 
                  to grow, united by a shared love of cooking and the belief that great 
                  food brings people together.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Kitchen cooking scene"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From a simple blog to a global community
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-sm font-medium text-primary-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Recipe Finder
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4 text-primary-600" />
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600">
              We're honored to be recognized by the culinary community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Best Recipe App 2023
              </h3>
              <p className="text-gray-600">Food & Wine Magazine</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                People's Choice Award
              </h3>
              <p className="text-gray-600">Culinary Innovation Summit 2023</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🥇</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Top Food Platform
              </h3>
              <p className="text-gray-600">Digital Food Awards 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Join Our Culinary Journey
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Become part of a community that celebrates the joy of cooking and sharing great food
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-500 hover:bg-accent-600 text-white">
              Start Cooking Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;