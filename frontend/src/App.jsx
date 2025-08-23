
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home.jsx';
import RegisterPage from './Pages/register.jsx';
import LoginPage from './Pages/login.jsx';
import ProductsPage from './Pages/products.jsx';
import AboutUs from './Pages/aboutus.jsx';
import ContactUs from './Pages/contactus.jsx';
import ProfilePage from './Pages/profilepage.jsx'; 
import AdminDashboard from './Pages/AdminDashboard.jsx';
import AdminProducts from './Pages/AdminProducts.jsx';

const App = () => {

  const [backendData, setBackendData] = useState([{}]); 

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => { 
        setBackendData(data)
      }
    )
  }, []);

  return (
    <>
    {(typeof backendData.users === 'undefined') ? ( 
      <p>Loading...</p> 
    ) : (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Add the new route */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </>
  );
};

export default App;

