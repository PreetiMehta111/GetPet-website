import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#3C0D0D] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Get Pet</h2>
          <p className="text-gray-300 text-sm">
            Find your perfect pet companion. Adoption and purchase made easy and joyful!
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="hover:text-yellow-400">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="hover:text-yellow-400">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="hover:text-yellow-400">
              <Instagram className="h-5 w-5" />
            </button>
            <button className="hover:text-yellow-400">
              <Youtube className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigate('/')} className="hover:text-yellow-400">Home</button></li>
            <li><button onClick={() => navigate('/products')} className="hover:text-yellow-400">Products</button></li>
            <li><button onClick={() => navigate('/about')} className="hover:text-yellow-400">About Us</button></li>
            <li><button onClick={() => navigate('/contact')} className="hover:text-yellow-400">Contact Us</button></li>
            <li><button onClick={() => navigate('/register')} className="hover:text-yellow-400">Register</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="text-gray-300 text-sm mb-1">📍 Kathmandu, Nepal</p>
          <p className="text-gray-300 text-sm mb-1">📞 +977-9801234567</p>
          <p className="text-gray-300 text-sm">📧 info@getpet.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-xs">
        © 2025 Get Pet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
