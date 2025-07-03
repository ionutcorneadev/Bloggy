
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, TrendingUp, Target, Award, CheckCircle, ArrowUp } from 'lucide-react';

const SEOBoost = () => {
  const successStory = {
    company: "LocalPro Services",
    industry: "Home Services",
    timeframe: "6 months",
    results: [
      { metric: "Organic Traffic", before: "500/month", after: "2,100/month", increase: "+320%" },
      { metric: "Keyword Rankings", before: "Page 10+", after: "Top 3", increase: "Position 1-3" },
      { metric: "Local Leads", before: "12/month", after: "47/month", increase: "+292%" },
      { metric: "Revenue", before: "$8,000/month", after: "$28,000/month", increase: "+250%" }
    ]
  };

  const seoStrategies = [
    {
      title: "Keyword Research & Strategy",
      description: "Identify high-value keywords your customers are actually searching for.",
      icon: <Target className="h-6 w-6" />,
      tactics: [
        "Long-tail keyword optimization",
        "Competitor keyword analysis", 
        "Search intent mapping",
        "Local keyword targeting"
      ]
    },
    {
      title: "Technical SEO Optimization",
      description: "Ensure your website meets all technical requirements for search engines.",
      icon: <Award className="h-6 w-6" />,
      tactics: [
        "Site speed optimization",
        "Mobile responsiveness",
        "Schema markup implementation",
        "Core Web Vitals improvement"
      ]
    },
    {
      title: "Content Marketing Excellence",
      description: "Create valuable content that ranks well and converts visitors to customers.",
      icon: <TrendingUp className="h-6 w-6" />,
      tactics: [
        "Topic cluster strategy",
        "E-A-T content optimization",
        "Regular content updates",
        "User-focused writing"
      ]
    }
  ];

  const rankingFactors = [
    { factor: "High-Quality Content", importance: "Critical", description: "Relevant, valuable content that answers user queries" },
    { factor: "Page Loading Speed", importance: "High", description: "Fast-loading pages improve user experience and rankings" },
    { factor: "Mobile Optimization", importance: "Critical", description: "Mobile-first indexing makes this essential" },
    { factor: "Backlink Quality", importance: "High", description: "Links from authoritative sites boost domain authority" },
    { factor: "User Experience", importance: "High", description: "Low bounce rate and high engagement signals" },
    { factor: "Local Citations", importance: "Critical", description: "For local businesses, consistent NAP across directories" }
  ];

  const seoTips = [
    "Focus on user intent, not just keywords",
    "Optimize for featured snippets and voice search",
    "Build local citations and Google My Business",
    "Create topic clusters around main services",
    "Monitor and improve Core Web Vitals",
    "Regularly audit and update old content"
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
              Dominate Search with
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}SEO Mastery
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Transform your online visibility and drive qualified traffic with proven SEO strategies 
              that deliver measurable results and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Page 10 to Position #1
            </h2>
            <p className="text-xl text-slate-600">
              How {successStory.company} tripled their organic traffic in {successStory.timeframe}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  {successStory.company}, a local {successStory.industry.toLowerCase()} business, 
                  was struggling with poor search visibility. Their website ranked on page 10+ for 
                  most keywords, generating minimal organic traffic and leads.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  The Solution
                </h3>
                <p className="text-lg text-slate-600">
                  We implemented a comprehensive SEO strategy focusing on local optimization, 
                  content marketing, and technical improvements. The results speak for themselves.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-slate-900 mb-6 text-center">
                  Results After {successStory.timeframe}
                </h4>
                <div className="space-y-4">
                  {successStory.results.map((result, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900">{result.metric}</div>
                        <div className="text-sm text-slate-600">{result.before} → {result.after}</div>
                      </div>
                      <div className="text-green-600 font-bold flex items-center">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        {result.increase}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Strategies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proven SEO Strategies That Work
            </h2>
            <p className="text-xl text-slate-600">
              The three pillars of successful search engine optimization
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {seoStrategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 text-white">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {strategy.description}
                </p>
                <ul className="space-y-2">
                  {strategy.tactics.map((tactic, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key SEO Ranking Factors
            </h2>
            <p className="text-xl text-slate-600">
              What search engines actually care about in 2024
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankingFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {factor.factor}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    factor.importance === 'Critical' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {factor.importance}
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tips */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pro SEO Tips for 2024
            </h2>
            <p className="text-xl text-slate-600">
              Expert insights to stay ahead of the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {seoTips.map((tip, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-700">{tip}</p>
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
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get a free SEO audit and discover opportunities to improve your visibility.
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

export default SEOBoost;
