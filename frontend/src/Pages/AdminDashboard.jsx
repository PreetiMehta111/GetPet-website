import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Changed to named import

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPet, setNewPet] = useState({
    id: '',
    name: '',
    category: '',
    image: '',
    price: 0,
    discount: 0,
    desc: { breed: '', origin: '', behavior: '', diet: '', feeding: '' },
  });

  const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];

  // Check authentication and role on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = token ? jwtDecode(token) : null;
    if (!token || !user || user.role !== 'admin') {
      navigate('/login');
    }
    // Load pets from localStorage
    const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
    setPets(storedPets);
  }, [navigate]);

  // Save pets to localStorage on change
  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets]);

  // Handle pet management
  const addPet = () => {
    if (!newPet.name || !newPet.category || !newPet.price) {
      alert('Please fill all required fields');
      return;
    }
    const id = Math.max(...pets.map(p => p.id), 0) + 1;
    setPets([...pets, { ...newPet, id }]);
    setShowAddModal(false);
    setNewPet({
      id: '',
      name: '',
      category: '',
      image: '',
      price: 0,
      discount: 0,
      desc: { breed: '', origin: '', behavior: '', diet: '', feeding: '' },
    });
  };

  const editPet = () => {
    setPets(pets.map(p => p.id === selectedPet.id ? selectedPet : p));
    setSelectedPet(null);
  };

  const deletePet = (id) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      setPets(pets.filter(p => p.id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Mock stats
  const totalPets = pets.length;
  const pendingOrders = 15;
  const revenue = 50000;
  const newPetsThisWeek = 5;
  const newPetsThisMonth = 12;

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E293B] text-white p-4 space-y-6">
        <div className="text-2xl font-bold text-center py-4">Admin Panel</div>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {/* Navigate to dashboard */}}
                className="w-full text-left px-4 py-2 hover:bg-[#2A3F5F] rounded"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => {navigate('/admin/products')}}
                className="w-full text-left px-4 py-2 hover:bg-[#2A3F5F] rounded"
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600">Total Pets</h3>
            <p className="text-2xl font-bold text-[#5C4033]">{totalPets}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600">Pending Orders</h3>
            <p className="text-2xl font-bold text-[#5C4033]">{pendingOrders}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600">Revenue</h3>
            <p className="text-2xl font-bold text-[#5C4033]">${revenue}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600">New Pets This Month</h3>
            <p className="text-2xl font-bold text-[#5C4033]">{newPetsThisMonth}</p>
          </div>
        </div>

        {/* Pet Activity */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-[#5C4033] mb-4">Pet Activity</h2>
          <div className="h-32 bg-gray-200 animate-pulse"> {/* Placeholder for chart/graph */}</div>
        </div>

        {/* Recent Pets Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#5C4033] mb-4">Recent Pets</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map(pet => (
                <tr key={pet.id} className="border-t">
                  <td className="p-2">{pet.id}</td>
                  <td className="p-2">{pet.name}</td>
                  <td className="p-2">{pet.category}</td>
                  <td className="p-2">${pet.price}</td>
                  <td className="p-2">
                    <button
                      onClick={() => {
                        setSelectedPet(pet);
                        setShowAddModal(true);
                      }}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePet(pet.id)}
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

        {/* Add Pet Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-semibold text-[#5C4033] mb-4">
                {selectedPet ? 'Edit Pet' : 'Add New Pet'}
              </h2>
              <input
                type="text"
                value={newPet.name}
                onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                placeholder="Pet Name"
                className="w-full p-2 mb-2 border rounded"
              />
              <select
                value={newPet.category}
                onChange={(e) => setNewPet({ ...newPet, category: e.target.value })}
                className="w-full p-2 mb-2 border rounded"
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="number"
                value={newPet.price}
                onChange={(e) => setNewPet({ ...newPet, price: parseFloat(e.target.value) })}
                placeholder="Price"
                className="w-full p-2 mb-2 border rounded"
              />
              <button
                onClick={selectedPet ? editPet : addPet}
                className="w-full bg-[#5C4033] text-white py-2 rounded hover:bg-[#8B5E3C]"
              >
                {selectedPet ? 'Save' : 'Add'}
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setSelectedPet(null);
                  setNewPet({
                    id: '',
                    name: '',
                    category: '',
                    image: '',
                    price: 0,
                    discount: 0,
                    desc: { breed: '', origin: '', behavior: '', diet: '', feeding: '' },
                  });
                }}
                className="w-full mt-2 text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;