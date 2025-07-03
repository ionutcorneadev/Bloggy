
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <FeaturedPosts />
      <Footer />
    </div>
  );
};

export default Index;
