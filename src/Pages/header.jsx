// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// // Header component with responsive navigation and cart
// const Header = ({ cartCount = 0, onCartClick }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     navigate('/login');
//   };

//   return (
//     <header className="bg-[#5C4033] text-white py-4 px-4 sticky top-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo and site name */}
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
//             <span className="text-[#5C4033] font-bold text-lg">🐾</span>
//           </div>
//           <h1 className="text-2xl font-bold">GetPet</h1>
//         </div>

//         {/* Desktop navigation */}
//         <nav className="hidden md:flex space-x-6">
//           <NavLink to="/" className="hover:text-[#F4A261] font-medium" aria-label="Home page">Home</NavLink>
//           <NavLink to="/products" className="hover:text-[#F4A261] font-medium" aria-label="Shop products">Shop</NavLink>
//           <NavLink to="/about" className="hover:text-[#F4A261] font-medium" aria-label="About us">About</NavLink>
//           <NavLink to="/contact" className="hover:text-[#F4A261] font-medium" aria-label="Contact us">Contact</NavLink>
//         </nav>

//         {/* Cart, Register/Login, and Profile/Logout */}
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={onCartClick}
//             className="relative flex items-center hover:text-[#F4A261] transition"
//             aria-label={`View cart with ${cartCount} items`}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-[#F4A261] text-[#5C4033] rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//           {currentUser ? (
//             <>
//               <NavLink
//                 to="/profile"
//                 className="hover:text-[#F4A261] font-medium"
//                 aria-label="View profile"
//               >
//                 Profile ({currentUser.fullName})
//               </NavLink>
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-[#F4A261] font-medium"
//                 aria-label="Logout"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <NavLink to="/register" className="hover:text-[#F4A261] font-medium" aria-label="Register">Register</NavLink>
//           )}
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle navigation menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile navigation */}
//       {isMenuOpen && (
//         <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-[#4a332a] p-4 rounded-lg relative">
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="absolute top-2 right-2 text-[#F4A261] text-2xl font-bold hover:text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//             aria-label="Close mobile menu"
//           >
//             ✕
//           </button>
//           <NavLink to="/" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Home page">Home</NavLink>
//           <NavLink to="/products" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Shop products">Shop</NavLink>
//           <NavLink to="/about" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="About us">About</NavLink>
//           <NavLink to="/contact" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Contact us">Contact</NavLink>
//           {currentUser ? (
//             <>
//               <NavLink
//                 to="/profile"
//                 className="hover:text-[#F4A261] font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="View profile"
//               >
//                 Profile ({currentUser.fullName})
//               </NavLink>
//               <button
//                 onClick={() => { handleLogout(); setIsMenuOpen(false); }}
//                 className="hover:text-[#F4A261] font-medium"
//                 aria-label="Logout"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <NavLink to="/register" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Register">Register</NavLink>
//           )}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react'; // Simple user icon as fallback

const Header = ({ cartCount = 0, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setShowProfile(false);
    navigate('/');
  };

  // Get the first letter of the user's name for the avatar
  const getAvatarInitial = () => {
    return currentUser?.fullName ? currentUser.fullName.charAt(0).toUpperCase() : 'U';
  };

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
        </nav>

        {/* Cart and Profile/Register */}
        <div className="flex items-center space-x-4 relative">
          <button
            onClick={onCartClick}
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
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center focus:outline-none"
                aria-label="Open profile menu"
              >
                <div className="w-8 h-8 rounded-full bg-[#F4A261] flex items-center justify-center text-[#5C4033] font-semibold text-lg hover:bg-[#e6953f] transition">
                  {getAvatarInitial()}
                </div>
              </button>
              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-[#5C4033] rounded-lg shadow-lg p-4 z-50 border border-gray-200">
                  <div className="mb-4">
                    <p className="font-semibold">Profile</p>
                    <p><strong>Name:</strong> {currentUser.fullName}</p>
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>Phone:</strong> {currentUser.phone}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-[#5C4033] text-white py-2 rounded hover:bg-[#3A2A1F] transition"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/register" className="hover:text-[#F4A261] font-medium" aria-label="Register">Register</NavLink>
          )}
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
        <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-[#4a332a] p-4 rounded-lg relative">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-2 right-2 text-[#F4A261] text-2xl font-bold hover:text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
            aria-label="Close mobile menu"
          >
            ✕
          </button>
          <NavLink to="/" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Home page">Home</NavLink>
          <NavLink to="/products" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Shop products">Shop</NavLink>
          <NavLink to="/about" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="About us">About</NavLink>
          <NavLink to="/contact" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Contact us">Contact</NavLink>
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center hover:text-[#F4A261] font-medium"
                aria-label="Open profile menu"
              >
                <div className="w-8 h-8 rounded-full bg-[#F4A261] flex items-center justify-center text-[#5C4033] font-semibold text-lg mr-2">
                  {getAvatarInitial()}
                </div>
                Profile
              </button>
              {showProfile && (
                <div className="mt-2 w-full bg-white text-[#5C4033] rounded-lg shadow-lg p-4">
                  <div className="mb-4">
                    <p className="font-semibold">Profile</p>
                    <p><strong>Name:</strong> {currentUser.fullName}</p>
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>Phone:</strong> {currentUser.phone}</p>
                  </div>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="w-full bg-[#5C4033] text-white py-2 rounded hover:bg-[#3A2A1F] transition"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/register" className="hover:text-[#F4A261] font-medium" onClick={() => setIsMenuOpen(false)} aria-label="Register">Register</NavLink>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;