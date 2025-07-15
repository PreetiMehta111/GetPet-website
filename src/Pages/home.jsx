import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';

import DogSlide from '../assets/dog-slide.jpg';
import CatSlide from '../assets/cat-slide.jpg';
import RabbitSlide from '../assets/rabbit-slide.jpg';
import TortoiseSlide from '../assets/tortoise-slide.jpg';
import FishSlide from '../assets/aquarium-slide.jpg';

import DogProduct from '../assets/dog-product.jpg';
import CatProduct from '../assets/cat-product.jpg';
import RabbitProduct from '../assets/rabbit-product.jpg';
import TortoiseProduct from '../assets/tortoise-product.jpg';
import FishProduct from '../assets/fish-product.jpg';
import TeamWorking from '../assets/teamworking.avif';

import Dog1 from '../assets/dog1.jpg';
import Dog2 from '../assets/dog2.jpg';
import Dog3 from '../assets/dog3.jpg';
import Dog4 from '../assets/dog4.jpg';
import Dog5 from '../assets/dog5.jpg';

import Cat1 from '../assets/cat1.jpg';
import Cat2 from '../assets/cat2.jpg';
import Cat3 from '../assets/cat3.jpg';
import Cat4 from '../assets/cat4.jpg';
import Cat5 from '../assets/cat5.jpg';

import Rabbit1 from '../assets/rabbit1.jpg';
import Rabbit2 from '../assets/rabbit2.jpg';
import Rabbit3 from '../assets/rabbit3.jpg';
import Rabbit4 from '../assets/rabbit4.jpg';
import Rabbit5 from '../assets/rabbit5.jpg';

import Tortoise1 from '../assets/tortoise1.jpg';
import Tortoise2 from '../assets/tortoise2.jpg';
import Tortoise3 from '../assets/tortoise3.jpg';
import Tortoise4 from '../assets/tortoise4.jpg';
import Tortoise5 from '../assets/tortoise5.jpg';

import Fish1 from '../assets/fish1.jpg';
import Fish2 from '../assets/fish2.jpg';
import Fish3 from '../assets/fish3.jpg';
import Fish4 from '../assets/fish4.jpg';
import Fish5 from '../assets/fish5.jpg';

const Home = () => {
  const navigate = useNavigate();
  const sliderImages = [DogSlide, CatSlide, RabbitSlide, TortoiseSlide, FishSlide];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showAddMessage, setShowAddMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const categoryProducts = {
    Dogs: [
      { id: 1, name: 'Labrador Retriever', image: Dog1, price: 8000, desc: 'Friendly, energetic, and great with families.' },
      { id: 2, name: 'Beagle', image: Dog2, price: 6000, desc: 'Playful, loving, and loves company.' },
      { id: 3, name: 'Pug', image: Dog3, price: 5000, desc: 'Charming companion with a wrinkled face.' },
      { id: 4, name: 'German Shepherd', image: Dog4, price: 10000, desc: 'Loyal, intelligent, and protective.' },
      { id: 5, name: 'Golden Retriever', image: Dog5, price: 9000, desc: 'Gentle and friendly with a golden coat.' },
    ],
    Cats: [
      { id: 6, name: 'Persian Cat', image: Cat1, price: 5000, desc: 'Elegant, fluffy, and loves to relax.' },
      { id: 7, name: 'Siamese Cat', image: Cat2, price: 4500, desc: 'Talkative with striking blue eyes.' },
      { id: 8, name: 'British Shorthair', image: Cat3, price: 5500, desc: 'Chubby cheeks and super cuddly.' },
      { id: 9, name: 'Bengal Cat', image: Cat4, price: 7000, desc: 'Wild-looking but affectionate.' },
      { id: 10, name: 'Maine Coon', image: Cat5, price: 8000, desc: 'Big, fluffy, and friendly giant.' },
    ],
    Rabbits: [
      { id: 11, name: 'Mini Lop', image: Rabbit1, price: 2000, desc: 'Tiny and adorable with floppy ears.' },
      { id: 12, name: 'Dutch Rabbit', image: Rabbit2, price: 1800, desc: 'Black-and-white sweetheart.' },
      { id: 13, name: 'Lionhead Rabbit', image: Rabbit3, price: 2500, desc: 'Has a mane like a lion!' },
      { id: 14, name: 'Rex Rabbit', image: Rabbit4, price: 2200, desc: 'Velvety fur and a calm nature.' },
      { id: 15, name: 'Harlequin Rabbit', image: Rabbit5, price: 2300, desc: 'Fun colors and playful vibes.' },
    ],
    Tortoise: [
      { id: 16, name: 'Indian Star Tortoise', image: Tortoise1, price: 4000, desc: 'Distinctive patterns and docile nature.' },
      { id: 17, name: 'Sulcata Tortoise', image: Tortoise2, price: 6000, desc: 'Grows large and lives long.' },
      { id: 18, name: 'Greek Tortoise', image: Tortoise3, price: 3500, desc: 'Hardy and loves the sun.' },
      { id: 19, name: 'Leopard Tortoise', image: Tortoise4, price: 5000, desc: 'Spotted beauty with gentle behavior.' },
      { id: 20, name: 'Red-Footed Tortoise', image: Tortoise5, price: 4500, desc: 'Colorful legs and friendly nature.' },
    ],
    'Aquarium Fish': [
      { id: 21, name: 'Goldfish', image: Fish1, price: 500, desc: 'Classic, bright, and calming.' },
      { id: 22, name: 'Betta Fish', image: Fish2, price: 800, desc: 'Colorful fins and a bold attitude.' },
      { id: 23, name: 'Angelfish', image: Fish3, price: 1000, desc: 'Graceful swimmer with elegance.' },
      { id: 24, name: 'Tetra Fish', image: Fish4, price: 600, desc: 'Small, shiny, and loves groups.' },
      { id: 25, name: 'Guppy', image: Fish5, price: 400, desc: 'Tiny but dazzling in color.' },
    ],
  };

  const featuredProducts = [
    {
      id: 26,
      name: 'Tartarughe Decorative Plate',
      image: TeamWorking,
      price: 15000,
      shipping: 'Ships in 1-2 weeks',
      desc: 'A stunning tortoise-themed decorative plate crafted from aluminum with a gold leaf finish, perfect for adding a touch of nature-inspired elegance to your home.',
    },
    {
      id: 27,
      name: 'Pianeta Ceramic Vase',
      image: TortoiseProduct,
      price: 8000,
      shipping: 'Ships in 3-5 days',
      desc: 'A beautifully designed ceramic vase shaped like a tortoise shell, ideal for displaying flowers or as a unique pet-inspired decor piece.',
    },
    {
      id: 28,
      name: 'Campanino 900 Beechwood Chair',
      image: RabbitProduct,
      price: 10000,
      shipping: 'Ships in 1 week',
      desc: 'A cozy beechwood chair with a rabbit-patterned cushion, blending comfort and charm for pet lovers.',
    },
  ];

  const bestSellingPets = [
    {
      id: 1,
      name: 'Labrador Retriever',
      image: Dog1,
      price: 8000,
      desc: 'A beloved family dog, known for its friendly and outgoing nature, perfect for active households.',
    },
    {
      id: 6,
      name: 'Persian Cat',
      image: Cat1,
      price: 5000,
      desc: 'An elegant and calm cat with luxurious fur, ideal for a cozy home environment.',
    },
    {
      id: 11,
      name: 'Mini Lop',
      image: Rabbit1,
      price: 2000,
      desc: 'A charming rabbit with floppy ears, loved for its small size and cuddly personality.',
    },
  ];

  const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];

  const filteredProducts = selectedCategory ? categoryProducts[selectedCategory] : [];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowAddMessage(true);
    setTimeout(() => setShowAddMessage(false), 2000);
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateRating = (productId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
  };

  const getRatingStars = (productId) => {
    const userRating = ratings[productId] || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => updateRating(productId, i)}
          style={{ cursor: 'pointer', color: i <= userRating ? '#F4A261' : 'gray' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const closeProductDetail = () => setSelectedProduct(null);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#5C4033] text-white py-24 px-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="max-w-xl z-10">
          <h3 className="text-[#F4A261] text-xl font-semibold mb-4">Welcome to Pet Paradise</h3>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Discover Your Perfect Pet!</h1>
          <p className="text-lg mb-8 text-justify">
            At GetPet, we’re passionate about bringing pet lovers and their ideal companions together. Explore a wide range of dogs, cats, rabbits, tortoises, and fish, all in a trusted space dedicated to animal welfare and happy homes.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate('/register')}
              className="bg-[#F4A261] text-[#5C4033] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#e6953f] transition-transform transform hover:scale-105"
            >
              Adopt Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#5C4033] transition-transform transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mt-8 md:mt-0 z-10">
          <div className="rounded-full overflow-hidden border-8 border-[#F4A261] w-[28rem] h-[28rem]">
            <img
              src={DogSlide} // Replace with dog-slide-large.jpg or similar large dog image
              alt="Dog Slide"
              className="w-full h-full object-cover transition duration-700 ease-in-out"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033] to-transparent opacity-70"></div>
      </section>

      {/* Best Selling Pets */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] uppercase">Best Selling Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bestSellingPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(pet)}
            >
              <div className="p-2">
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-t-xl" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#5C4033]">{pet.name}</h3>
                <p className="text-gray-600 text-sm">{pet.desc}</p>
                <p className="text-[#5C4033] font-medium mt-2">₹{pet.price.toLocaleString()}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(pet);
                  }}
                  className="mt-3 bg-[#5C4033] text-white px-5 py-2 rounded-full hover:bg-[#4a332a] transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-[#f9e4d4]">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] uppercase">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#5C4033]">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
                <p className="text-[#5C4033] font-bold mt-2">₹{product.price.toLocaleString()}</p>
                <p className="text-gray-500 text-xs mt-1">{product.shipping}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl flex relative">
            <button
              onClick={closeProductDetail}
              className="absolute top-4 right-4 text-[#5C4033] text-2xl font-bold hover:text-[#F4A261] transition"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-1/2 h-[28rem] object-contain rounded-l-lg"
            />
            <div className="w-1/2 p-6 text-left">
              <h2 className="text-2xl font-bold text-[#5C4033] mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{selectedProduct.desc}</p>
              <p className="text-[#5C4033] font-medium mb-2">₹{selectedProduct.price.toLocaleString()}</p>
              <p className="text-gray-500 text-xs mb-4">{selectedProduct.shipping || 'Contact for shipping details'}</p>
              <div className="mb-4">
                <span className="text-[#5C4033] font-medium mr-2">Rate this product:</span>
                {getRatingStars(selectedProduct.id)}
              </div>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="w-full bg-[#5C4033] text-white py-3 rounded-lg hover:bg-[#4a332a] transition duration-300 text-center"
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add to Cart Message */}
      {showAddMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          This product has been added to cart
        </div>
      )}

      {/* Shop by Categories */}
      <section className="py-16 px-6 bg-[#f0e6dc]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase">Shop by Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`bg-[#5C4033] text-white px-4 py-2 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat ? 'bg-[#4a332a]' : 'hover:bg-[#4a332a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="w-full h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#5C4033]">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
                  <p className="text-[#5C4033] font-medium mt-2">₹{product.price.toLocaleString()}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="mt-3 bg-[#5C4033] text-white px-4 py-2 rounded-lg hover:bg-[#4a332a] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cart Overlay */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-[#5C4033]">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2 items-center">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-[#5C4033] text-white px-2 py-1 rounded-l hover:bg-[#4a332a] transition"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-[#5C4033] text-white px-2 py-1 rounded-r hover:bg-[#4a332a] transition"
                      >
                        +
                      </button>
                      <span className="ml-2">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
                <div className="mt-4 text-right">
                  <p className="text-[#5C4033] font-semibold">
                    Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </p>
                  <p className="text-[#5C4033] font-semibold">
                    Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setShowCart(false)}
                  className="mt-4 bg-[#5C4033] text-white py-2 px-4 rounded-lg hover:bg-[#4a332a] transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* About Us */}
      <section className="py-16 px-6 bg-[#e8d8c8] text-center">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-6 uppercase">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At <span className="font-semibold text-[#5C4033]">GetPet</span>, we’re a community dedicated to animal love and well-being. We bridge pets with loving homes through seamless adoption, expert guidance, and curated pet products.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          <strong className="text-[#5C4033]">Our Mission:</strong> Ensure every pet finds a loving home.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-2">
          <strong className="text-[#5C4033]">Why Choose Us?</strong> Verified breeders and compassionate support make us your top pet adoption destination.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="mt-6 bg-[#5C4033] text-white px-6 py-2 rounded-lg hover:bg-[#4a332a] transition"
        >
          Learn More
        </button>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] uppercase">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-5 rounded-lg shadow">
            <p className="text-gray-700">"Adopting my Golden Retriever was a dream with GetPet!"</p>
            <p className="mt-2 text-[#5C4033] font-semibold">— Sarah K.</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow">
            <p className="text-gray-700">"Perfect Persian Cat with great support!"</p>
            <p className="mt-2 text-[#5C4033] font-semibold">— John D.</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow">
            <p className="text-gray-700">"Amazing pet selection and advice!"</p>
            <p className="mt-2 text-[#5C4033] font-semibold">— Emily R.</p>
          </div>
        </div>
      </section>

      {/* Adoption Tips */}
      <section className="py-16 px-6 bg-[#f0e6dc]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase">Adoption Tips</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#5C4033]">Prepare Your Home</h3>
            <p className="text-gray-600">Set up a safe space with food, water, and a cozy bed.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#5C4033]">Understand Their Needs</h3>
            <p className="text-gray-600">Research diet, exercise, and grooming requirements.</p>
          </div>
        </div>
      </section>

      {/* Cart Toggle Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-10 right-10 bg-[#5C4033] text-white py-3 px-5 rounded-full hover:bg-[#4a332a] transition"
      >
        View Cart ({cart.length})
      </button>

      <Footer />
    </>
  );
};

export default Home;