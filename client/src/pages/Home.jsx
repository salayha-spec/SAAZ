import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <section className="purpose-section">
        <h2>Unlocking Your Potential</h2>
        <p>SAAZ is your comprehensive guide to navigating the exciting world of higher education and career opportunities. We believe every student deserves the chance to achieve their dreams, both within Pakistan and globally. From admission portals to career insights, we're here to light your path forward.</p>
        <p>Whether you're an intermediate student aiming for your dream university, or a graduate seeking the next step in your professional journey, SAAZ provides the tools, resources, and community support you need to succeed. Explore endless possibilities, get personalized guidance, and connect with a network that helps you thrive.</p>
      </section>
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
