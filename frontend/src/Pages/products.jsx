// import React, { useState, useEffect } from 'react';
// import Header from './header.jsx';
// import Footer from './footer.jsx';

// const API_URL = 'http://localhost:5000/api/pets';

// const Products = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const res = await fetch(API_URL);
//         if (!res.ok) throw new Error('Failed to fetch pets');
//         const data = await res.json();
//         setPets(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPets();
//   }, []);

//   // Get unique categories from pets
//   const categories = ['All', ...Array.from(new Set(pets.map(p => p.category).filter(Boolean)))];

//   // Filter pets by selected category
//   const filteredPets = selectedCategory === 'All'
//     ? pets
//     : pets.filter(p => p.category === selectedCategory);

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header />
//       <div className="container mx-auto px-4 py-8 flex-1">
//         <h1 className="text-3xl font-bold text-center mb-6 text-[#5C4033]">Our Pets</h1>
//         <div className="flex flex-wrap justify-center gap-2 mb-6">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full border ${selectedCategory === cat ? 'bg-[#5C4033] text-white' : 'bg-white text-[#5C4033] border-[#5C4033]'} transition`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//         {loading ? (
//           <div className="text-center text-lg">Loading pets...</div>
//         ) : error ? (
//           <div className="text-center text-red-500">{error}</div>
//         ) : filteredPets.length === 0 ? (
//           <div className="text-center text-gray-500">No pets found in this category.</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredPets.map(pet => (
//               <div key={pet.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
//                 {pet.image_url && (
//                   <img
//                     src={`http://localhost:5000${pet.image_url}`}
//                     alt={pet.name}
//                     className="w-32 h-32 object-cover rounded mb-2"
//                   />
//                 )}
//                 <h2 className="text-xl font-semibold text-[#5C4033] mb-1">{pet.name}</h2>
//                 <div className="text-sm text-gray-600 mb-1">{pet.breed}</div>
//                 <div className="text-sm text-gray-600 mb-1">Origin: {pet.origin}</div>
//                 <div className="text-sm text-gray-600 mb-1">Behavior: {pet.behavior}</div>
//                 <div className="text-sm text-gray-600 mb-1">Diet: {pet.diet}</div>
//                 <div className="text-sm text-gray-600 mb-1">Feeding: {pet.feeding}</div>
//                 <div className="text-lg font-bold text-[#5C4033] mt-2">₹{pet.price}</div>
//                 {pet.discount && (
//                   <div className="text-green-600 text-sm">{pet.discount}% off</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header.jsx';
import Footer from './footer.jsx';

const Products = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : null;

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pets');
        if (!res.ok) throw new Error('Failed to fetch pets');
        const data = await res.json();
        setPets(data);
        setFilteredPets(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchPets();
  }, []);

  useEffect(() => {
    let filtered = pets;
    if (searchTerm) {
      filtered = filtered.filter((pet) =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category !== 'All') {
      filtered = filtered.filter((pet) => pet.category === category);
    }
    setFilteredPets(filtered);
  }, [searchTerm, category, pets]);

  const handleAddToCart = async (petId) => {
    if (!user) {
      toast.error('Please login to add to cart');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: user.id, petId }),
      });
      if (!res.ok) throw new Error('Failed to add to cart');
      toast.success('Added to cart!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Header cartCount={0} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#5C4033]">Our Pets</h1>
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <input
            type="text"
            placeholder="Search pets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded w-full md:w-1/3 mb-4 md:mb-0"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border rounded w-full md:w-1/4"
          >
            <option value="All">All Categories</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={pet.image_url || '/default-pet.jpg'} alt={pet.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-[#5C4033]">{pet.name}</h3>
              <p className="text-gray-600">{pet.breed}</p>
              <p className="text-[#F4A261] font-bold">${pet.price - (pet.discount || 0)}</p>
              <button
                onClick={() => handleAddToCart(pet.id)}
                className="mt-2 bg-[#5C4033] text-white px-4 py-2 rounded hover:bg-[#3A2A1F]"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Products;