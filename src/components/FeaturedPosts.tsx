
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "How Sarah's Boutique Increased Sales by 300% Through Digital Branding",
      excerpt: "A complete transformation story of how strategic digital identity helped a small boutique compete with major retailers.",
      category: "Brand Power",
      author: "Digital Growth Team",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      link: "/brand-power"
    },
    {
      id: 2,
      title: "The AI Revolution: Why Every Business Needs Smart Automation",
      excerpt: "Discover how artificial intelligence is reshaping industries and why early adopters are seeing unprecedented growth.",
      category: "Smart AI",
      author: "Digital Growth Team", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      link: "/smart-ai"
    },
    {
      id: 3,
      title: "From Page 10 to #1: The Ultimate SEO Success Story",
      excerpt: "Learn how a local service business climbed Google rankings and tripled their organic traffic in just 6 months.",
      category: "SEO Boost",
      author: "Digital Growth Team",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "/seo-boost"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Latest Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real businesses, real results. See how our strategies transform digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link to={post.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-blue-600 font-medium group-hover:space-x-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
