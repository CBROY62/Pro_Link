import React from 'react';
import { Search } from 'lucide-react';
import './Navbar.css';

export default function HeroSearchBanner() {
  return (
    <div className="hero-banner">
      <h2> Developed By Chandra Bhushan Kumar</h2>
      <h1 className="hero-title">Major Project And Minor Projects</h1>
      <p className="hero-subtitle">
        Major Project and Minor Projects demonstrate practical skills and knowledge through focused, creative, and detailed work.
      </p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Major And Minor Projects"
          className="search-input"
        />
        <Search className="search-icon" />
      </div>
    </div>
  );
}
