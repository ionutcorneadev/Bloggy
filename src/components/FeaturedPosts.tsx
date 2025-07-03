
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "5 Reasons Why Your Business Must Have an Online Presence in 2024",
      excerpt: "In today's digital age, having an online presence isn't optional—it's essential for survival and growth. Discover why businesses without digital footprints are losing customers daily.",
      category: "Your Business Online",
      author: "Digital Growth Team",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "/your-business-online"
    },
    {
      id: 2,
      title: "How AI Automation Saved My Client $50,000 in Operating Costs",
      excerpt: "A real case study of how implementing AI automation in customer service and data processing reduced operational expenses by 60% while improving service quality.",
      category: "AI can save you money",
      author: "Digital Growth Team", 
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      link: "/ai-can-save-money"
    },
    {
      id: 3,
      title: "The Hidden Cost of Poor SEO: Why Your Competitors Are Winning",
      excerpt: "Your competitors are getting the customers you should be getting. Learn how proper SEO implementation can transform your business visibility and revenue.",
      category: "Why you need SEO",
      author: "Digital Growth Team",
      readTime: "10 min read", 
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      link: "/why-you-need-seo"
    },
    {
      id: 4,
      title: "From Zero to Digital Hero: Small Business Online Transformation",
      excerpt: "How a local bakery increased their revenue by 300% by establishing a strong online presence and digital marketing strategy.",
      category: "Your Business Online",
      author: "Digital Growth Team",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      link: "/your-business-online"
    },
    {
      id: 5,
      title: "AI-Powered Customer Support: 24/7 Service Without 24/7 Costs",
      excerpt: "Discover how businesses are using AI chatbots and automation to provide excellent customer service while reducing staffing costs by up to 70%.",
      category: "AI can save you money",
      author: "Digital Growth Team",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      link: "/ai-can-save-money"
    },
    {
      id: 6,
      title: "Local SEO Secrets: How to Dominate Your Local Market",
      excerpt: "The step-by-step guide to optimizing your business for local search results and attracting customers in your area who are ready to buy.",
      category: "Why you need SEO",
      author: "Digital Growth Team",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "/why-you-need-seo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Most Popular Articles
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Insights and strategies that are transforming businesses worldwide
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
