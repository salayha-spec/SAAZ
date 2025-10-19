import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">SAAZ</Link>
      <div className="nav-links">
        <Link to="/teachers">Teach or Learn</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/events">Community Events</Link>
        <Link to="/ai-mentor">AI Mentor</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/chat-hub">Chat Hub</Link>
        <button className="nav-button">Login / Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
