// import React from 'react';
// import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <footer className="bg-[#3C0D0D] text-white py-10">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Get Pet</h2>
//           <p className="text-gray-300 text-sm">
//             Find your perfect pet companion. Adoption and purchase made easy and joyful!
//           </p>
//           <div className="flex space-x-4 mt-4">
//             <button className="hover:text-yellow-400">
//               <Facebook className="h-5 w-5" />
//             </button>
//             <button className="hover:text-yellow-400">
//               <Twitter className="h-5 w-5" />
//             </button>
//             <button className="hover:text-yellow-400">
//               <Instagram className="h-5 w-5" />
//             </button>
//             <button className="hover:text-yellow-400">
//               <Youtube className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><button onClick={() => navigate('/')} className="hover:text-yellow-400">Home</button></li>
//             <li><button onClick={() => navigate('/products')} className="hover:text-yellow-400">Products</button></li>
//             <li><button onClick={() => navigate('/about')} className="hover:text-yellow-400">About Us</button></li>
//             <li><button onClick={() => navigate('/contact')} className="hover:text-yellow-400">Contact Us</button></li>
//             <li><button onClick={() => navigate('/register')} className="hover:text-yellow-400">Register</button></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
//           <p className="text-gray-300 text-sm mb-1">📍 Kathmandu, Nepal</p>
//           <p className="text-gray-300 text-sm mb-1">📞 +977-9801234567</p>
//           <p className="text-gray-300 text-sm">📧 info@getpet.com</p>
//         </div>
//       </div>
//       <div className="mt-8 text-center text-gray-400 text-xs">
//         © 2025 Get Pet. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { useNavigate } from 'react-router-dom';

// Footer with quick links, contact info, and social media
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#5C4033] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">GetPet</h2>
          <p className="text-gray-200 text-sm">
            Find your perfect pet companion. Adoption and purchase made easy and joyful!
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <svg className="w-5 h-5 hover:text-[#F4A261]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <svg className="w-5 h-5 hover:text-[#F4A261]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.379 4.482A13.978 13.978 0 011.671 3.149S1.671 8.6 7.698 11.31a4.908 4.908 0 01-2.897-.928c-.002.055-.002.11-.002.165 0 2.44 1.733 4.47 4.033 4.936a4.923 4.923 0 01-2.896.098c.816 2.548 3.182 4.403 5.986 4.454a9.868 9.868 0 01-6.102 2.104c-.395 0-.787-.023-1.175-.069a13.936 13.936 0 007.548 2.213c9.057 0 14.009-7.502 14.009-14.008 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <svg className="w-5 h-5 hover:text-[#F4A261]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigate('/')} className="hover:text-[#F4A261]" aria-label="Home page">Home</button></li>
            <li><button onClick={() => navigate('/products')} className="hover:text-[#F4A261]" aria-label="Shop products">Shop</button></li>
            <li><button onClick={() => navigate('/about')} className="hover:text-[#F4A261]" aria-label="About us">About</button></li>
            <li><button onClick={() => navigate('/contact')} className="hover:text-[#F4A261]" aria-label="Contact us">Contact</button></li>
            <li><button onClick={() => navigate('/register')} className="hover:text-[#F4A261]" aria-label="Register">Register</button></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="text-gray-200 text-sm mb-1">📍 Kathmandu, Nepal</p>
          <p className="text-gray-200 text-sm mb-1">📞 +977-9801234567</p>
          <p className="text-gray-200 text-sm">📧 info@getpet.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-xs">
        © 2025 GetPet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;