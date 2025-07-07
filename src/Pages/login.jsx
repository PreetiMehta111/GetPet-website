import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import CatImage from '../assets/cat.jpg';
import { useNavigate } from 'react-router-dom';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 p-4 rounded shadow z-50 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      {message}
    </div>
  );
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const showToast = (message, type = 'success') => setToast({ message, type });
  const hideToast = () => setToast(null);

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    const { email, password } = loginData;
    if (!email || !password) return showToast('Please fill in all fields', 'error');
    if (!validateEmail(email)) return showToast('Invalid email format', 'error');

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.email === email && u.password === password);

    if (user) {
      showToast('Welcome to GetPet family!', 'success');
      setTimeout(() => navigate('/dashboard'), 1500);
    } else {
      showToast('Email and password do not match. Please enter correct credentials.', 'error');
    }
  };

  const handleChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {toast && <Toast {...toast} onClose={hideToast} />}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out flex">
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">Log In</h1>
          <p className="mb-6 text-gray-600">Access your account to adopt or buy pets</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Log In
            </button>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Don’t have an account? </span>
              <button
                onClick={() => navigate('/register')}
                className="text-sm text-purple-600 hover:text-purple-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-purple-500 flex items-center justify-center p-6">
          <div className="flex flex-col items-center justify-center h-full">
            <img src={CatImage} alt="Cat" className="w-48 h-48 rounded-full object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Welcome Back!</h2>
            <p className="text-purple-100">Log in to continue your pet journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
