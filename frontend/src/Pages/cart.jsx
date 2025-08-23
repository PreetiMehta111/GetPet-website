import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header.jsx';
import Footer from './footer.jsx';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (!user) return navigate('/login');
    const fetchCart = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cart/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch cart');
        const data = await res.json();
        setCartItems(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchCart();
  }, [user, navigate, token]);

  const handlePurchase = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${user.id}/purchase`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Purchase failed');
      toast.success('Purchase successful!');
      setCartItems([]);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#5C4033]">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center">Cart is empty</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded shadow">
                  <img src={item.image_url || '/default-pet.jpg'} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handlePurchase}
              className="mt-4 bg-[#5C4033] text-white px-6 py-2 rounded hover:bg-[#3A2A1F]"
            >
              Purchase
            </button>
          </>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Cart;