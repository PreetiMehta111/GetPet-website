
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//   const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     mobile: '',
//     email: '',
//   });
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();
//   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

//   useEffect(() => {
//     if (currentUser) {
//       setProfile({
//         firstName: currentUser.fullName.split(' ')[0] || '',
//         lastName: currentUser.fullName.split(' ')[1] || '',
//         mobile: currentUser.phone || '',
//         email: currentUser.email || '',
//       });
//       const savedImage = localStorage.getItem('profileImage');
//       if (savedImage) setImage(savedImage);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate, currentUser]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//       localStorage.setItem('profileImage', imageUrl);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     localStorage.removeItem('profileImage');
//     navigate('/');
//   };

//   if (!currentUser) return null;

//   return (
//     <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VQ9WjoHKJhUm1yb5Ji4rd0Ki0lh77XScQ&s')` }}>
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
//       <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 font-sans">
//         <div className="flex items-center mb-4">
//           <div className="relative mr-4">
//             <img
//               src={image || 'https://via.placeholder.com/75'}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
//             />
//             <label htmlFor="upload-photo" className="absolute bottom-[-6px] right-[-6px] bg-blue-600 text-white rounded-full text-xs p-1 cursor-pointer border-2 border-white">
//               ✏️
//             </label>
//             <input
//               type="file"
//               id="upload-photo"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="hidden"
//             />
//           </div>
//           <div>
//             <h2 className="text-xl font-bold">{profile.firstName} {profile.lastName}</h2>
//             <p className="text-blue-600 text-sm mt-1">⭐ Favourites</p>
//           </div>
//         </div>

//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-2">Personal Details</h3>
//           <div className="flex gap-2.5 mb-2.5">
//             <input
//               type="text"
//               name="firstName"
//               value={profile.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={profile.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
//             />
//           </div>
//           <div className="flex gap-2.5 mb-2.5">
//             <input
//               type="text"
//               name="mobile"
//               value={profile.mobile}
//               onChange={handleChange}
//               placeholder="Mobile Number"
//               className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
//             />
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleChange}
//               placeholder="Email ID"
//               className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
//             />
//           </div>
//         </div>

//         <button
//           className="mt-4 bg-blue-600 text-white px-4 py-2.5 rounded-lg w-full font-semibold hover:bg-blue-700"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header.jsx';
import Footer from './footer.jsx';

const ProfilePage = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (!user) return navigate('/login');
    const fetchPurchased = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cart/${user.id}/purchased`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch purchased');
        const data = await res.json();
        setPurchasedItems(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    setUserInfo(user);
    fetchPurchased();
  }, [user, navigate, token]);

  return (
    <div>
      <Header cartCount={0} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#5C4033]">Your Profile</h1>
        {userInfo && (
          <div className="mb-8 bg-white p-6 rounded shadow">
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Role:</strong> {userInfo.role}</p>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4">Purchased Products</h2>
        {purchasedItems.length === 0 ? (
          <p>No purchases yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purchasedItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded shadow">
                <img src={item.image_url || '/default-pet.jpg'} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Purchased: {new Date(item.purchased_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;