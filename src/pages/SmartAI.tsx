
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Zap, BarChart3, Clock, Cog, Users } from 'lucide-react';

const SmartAI = () => {
  const aiUseCases = [
    {
      title: "Customer Service Automation",
      description: "24/7 intelligent chatbots that handle 80% of customer inquiries automatically.",
      icon: <Users className="h-8 w-8" />,
      benefits: ["Reduce response time by 90%", "Handle 500+ queries simultaneously", "24/7 availability"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered insights that predict customer behavior and market trends.",
      icon: <BarChart3 className="h-8 w-8" />,
      benefits: ["Forecast demand accurately", "Optimize inventory levels", "Reduce waste by 40%"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Process Automation",
      description: "Streamline repetitive tasks and focus on strategic business growth.",
      icon: <Cog className="h-8 w-8" />,
      benefits: ["Save 20+ hours per week", "Eliminate human errors", "Scale operations efficiently"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
    }
  ];

  const aiStats = [
    { number: "73%", label: "of businesses plan to adopt AI by 2025" },
    { number: "40%", label: "increase in productivity with AI automation" },
    { number: "$13T", label: "potential economic impact of AI by 2030" },
    { number: "2.6x", label: "faster decision making with AI insights" }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description: "Analyze your current processes and identify AI opportunities."
    },
    {
      step: "02", 
      title: "Pilot Implementation",
      description: "Start with a small-scale AI project to prove value and ROI."
    },
    {
      step: "03",
      title: "Scale & Optimize",
      description: "Expand successful AI solutions across your organization."
    },
    {
      step: "04",
      title: "Continuous Learning",
      description: "Monitor, learn, and improve AI systems for maximum impact."
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
              Enter the
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}AI Revolution
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover how artificial intelligence is transforming businesses and why 
              early adopters are experiencing unprecedented growth and efficiency gains.
            </p>
          </div>
        </div>
      </section>

      {/* AI Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI Applications That Drive Results
            </h2>
            <p className="text-xl text-slate-600">
              Real-world AI solutions that are transforming businesses today
            </p>
          </div>

          <div className="space-y-12">
            {aiUseCases.map((useCase, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 text-white">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <Zap className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your AI Implementation Roadmap
            </h2>
            <p className="text-xl text-slate-600">
              A proven 4-step process to successfully integrate AI into your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 h-full">
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2" />
                )}
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of businesses already leveraging AI for competitive advantage.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartAI;
