import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#3C0D0D] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#3C0D0D] font-bold text-lg">🐾</span>
          </div>
          <h1 className="text-2xl font-bold">Get Pet</h1>
        </div>
        <nav className="flex space-x-6">
          <NavLink to="/" className="hover:text-yellow-400 font-medium">Home</NavLink>
          <NavLink to="/products" className="hover:text-yellow-400 font-medium">Products</NavLink>
          <NavLink to="/about" className="hover:text-yellow-400 font-medium">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400 font-medium">Contact Us</NavLink>
          <NavLink to="/register" className="hover:text-yellow-400 font-medium">Register</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
