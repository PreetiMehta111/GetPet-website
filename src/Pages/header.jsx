// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-[#3C0D0D] text-white">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
//             <span className="text-[#3C0D0D] font-bold text-lg">🐾</span>
//           </div>
//           <h1 className="text-2xl font-bold">Get Pet</h1>
//         </div>
//         <nav className="flex space-x-6">
//           <NavLink to="/" className="hover:text-yellow-400 font-medium">Home</NavLink>
//           <NavLink to="/products" className="hover:text-yellow-400 font-medium">Products</NavLink>
//           <NavLink to="/about" className="hover:text-yellow-400 font-medium">About Us</NavLink>
//           <NavLink to="/contact" className="hover:text-yellow-400 font-medium">Contact Us</NavLink>
//           <NavLink to="/register" className="hover:text-yellow-400 font-medium">Register</NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Header component with responsive navigation and cart
const Header = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#5C4033] text-white py-4 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and site name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#5C4033] font-bold text-lg">🐾</span>
          </div>
          <h1 className="text-2xl font-bold">GetPet</h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-[#F4A261] font-medium" aria-label="Home page">Home</NavLink>
          <NavLink to="/products" className="hover:text-[#F4A261] font-medium" aria-label="Shop products">Shop</NavLink>
          <NavLink to="/about" className="hover:text-[#F4A261] font-medium" aria-label="About us">About</NavLink>
          <NavLink to="/contact" className="hover:text-[#F4A261] font-medium" aria-label="Contact us">Contact</NavLink>
          <NavLink to="/register" className="hover:text-[#F4A261] font-medium" aria-label="Register">Register</NavLink>
        </nav>

        {/* Cart and mobile menu toggle */}
        <div className="flex items-center space-x-4">
          <button
            className="relative flex items-center hover:text-[#F4A261] transition"
            aria-label={`View cart with ${cartCount} items`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F4A261] text-[#5C4033] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-[#4a332a] p-4 rounded-lg">
          <NavLink to="/" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Home page">Home</NavLink>
          <NavLink to="/products" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Shop products">Shop</NavLink>
          <NavLink to="/about" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="About us">About</NavLink>
          <NavLink to="/contact" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Contact us">Contact</NavLink>
          <NavLink to="/register" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Register">Register</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;