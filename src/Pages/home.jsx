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

const Home = () => {
  const navigate = useNavigate();
  const sliderImages = [DogSlide, CatSlide, RabbitSlide, TortoiseSlide, FishSlide];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const petProducts = [
    { id: 1, name: 'Golden Retriever', image: DogProduct, desc: 'A loyal and energetic dog perfect for active families' },
    { id: 2, name: 'Persian Cat', image: CatProduct, desc: 'A plush, calm cat ideal for cozy indoor living' },
    { id: 3, name: 'Mini Lop Rabbit', image: RabbitProduct, desc: 'A fluffy rabbit great for gentle playtime' },
    { id: 4, name: 'Tortoise', image: TortoiseProduct, desc: 'A peaceful pet with a lifespan of decades' },
    { id: 5, name: 'Aquarium Fish', image: FishProduct, desc: 'Colorful fish to brighten any home aquarium' },
  ];

  const featuredProducts = [
    { id: 6, name: 'Tartarughe Decorative Plate', image: TeamWorking, price: 'USD 2,600', shipping: 'Ships in 1-2 weeks', desc: 'A unique plate providing direct decor with turned aluminum structure and gold leaf finish. Also available in white and black.' },
    { id: 7, name: 'Pianeta Ceramic Vase', image: TortoiseProduct, price: 'USD 1,200', shipping: 'Ships in 3-5 days', desc: 'A sleek vase offering elegant design with ceramic structure. Available in white, black, and gold leaf finishes.' },
    { id: 8, name: 'Campanino 900 Beechwood', image: RabbitProduct, price: 'USD 950', shipping: 'Ships in 1 week', desc: 'A sturdy chair providing comfort with beechwood structure. Also available in white and black.' },
  ];

  const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory
    ? petProducts.filter(product => product.name.includes(selectedCategory))
    : petProducts;

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
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
      <section className="bg-[#5C4033] text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-10 md:mb-0">
          <h3 className="text-[#F4A261] text-xl font-semibold mb-2">Welcome to Pet Paradise</h3>
          <h1 className="text-5xl font-bold leading-tight mb-4">Find Your Perfect Pet Companion!</h1>
          <p className="text-lg mb-6 text-justify">
            At GetPet, we’re passionate about connecting pet lovers with their ideal companions. Whether you're seeking a loyal dog, a serene fish tank, or a cuddly rabbit, our platform offers a safe, trusted space to adopt or buy pets. With a community dedicated to animal welfare, we ensure every pet finds a forever home.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/register')}
              className="bg-[#F4A261] text-[#5C4033] font-bold px-6 py-2 rounded-full hover:bg-[#e6953f] transition"
            >
              Adopt Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#5C4033] transition"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden border-4 border-[#F4A261] w-64 h-64">
            <img
              src={sliderImages[currentSlide]}
              alt="Pet Slide"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-white font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#5C4033]">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
                <p className="text-[#5C4033] font-medium mt-2">{product.price}</p>
                <p className="text-gray-500 text-xs mt-1">{product.shipping}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl flex">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-1/2 h-96 object-cover rounded-l-lg"
            />
            <div className="w-1/2 p-6 text-left">
              <h2 className="text-2xl font-bold text-[#5C4033] mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{selectedProduct.desc}</p>
              <p className="text-[#5C4033] font-medium mb-2">{selectedProduct.price}</p>
              <p className="text-gray-500 text-xs mb-4">{selectedProduct.shipping}</p>
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
              <div className="mt-4 flex justify-between">
                <button
                  onClick={closeProductDetail}
                  className="text-[#F4A261] text-sm hover:underline"
                >
                  Ask for More Info
                </button>
                <button
                  onClick={closeProductDetail}
                  className="text-[#F4A261] text-sm hover:underline"
                >
                  Request Customization
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shop by Categories */}
      <section className="py-16 px-6 bg-[#fcefe3] font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          Shop by Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`bg-[#5C4033] text-white px-6 py-3 rounded-full text-base font-medium transition ${selectedCategory === cat ? 'bg-[#4a332a]' : 'hover:bg-[#4a332a]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-purple-200 shadow hover:shadow-xl transition duration-300 h-72"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#5C4033]">{product.name}</h3>
                <p className="text-gray-600 text-xs mt-1 mb-1">{product.desc}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 w-full bg-[#5C4033] text-white py-1 rounded-lg hover:bg-[#4a332a] transition text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
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
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>{item.price || 'N/A'}</span>
                  </div>
                ))}
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
      <section className="py-16 px-6 bg-[#fcefe3] text-center font-sans">
        <h2 className="text-3xl font-extrabold text-[#5C4033] mb-4 tracking-wide">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
          At <span className="font-semibold text-[#5C4033]">GetPet</span>, we’re more than just a pet adoption platform—we’re a community built on love for animals and dedication to their well-being. Founded with a mission to bridge the gap between pets and loving homes, we offer a seamless adoption process, expert guidance, and a curated selection of pet products to enrich your life with your new companion.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          <strong className="text-[#5C4033]">Our Mission:</strong> To ensure every pet finds a loving home and every owner enjoys a joyful bond with their furry, feathered, or finned friend.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-2">
          <strong className="text-[#5C4033]">Why Choose Us?</strong> With verified breeders, compassionate support, and a commitment to animal welfare, GetPet stands out as your go-to destination for pet adoption and care.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="mt-6 bg-[#5C4033] text-white px-6 py-2 rounded-lg hover:bg-[#4a332a] transition"
        >
          Learn More About Us
        </button>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 p-5 rounded-lg shadow">
            <p className="text-gray-700">"Adopting my Golden Retriever was a dream come true with GetPet!"</p>
            <p className="mt-2 text-[#5C4033] font-semibold">— Sarah K.</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow">
            <p className="text-gray-700">"Found the perfect Persian Cat with their amazing support!"</p>
            <p className="mt-2 text-[#5C4033] font-semibold">— John D.</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow">
            <p className="text-gray-700">"Great selection of pets and helpful advice!"</p>
            <p className="mt-2 text-[#5C4033] font-semibold">— Emily R.</p>
          </div>
        </div>
      </section>

      {/* Adoption Tips */}
      <section className="py-16 px-6 bg-[#fcefe3] font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          Adoption Tips
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#5C4033]">Prepare Your Home</h3>
            <p className="text-gray-600 mt-2">Set up a safe space with food, water, and a cozy bed before bringing your pet home.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#5C4033]">Understand Their Needs</h3>
            <p className="text-gray-600 mt-2">Research your pet’s diet, exercise, and grooming requirements for a happy life together.</p>
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