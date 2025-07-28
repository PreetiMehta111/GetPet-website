import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      {message}
    </div>
  );
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { email, password } = loginData;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store logged-in user
      showToast('Login successful! Redirecting to profile.');
      setTimeout(() => navigate('/profile', { state: { user } }), 1500);
    } else {
      showToast('Invalid email or password', 'error');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VQ9WjoHKJhUm1yb5Ji4rd0Ki0lh77XScQ&s')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl p-8 animate-slide-up">
        <h1 className="text-3xl font-bold text-center mb-6">Login to GetPet</h1>

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          icon={<Mail className="h-5 w-5 text-white/70" />}
          value={loginData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          icon={<Lock className="h-5 w-5 text-white/70" />}
          value={loginData.password}
          onChange={handleChange}
          toggleIcon={showPassword ? <EyeOff /> : <Eye />}
          toggleAction={() => setShowPassword(!showPassword)}
        />

        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-[#5C4033] hover:bg-[#8B5E3C] text-white py-2 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-white/80">
          Don't have an account?{' '}
          <span
            className="text-yellow-300 cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ label, icon, name, type = 'text', value, placeholder, onChange, toggleIcon, toggleAction }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-white mb-1">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-2.5">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full pl-10 pr-10 py-2 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#F4A261] outline-none bg-white/20 text-white placeholder-white/70"
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

export default LoginPage;