
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, Quote, Star, ArrowRight, Globe, Users, BarChart } from 'lucide-react';

const YourBusinessOnline = () => {
  const articlePosts = [
    {
      id: 1,
      title: "5 Reasons Why Your Business Must Have an Online Presence in 2024",
      excerpt: "In today's digital age, having an online presence isn't optional—it's essential for survival and growth. Discover why businesses without digital footprints are losing customers daily.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "From Zero to Digital Hero: Small Business Online Transformation",
      excerpt: "How a local bakery increased their revenue by 300% by establishing a strong online presence and digital marketing strategy.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Maximizing Online Efficiency: Tools Every Business Needs",
      excerpt: "The essential digital tools and platforms that streamline operations and boost productivity for businesses with an online presence.",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Building Trust Online: Digital Credibility for Modern Businesses",
      excerpt: "Learn how to establish and maintain credibility in the digital space to attract and retain customers in an increasingly competitive market.",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    }
  ];

  const onlineStats = [
    { icon: <Globe className="h-8 w-8" />, number: "97%", label: "of consumers search for businesses online" },
    { icon: <Users className="h-8 w-8" />, number: "75%", label: "won't return to a business without online presence" },
    { icon: <BarChart className="h-8 w-8" />, number: "3x", label: "more likely to visit businesses found online" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "80%", label: "increase in customer reach with digital presence" }
  ];

  const keyBenefits = [
    {
      title: "24/7 Accessibility",
      description: "Your business never sleeps when you have an online presence.",
      icon: "🌍"
    },
    {
      title: "Broader Market Reach", 
      description: "Expand beyond geographical limitations and reach global customers.",
      icon: "📈"
    },
    {
      title: "Cost-Effective Marketing",
      description: "Digital marketing costs significantly less than traditional advertising.",
      icon: "💰"
    },
    {
      title: "Customer Insights",
      description: "Access valuable data about customer behavior and preferences.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Your Business
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}Online
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Essential insights on establishing and optimizing your digital presence. 
              Learn why online visibility is crucial for modern business success.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onlineStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600">
              In-depth guides and insights on building your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articlePosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
                      Your Business Online
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-orange-600 font-medium hover:space-x-2 transition-all cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Benefits of Being Online
            </h2>
            <p className="text-xl text-slate-600">
              Why every business needs a strong digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YourBusinessOnline;
