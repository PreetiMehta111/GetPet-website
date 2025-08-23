import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:5000/api/pets';

const initialPet = {
  name: '',
  category: '',
  breed: '',
  origin: '',
  behavior: '',
  diet: '',
  feeding: '',
  price: '',
  discount: '',
  image: null,
};

const AdminProducts = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formPet, setFormPet] = useState(initialPet);
  const [preview, setPreview] = useState(null);

  // Check authentication and role on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = token ? jwtDecode(token) : null;
    if (!token || !user || user.role !== 'admin') {
      navigate('/login');
    } else {
      fetchPets(token);
    }
    // eslint-disable-next-line
  }, [navigate]);

  // Fetch pets from API
  const fetchPets = async (token) => {
    try {
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPets(data);
    } catch (err) {
      alert('Failed to fetch pets');
    }
  };

  // Add or update pet
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    Object.entries(formPet).forEach(([key, value]) => {
      if (key === 'image') {
        if (value) formData.append('image', value);
      } else {
        formData.append(key, value);
      }
    });

    try {
      let res;
      if (selectedPet) {
        res = await fetch(`${API_URL}/${selectedPet.id}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      } else {
        res = await fetch(API_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      }
      if (!res.ok) throw new Error('Failed to save pet');
      setShowModal(false);
      setSelectedPet(null);
      setFormPet(initialPet);
      setPreview(null);
      fetchPets(token);
    } catch (err) {
      alert(err.message);
    }
  };

  // Delete pet
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this pet?')) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete pet');
      fetchPets(token);
    } catch (err) {
      alert(err.message);
    }
  };

  // Open modal for add or edit
  const openModal = (pet = null) => {
    setSelectedPet(pet);
    if (pet) {
      setFormPet({
        name: pet.name || '',
        category: pet.category || '',
        breed: pet.breed || '',
        origin: pet.origin || '',
        behavior: pet.behavior || '',
        diet: pet.diet || '',
        feeding: pet.feeding || '',
        price: pet.price || '',
        discount: pet.discount || '',
        image: null,
      });
      setPreview(pet.image_url ? `http://localhost:5000${pet.image_url}` : null);
    } else {
      setFormPet(initialPet);
      setPreview(null);
    }
    setShowModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormPet({ ...formPet, image: file });
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E293B] text-white p-4 space-y-6">
        <div className="text-2xl font-bold text-center py-4">Admin Panel</div>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate('/admin')}
                className="w-full text-left px-4 py-2 hover:bg-[#2A3F5F] rounded"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/admin/products')}
                className="w-full text-left px-4 py-2 hover:bg-[#2A3F5F] rounded bg-[#2A3F5F]"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-[#2A3F5F] rounded text-red-400"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#5C4033]">Manage Pets</h2>
          <button
            onClick={() => openModal()}
            className="bg-[#5C4033] text-white px-4 py-2 rounded hover:bg-[#8B5E3C]"
          >
            Add New Pet
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Breed</th>
                <th className="p-2">Origin</th>
                <th className="p-2">Behavior</th>
                <th className="p-2">Diet</th>
                <th className="p-2">Feeding</th>
                <th className="p-2">Price</th>
                <th className="p-2">Discount</th>
                <th className="p-2">Image</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet.id} className="border-t">
                  <td className="p-2">{pet.id}</td>
                  <td className="p-2">{pet.name}</td>
                  <td className="p-2">{pet.category}</td>
                  <td className="p-2">{pet.breed}</td>
                  <td className="p-2">{pet.origin}</td>
                  <td className="p-2">{pet.behavior}</td>
                  <td className="p-2">{pet.diet}</td>
                  <td className="p-2">{pet.feeding}</td>
                  <td className="p-2">{pet.price}</td>
                  <td className="p-2">{pet.discount}</td>
                  <td className="p-2">
                    {pet.image_url && (
                      <img
                        src={`http://localhost:5000${pet.image_url}`}
                        alt={pet.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => openModal(pet)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pet.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Pet Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <form
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <h2 className="text-xl font-semibold text-[#5C4033] mb-4">
                {selectedPet ? 'Edit Pet' : 'Add New Pet'}
              </h2>
              <input
                type="text"
                value={formPet.name}
                onChange={(e) => setFormPet({ ...formPet, name: e.target.value })}
                placeholder="Pet Name"
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="text"
                value={formPet.category}
                onChange={(e) => setFormPet({ ...formPet, category: e.target.value })}
                placeholder="Category"
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="text"
                value={formPet.breed}
                onChange={(e) => setFormPet({ ...formPet, breed: e.target.value })}
                placeholder="Breed"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                value={formPet.origin}
                onChange={(e) => setFormPet({ ...formPet, origin: e.target.value })}
                placeholder="Origin"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                value={formPet.behavior}
                onChange={(e) => setFormPet({ ...formPet, behavior: e.target.value })}
                placeholder="Behavior"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                value={formPet.diet}
                onChange={(e) => setFormPet({ ...formPet, diet: e.target.value })}
                placeholder="Diet"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                value={formPet.feeding}
                onChange={(e) => setFormPet({ ...formPet, feeding: e.target.value })}
                placeholder="Feeding"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="number"
                value={formPet.price}
                onChange={(e) => setFormPet({ ...formPet, price: e.target.value })}
                placeholder="Price"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="number"
                value={formPet.discount}
                onChange={(e) => setFormPet({ ...formPet, discount: e.target.value })}
                placeholder="Discount"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 mb-2 border rounded"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded mb-2"
                />
              )}
              <button
                type="submit"
                className="w-full bg-[#5C4033] text-white py-2 rounded hover:bg-[#8B5E3C]"
              >
                {selectedPet ? 'Save' : 'Add'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setSelectedPet(null);
                  setFormPet(initialPet);
                  setPreview(null);
                }}
                className="w-full mt-2 text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminProducts;