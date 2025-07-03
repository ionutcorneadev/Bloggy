
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, DollarSign, Clock, Users, ArrowRight, Zap } from 'lucide-react';

const AiCanSaveMoney = () => {
  const articlePosts = [
    {
      id: 1,
      title: "How AI Automation Saved My Client $50,000 in Operating Costs",
      excerpt: "A real case study of how implementing AI automation in customer service and data processing reduced operational expenses by 60% while improving service quality.",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "AI-Powered Customer Support: 24/7 Service Without 24/7 Costs",
      excerpt: "Discover how businesses are using AI chatbots and automation to provide excellent customer service while reducing staffing costs by up to 70%.",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Automating Invoice Processing: From 8 Hours to 8 Minutes",
      excerpt: "How AI document processing transformed a company's accounting workflow, reducing manual data entry time by 95% and eliminating human errors.",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "The ROI of AI: Why Every Dollar Spent Returns Five",
      excerpt: "Comprehensive analysis of AI implementation costs versus savings, with real examples from businesses that achieved 500% ROI within the first year.",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
    }
  ];

  const costSavingStats = [
    { icon: <DollarSign className="h-8 w-8" />, number: "60%", label: "average cost reduction with AI automation" },
    { icon: <Clock className="h-8 w-8" />, number: "40hrs", label: "saved per week on repetitive tasks" },
    { icon: <Users className="h-8 w-8" />, number: "3x", label: "productivity increase per employee" },
    { icon: <Brain className="h-8 w-8" />, number: "95%", label: "reduction in processing errors" }
  ];

  const automationAreas = [
    {
      title: "Customer Service",
      description: "AI chatbots handle 80% of customer inquiries automatically, reducing support staff costs.",
      savings: "Save up to $8,000/month",
      icon: "🤖"
    },
    {
      title: "Data Entry & Processing", 
      description: "Automated data extraction and processing eliminates hours of manual work daily.",
      savings: "Save up to $12,000/month",
      icon: "📊"
    },
    {
      title: "Inventory Management",
      description: "AI predicts demand and automates ordering, reducing waste and storage costs.",
      savings: "Save up to $15,000/month",
      icon: "📦"
    },
    {
      title: "Marketing Automation",
      description: "AI-driven campaigns and lead nurturing reduce marketing costs while improving results.",
      savings: "Save up to $6,000/month",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              AI can save you
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}money
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover how AI automation can dramatically reduce your operating costs 
              while improving efficiency and service quality. Real examples, proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Saving Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costSavingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
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
              Real-world examples of AI saving businesses money
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      AI can save you money
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-blue-600 font-medium hover:space-x-2 transition-all cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Where AI Can Save You Money
            </h2>
            <p className="text-xl text-slate-600">
              Key areas where automation delivers immediate cost savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {area.description}
                </p>
                <div className="text-blue-600 font-semibold text-sm">
                  {area.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Saving with AI?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Calculate your potential savings and discover which AI solutions are right for your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
              Calculate Your Savings
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiCanSaveMoney;
