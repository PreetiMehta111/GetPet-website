
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import GoldenRetriever from '../assets/GoldenRetriever.jpg'; // Adjusted path
import { useNavigate } from 'react-router-dom';

const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5-second timeout
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className={`bg-white text-[#5C4033] p-6 rounded-lg shadow-lg max-w-md w-full mx-4 text-center ${
        type === 'success' ? 'border-2 border-green-500' : 'border-2 border-red-500'
      }`}>
        <p className="text-lg font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[#5C4033] text-white px-4 py-2 rounded hover:bg-[#3A2A1F] transition"
          aria-label="Close message"
        >
          OK
        </button>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState(null);

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const handleRegister = () => {
    const { fullName, email, phone, password, confirmPassword } = registerData;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      return showToast('Please fill in all fields', 'error');
    }

    if (password !== confirmPassword) {
      return showToast('Passwords do not match', 'error');
    }

    if (password.length < 6) {
      return showToast('Password must be at least 6 characters', 'error');
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return showToast('This email has already been registered. Please log in to our website.', 'error');
    }

    const newUser = {
      id: Date.now(),
      fullName,
      email: email.toLowerCase(), // Normalize email
      phone,
      password
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // Direct redirect to home without toast
    setRegisterData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    navigate('/');
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VQ9WjoHKJhUm1yb5Ji4rd0Ki0lh77XScQ&s')`
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}

      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 animate-slide-up">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-extrabold text-white mb-1">Create Account</h1>
              <p className="text-white/80 text-sm">Join us and find your furry friend today</p>
            </div>

            <div className="space-y-4">
              <InputField
                icon={<User className="h-5 w-5 text-white/60" />}
                name="fullName"
                value={registerData.fullName}
                placeholder="Enter your full name"
                onChange={handleRegisterChange}
                label="Full Name"
              />
              <InputField
                icon={<Mail className="h-5 w-5 text-white/60" />}
                name="email"
                type="email"
                value={registerData.email}
                placeholder="Enter your email"
                onChange={handleRegisterChange}
                label="Email"
              />
              <InputField
                icon={<Phone className="h-5 w-5 text-white/60" />}
                name="phone"
                type="tel"
                value={registerData.phone}
                placeholder="Enter your phone number"
                onChange={handleRegisterChange}
                label="Phone Number"
              />
              <InputField
                icon={<Lock className="h-5 w-5 text-white/60" />}
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={registerData.password}
                placeholder="Create a password"
                onChange={handleRegisterChange}
                label="Password"
                toggleIcon={showPassword ? <EyeOff /> : <Eye />}
                toggleAction={() => setShowPassword(!showPassword)}
              />
              <InputField
                icon={<Lock className="h-5 w-5 text-white/60" />}
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={registerData.confirmPassword}
                placeholder="Confirm your password"
                onChange={handleRegisterChange}
                label="Confirm Password"
                toggleIcon={showConfirmPassword ? <EyeOff /> : <Eye />}
                toggleAction={() => setShowConfirmPassword(!showConfirmPassword)}
              />

              <button
                type="button"
                onClick={handleRegister}
                className="w-full bg-[#5C4033] hover:bg-[#8B5E3C] text-white py-2 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                Sign Up
              </button>

              <div className="text-center mt-4">
                <span className="text-sm text-white/80">Already have an account? </span>
                <button
                  onClick={handleLoginRedirect}
                  className="text-sm text-yellow-300 hover:underline"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex w-1/2 bg-[#5C4033] items-center justify-center p-6">
            <div className="flex flex-col items-center">
              <img src={GoldenRetriever} alt="Golden Retriever" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mb-4" />
              <h2 className="text-white text-2xl font-bold mb-1">Join Our Pet Family</h2>
              <p className="text-white text-sm">Adopt. Love. Repeat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ icon, name, value, placeholder, onChange, label, type = 'text', toggleIcon, toggleAction }) => (
  <div>
    <label className="block text-sm font-medium text-white mb-1">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-2.5">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-10 py-2 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#F4A261] outline-none bg-white/20 text-white placeholder-white/70"
        placeholder={placeholder}
      />
      {toggleIcon && (
        <button
          type="button"
          onClick={toggleAction}
          className="absolute right-3 top-2.5 text-white/60 hover:text-white"
        >
          {toggleIcon}
        </button>
      )}
    </div>
  </div>
);

export default RegisterPage;
