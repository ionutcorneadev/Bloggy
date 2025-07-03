
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, TrendingUp, Target, Award, CheckCircle, ArrowRight, Eye, Users } from 'lucide-react';

const WhyYouNeedSEO = () => {
  const articlePosts = [
    {
      id: 1,
      title: "The Hidden Cost of Poor SEO: Why Your Competitors Are Winning",
      excerpt: "Your competitors are getting the customers you should be getting. Learn how proper SEO implementation can transform your business visibility and revenue.",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Local SEO Secrets: How to Dominate Your Local Market",
      excerpt: "The step-by-step guide to optimizing your business for local search results and attracting customers in your area who are ready to buy.",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "SEO vs Paid Ads: Why Organic Traffic Wins Every Time",
      excerpt: "Comparing the long-term benefits and ROI of SEO versus paid advertising, and why organic traffic is the foundation of sustainable growth.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "From Page 10 to Position #1: A Complete SEO Success Story",
      excerpt: "How a small business transformed their online visibility and tripled their revenue through strategic SEO implementation in just 6 months.",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    }
  ];

  const seoStats = [
    { icon: <Search className="h-8 w-8" />, number: "93%", label: "of online experiences begin with a search" },
    { icon: <Eye className="h-8 w-8" />, number: "75%", label: "of users never scroll past first page" },
    { icon: <Users className="h-8 w-8" />, number: "5x", label: "more traffic from organic search than social" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "14.6%", label: "average conversion rate for SEO leads" }
  ];

  const seoImportance = [
    {
      title: "Increased Visibility",
      description: "Appear where your customers are searching and get found by people ready to buy.",
      icon: "👁️"
    },
    {
      title: "Cost-Effective Marketing", 
      description: "SEO provides sustainable, long-term results without ongoing advertising costs.",
      icon: "💰"
    },
    {
      title: "Build Trust & Credibility",
      description: "High search rankings signal authority and trustworthiness to potential customers.",
      icon: "🏆"
    },
    {
      title: "Better User Experience",
      description: "SEO optimization improves site speed, navigation, and overall user satisfaction.",
      icon: "⚡"
    }
  ];

  const seoMistakes = [
    "Ignoring local SEO opportunities",
    "Not optimizing for mobile users",
    "Focusing only on keyword density",
    "Neglecting page loading speed",
    "Creating content without search intent",
    "Forgetting about technical SEO basics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Why you need
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}SEO
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Understanding the critical importance of SEO for business success. 
              Learn why search optimization is essential for online visibility and growth.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
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
              Essential SEO insights for business growth
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
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                      Why you need SEO
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-green-600 font-medium hover:space-x-2 transition-all cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why SEO is Essential for Your Business
            </h2>
            <p className="text-xl text-slate-600">
              The key benefits that make SEO a must-have for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoImportance.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
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

      {/* Common SEO Mistakes */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common SEO Mistakes to Avoid
            </h2>
            <p className="text-xl text-slate-600">
              Don't let these oversights hurt your search rankings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {seoMistakes.map((mistake, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  ✗
                </div>
                <p className="text-slate-700">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your SEO?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get a free SEO audit and discover opportunities to boost your search visibility.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
              Get Free SEO Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyYouNeedSEO;
