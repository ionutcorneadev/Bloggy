
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, Quote, Star, ArrowRight } from 'lucide-react';

const BrandPower = () => {
  const clientStories = [
    {
      name: "Sarah Johnson",
      company: "Elegant Boutique",
      image: "https://images.unsplash.com/photo-1494790108755-2616b812e72d?w=200&h=200&fit=crop&crop=face",
      quote: "Our digital transformation was incredible. Sales increased by 300% in just 6 months after implementing their branding strategy.",
      results: ["300% increase in sales", "5x social media engagement", "50% more repeat customers"],
      industry: "Fashion Retail"
    },
    {
      name: "Michael Chen",
      company: "TechFlow Solutions", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      quote: "The brand identity they created for us perfectly captured our vision. We now stand out in a crowded tech market.",
      results: ["200% lead generation increase", "Brand recognition up 80%", "Client retention improved 60%"],
      industry: "Technology Services"
    },
    {
      name: "Lisa Rodriguez",
      company: "Fresh Bites Cafe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", 
      quote: "From a local cafe to a recognized brand - their digital strategy helped us expand to 3 locations in one year.",
      results: ["3 new locations opened", "Daily customers up 250%", "Online orders increased 400%"],
      industry: "Food & Beverage"
    }
  ];

  const brandingTips = [
    {
      title: "Define Your Unique Value Proposition",
      description: "Clearly articulate what makes your business different from competitors.",
      icon: "🎯"
    },
    {
      title: "Consistent Visual Identity", 
      description: "Maintain consistency across all digital touchpoints and platforms.",
      icon: "🎨"
    },
    {
      title: "Authentic Brand Voice",
      description: "Develop a distinctive voice that resonates with your target audience.",
      icon: "📢"
    },
    {
      title: "Customer-Centric Messaging",
      description: "Focus on how your brand solves customer problems and adds value.",
      icon: "❤️"
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
              Unleash Your
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}Brand Power
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Transform your digital identity and watch your business soar. Learn from real success stories 
              of businesses that revolutionized their brand presence.
            </p>
          </div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Real Stories, Real Results
            </h2>
            <p className="text-xl text-slate-600">
              See how strategic branding transformed these businesses
            </p>
          </div>

          <div className="space-y-12">
            {clientStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                        <p className="text-slate-600">{story.company}</p>
                        <span className="text-sm text-orange-600 font-medium">{story.industry}</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-500 opacity-50" />
                      <blockquote className="text-lg text-slate-700 italic pl-6">
                        {story.quote}
                      </blockquote>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      Key Results
                    </h4>
                    <ul className="space-y-3">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <ArrowRight className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Essential Branding Strategies
            </h2>
            <p className="text-xl text-slate-600">
              Master these fundamentals to build a powerful brand presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-slate-600">
                  {tip.description}
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

export default BrandPower;
