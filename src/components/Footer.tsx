
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">DigitalGrowth</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Empowering businesses to build stronger digital presence through strategic branding, AI innovation, and SEO excellence.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@digitalgrowth.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/brand-power" className="hover:text-white transition-colors">Digital Branding</Link></li>
              <li><Link to="/smart-ai" className="hover:text-white transition-colors">AI Integration</Link></li>
              <li><Link to="/seo-boost" className="hover:text-white transition-colors">SEO Optimization</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Growth Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/brand-power" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/smart-ai" className="hover:text-white transition-colors">AI Case Studies</Link></li>
              <li><Link to="/seo-boost" className="hover:text-white transition-colors">SEO Guides</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Free Tools</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 DigitalGrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
