import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoldenRetriever from '../assets/GoldenRetriever.jpg';

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location.state?.user);

  useEffect(() => {
    if (!user) {
      const savedUser = JSON.parse(localStorage.getItem('currentUser'));
      if (savedUser) setUser(savedUser);
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center text-white">Please log in to view your profile.</div>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VQ9WjoHKJhUm1yb5Ji4rd0Ki0lh77XScQ&s')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl p-8 animate-slide-up">
        <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

        <div className="flex flex-col items-center mb-6">
          <img src={GoldenRetriever} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4" />
          <h2 className="text-2xl font-semibold">{user.fullName}</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-white/20 rounded-lg">
            <p className="text-white"><strong>Email:</strong> {user.email}</p>
          </div>
          <div className="p-4 bg-white/20 rounded-lg">
            <p className="text-white"><strong>Phone:</strong> {user.phone}</p>
          </div>
          <div className="p-4 bg-white/20 rounded-lg">
            <p className="text-white"><strong>Registered On:</strong> {new Date(user.id).toLocaleDateString()}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-[#5C4033] hover:bg-[#8B5E3C] text-white py-2 font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;