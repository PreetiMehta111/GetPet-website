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
  const [showBill, setShowBill] = useState(false);
  const [isPurchaseFinalized, setIsPurchaseFinalized] = useState(false);

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
      name: 'Golden Retriever',
      image: DogProduct,
      price: 15000,
      desc: 'A charming dog for your home.',
    },
    {
      id: 27,
      name: 'Tortoise',
      image: TortoiseProduct,
      price: 8000,
      desc: 'A playful tortoise.',
    },
    {
      id: 28,
      name: 'Rabbit',
      image: RabbitProduct,
      price: 10000,
      desc: 'A cozy rabbit.',
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
  };

  const viewBill = () => {
    setShowBill(true);
  };

  const finalizePurchase = () => {
    setIsPurchaseFinalized(true);
    setCart([]); // Clear cart upon finalization
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
          className={`cursor-pointer text-2xl ${i <= userRating ? 'text-[#F4A261]' : 'text-gray-300'}`}
          aria-label={`Rate ${i} star${i > 1 ? 's' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const closeProductDetail = () => setSelectedProduct(null);

  const closeBill = () => {
    setShowBill(false);
    setIsPurchaseFinalized(false);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5C4033] to-[#3A2A1F] text-white py-28 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="max-w-xl z-10 animate-fade-in">
          <h3 className="text-[#F4A261] text-2xl font-semibold mb-4 tracking-wide">Welcome to Pet Paradise</h3>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">Find Your Furry Friend!</h1>
          <p className="text-lg mb-8 text-gray-200 leading-relaxed">
            At GetPet, we connect pet lovers with their perfect companions. Discover dogs, cats, rabbits, tortoises, and fish in a trusted, animal-loving community dedicated to happy homes.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
              aria-label="Adopt a pet now"
            >
              Adopt Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-[#F4A261] text-[#F4A261] px-8 py-3 rounded-full font-semibold hover:bg-[#F4A261] hover:text-[#5C4033] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mt-10 md:mt-0 z-10">
          <div className="rounded-full overflow-hidden border-8 border-[#F4A261] w-[30rem] h-[30rem] shadow-2xl">
            <img
              src={sliderImages[currentSlide]}
              alt={`Pet Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033]/80 to-transparent opacity-60"></div>
      </section>

      {/* Best Selling Pets */}
      <section className="py-20 px-6 bg-gray-50 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#5C4033] uppercase tracking-tight">Best Selling Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bestSellingPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(pet)}
            >
              <div className="p-4">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#5C4033] mb-2">{pet.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{pet.desc}</p>
                <p className="text-[#5C4033] font-medium text-lg mb-4">₹{pet.price.toLocaleString()}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(pet);
                  }}
                  className="bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white px-6 py-2 rounded-full font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
                  aria-label={`Add ${pet.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-[#f9e4d4] animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#5C4033] uppercase tracking-tight">Featured Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#5C4033] mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                <p className="text-[#5C4033] font-medium text-lg mb-4">₹{product.price.toLocaleString()}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white px-6 py-2 rounded-full font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl w-full max-w-5xl flex relative shadow-2xl">
            <button
              onClick={closeProductDetail}
              className="absolute top-4 right-4 text-[#5C4033] text-3xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
              aria-label="Close product details"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-1/2 h-[30rem] object-contain rounded-l-2xl"
            />
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold text-[#5C4033] mb-3">{selectedProduct.name}</h2>
              <p className="text-gray-600 text-base mb-4">{selectedProduct.desc}</p>
              <p className="text-[#5C4033] font-semibold text-lg mb-3">₹{selectedProduct.price.toLocaleString()}</p>
              <p className="text-gray-500 text-sm mb-4">{selectedProduct.shipping || 'Contact for shipping details'}</p>
              <div className="mb-6">
                <span className="text-[#5C4033] font-medium mr-2">Rate this pet:</span>
                {getRatingStars(selectedProduct.id)}
              </div>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="w-full bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white py-3 rounded-lg font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
                aria-label={`Add ${selectedProduct.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Bill Button */}
      {cart.length > 0 && (
        <button
          onClick={viewBill}
          className="fixed bottom-10 right-10 bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] py-3 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
          aria-label="View purchase bill"
        >
          View Bill
        </button>
      )}

      {/* Bill Modal */}
      {showBill && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-3xl font-bold text-[#5C4033] mb-6 border-b-2 border-[#F4A261] pb-2">Purchase Bill</h2>
            {isPurchaseFinalized ? (
              <div>
                <p className="text-green-600 font-semibold mb-4 text-lg">Purchase Finalized Successfully!</p>
                <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
                <button
                  onClick={closeBill}
                  className="w-full bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white py-2 rounded-lg font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
                  aria-label="Close bill"
                >
                  Close
                </button>
              </div>
            ) : cart.length === 0 ? (
              <p className="text-gray-600 text-center">No items in cart.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between mb-3 text-gray-700">
                    <span className="truncate">{item.name} (x{item.quantity})</span>
                    <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="mt-6 border-t pt-4 text-right">
                  <p className="text-[#5C4033] font-semibold text-lg">
                    Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </p>
                  <p className="text-[#5C4033] font-bold text-xl">
                    Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                  </p>
                </div>
                <div className="mt-6 flex justify-between gap-4">
                  <button
                    onClick={closeBill}
                    className="flex-1 bg-gray-200 text-[#5C4033] py-2 rounded-lg font-medium hover:bg-gray-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300/50"
                    aria-label="Cancel purchase"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={finalizePurchase}
                    className="flex-1 bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] py-2 rounded-lg font-medium hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
                    aria-label="Finalize purchase"
                  >
                    Finalize Purchase
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Shop by Categories */}
      <section className="py-20 px-6 bg-[#f0e6dc] animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5C4033] uppercase tracking-tight">Shop by Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50 ${
                selectedCategory === cat
                  ? 'bg-[#F4A261] text-[#5C4033] shadow-md'
                  : 'bg-[#5C4033] text-white hover:bg-[#4a332a]'
              }`}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="w-full h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-xl transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-[#5C4033] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                  <p className="text-[#5C4033] font-medium text-lg mb-4">₹{product.price.toLocaleString()}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white px-6 py-2 rounded-full font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* About Us */}
      <section className="py-20 px-6 bg-[#e8d8c8] text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-[#5C4033] mb-8 uppercase tracking-tight">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          At <span className="font-semibold text-[#5C4033]">GetPet</span>, we’re a community passionate about animal love and well-being. We connect pets with loving homes through seamless adoption, expert guidance, and curated pet products.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-base">
          <strong className="text-[#5C4033]">Our Mission:</strong> Ensure every pet finds a loving home.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-2 text-base">
          <strong className="text-[#5C4033]">Why Choose Us?</strong> Verified breeders and compassionate support make us your top pet adoption destination.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="mt-8 bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
          aria-label="Learn more about GetPet"
        >
          Learn More
        </button>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#5C4033] uppercase tracking-tight">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 text-base">"Adopting my Golden Retriever was a dream with GetPet!"</p>
            <p className="mt-3 text-[#5C4033] font-semibold">— Sarah K.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 text-base">"Perfect Persian Cat with great support!"</p>
            <p className="mt-3 text-[#5C4033] font-semibold">— John D.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 text-base">"Amazing pet selection and advice!"</p>
            <p className="mt-3 text-[#5C4033] font-semibold">— Emily R.</p>
          </div>
        </div>
      </section>

      {/* Adoption Tips */}
      <section className="py-20 px-6 bg-[#f0e6dc] animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5C4033] uppercase tracking-tight">Adoption Tips</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">Prepare Your Home</h3>
            <p className="text-gray-600">Set up a safe space with food, water, and a cozy bed.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">Understand Their Needs</h3>
            <p className="text-gray-600">Research diet, exercise, and grooming requirements.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;