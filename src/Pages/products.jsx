import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import EsewaImage from '../assets/esewaicon.png';

import Dog1 from '../assets/dog1.jpg';
import Dog2 from '../assets/dog2.jpg';
import Dog3 from '../assets/dog3.jpg';
import Dog4 from '../assets/dog4.jpg';
import Dog5 from '../assets/dog5.jpg';
import Dog6 from '../assets/dog6.jpg';
import Cat1 from '../assets/cat1.jpg';
import Cat2 from '../assets/cat2.jpg';
import Cat3 from '../assets/cat3.jpg';
import Cat4 from '../assets/cat4.jpg';
import Cat5 from '../assets/cat5.jpg';
import Cat6 from '../assets/cat6.jpg';
import Rabbit1 from '../assets/rabbit1.jpg';
import Rabbit2 from '../assets/rabbit2.jpg';
import Rabbit3 from '../assets/rabbit3.jpg';
import Rabbit4 from '../assets/rabbit4.jpg';
import Rabbit5 from '../assets/rabbit5.jpg';
import Rabbit6 from '../assets/rabbit6.jpg';
import Tortoise1 from '../assets/tortoise1.jpg';
import Tortoise2 from '../assets/tortoise2.jpg';
import Tortoise3 from '../assets/tortoise3.jpg';
import Tortoise4 from '../assets/tortoise4.jpg';
import Tortoise5 from '../assets/tortoise5.jpg';
import Tortoise6 from '../assets/tortoise6.jpg';
import Fish1 from '../assets/fish1.jpg';
import Fish2 from '../assets/fish2.jpg';
import Fish3 from '../assets/fish3.jpg';
import Fish4 from '../assets/fish4.jpg';
import Fish5 from '../assets/fish5.jpg';
import Fish6 from '../assets/fish6.jpg';

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [isPurchaseFinalized, setIsPurchaseFinalized] = useState(false);
  const [showNoProductMessage, setShowNoProductMessage] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const categoryProducts = {
    Dogs: [
      {
        id: 1,
        name: 'Labrador Retriever',
        image: Dog1,
        price: 8000,
        discount: 0.1,
        desc: {
          breed: 'Labrador Retriever',
          origin: 'Newfoundland, Canada',
          behavior: 'Friendly, energetic, great with families',
          diet: 'High-quality dog food, lean meats',
          feeding: 'Feed premium kibble twice daily, avoid overfeeding.',
        },
      },
      {
        id: 2,
        name: 'Beagle',
        image: Dog2,
        price: 6000,
        discount: 0.15,
        desc: {
          breed: 'Beagle',
          origin: 'England, 13th century',
          behavior: 'Playful, loving, enjoys company',
          diet: 'Balanced dog food, occasional treats',
          feeding: 'Small, frequent meals to prevent bloating.',
        },
      },
      {
        id: 3,
        name: 'Pug',
        image: Dog3,
        price: 5000,
        discount: 0.0,
        desc: {
          breed: 'Pug',
          origin: 'China',
          behavior: 'Charming, playful, affectionate',
          diet: 'Low-calorie dog food',
          feeding: 'Controlled portions to maintain healthy weight.',
        },
      },
      {
        id: 4,
        name: 'German Shepherd',
        image: Dog4,
        price: 10000,
        discount: 0.2,
        desc: {
          breed: 'German Shepherd',
          origin: 'Germany, late 19th century',
          behavior: 'Loyal, intelligent, protective',
          diet: 'High-protein dog food',
          feeding: 'Feed twice daily with lean protein sources.',
        },
      },
      {
        id: 5,
        name: 'Golden Retriever',
        image: Dog5,
        price: 9000,
        discount: 0.05,
        desc: {
          breed: 'Golden Retriever',
          origin: 'Scotland',
          behavior: 'Gentle, friendly, kind temperament',
          diet: 'Balanced dog food, fish oils',
          feeding: 'Include omega-3 supplements for coat health.',
        },
      },
      {
        id: 6,
        name: 'Husky',
        image: Dog6,
        price: 12000,
        discount: 0.1,
        desc: {
          breed: 'Siberian Husky',
          origin: 'Siberia',
          behavior: 'Energetic, enduring, friendly',
          diet: 'High-protein dog food',
          feeding: 'Feed nutrient-dense kibble, avoid fatty foods.',
        },
      },
    ],
    Cats: [
      {
        id: 7,
        name: 'Persian Cat',
        image: Cat1,
        price: 5000,
        discount: 0.1,
        desc: {
          breed: 'Persian',
          origin: 'Persia (Iran)',
          behavior: 'Elegant, calm, loves to relax',
          diet: 'Premium cat food, wet food',
          feeding: 'Wet food daily to support hydration.',
        },
      },
      {
        id: 8,
        name: 'Siamese Cat',
        image: Cat2,
        price: 4500,
        discount: 0.0,
        desc: {
          breed: 'Siamese',
          origin: 'Thailand',
          behavior: 'Talkative, social, affectionate',
          diet: 'High-protein cat food',
          feeding: 'Feed small portions multiple times daily.',
        },
      },
      {
        id: 9,
        name: 'British Shorthair',
        image: Cat3,
        price: 5500,
        discount: 0.15,
        desc: {
          breed: 'British Shorthair',
          origin: 'United Kingdom',
          behavior: 'Cuddly, easygoing, affectionate',
          diet: 'Balanced cat food',
          feeding: 'Dry kibble with occasional wet food.',
        },
      },
      {
        id: 10,
        name: 'Bengal Cat',
        image: Cat4,
        price: 7000,
        discount: 0.25,
        desc: {
          breed: 'Bengal',
          origin: 'USA',
          behavior: 'Wild-looking, affectionate, energetic',
          diet: 'High-protein, grain-free food',
          feeding: 'Raw or wet food for energy needs.',
        },
      },
      {
        id: 11,
        name: 'Maine Coon',
        image: Cat5,
        price: 8000,
        discount: 0.0,
        desc: {
          breed: 'Maine Coon',
          origin: 'Maine, USA',
          behavior: 'Friendly, sociable, gentle giant',
          diet: 'High-quality cat food',
          feeding: 'Large portions to match their size.',
        },
      },
      {
        id: 12,
        name: 'Sphynx Cat',
        image: Cat6,
        price: 6000,
        discount: 0.1,
        desc: {
          breed: 'Sphynx',
          origin: 'Canada',
          behavior: 'Affectionate, warm-seeking, playful',
          diet: 'High-calorie cat food',
          feeding: 'Nutrient-rich food to support metabolism.',
        },
      },
    ],
    Rabbits: [
      {
        id: 13,
        name: 'Mini Lop',
        image: Rabbit1,
        price: 2000,
        discount: 0.1,
        desc: {
          breed: 'Mini Lop',
          origin: 'Netherlands',
          behavior: 'Gentle, cuddly, compact',
          diet: 'Hay, pellets, fresh veggies',
          feeding: 'Unlimited hay, limited pellets daily.',
        },
      },
      {
        id: 14,
        name: 'Dutch Rabbit',
        image: Rabbit2,
        price: 1800,
        discount: 0.0,
        desc: {
          breed: 'Dutch',
          origin: 'Netherlands',
          behavior: 'Friendly, sweet, calm',
          diet: 'Hay, greens, pellets',
          feeding: 'Fresh greens like romaine daily.',
        },
      },
      {
        id: 15,
        name: 'Lionhead Rabbit',
        image: Rabbit3,
        price: 2500,
        discount: 0.15,
        desc: {
          breed: 'Lionhead',
          origin: 'Belgium',
          behavior: 'Lively, social, playful',
          diet: 'Hay, veggies, pellets',
          feeding: 'Timothy hay with carrot treats.',
        },
      },
      {
        id: 16,
        name: 'Rex Rabbit',
        image: Rabbit4,
        price: 2200,
        discount: 0.0,
        desc: {
          breed: 'Rex',
          origin: 'France',
          behavior: 'Calm, gentle, velvety fur',
          diet: 'Hay, pellets, greens',
          feeding: 'High-fiber hay, avoid sugary treats.',
        },
      },
      {
        id: 17,
        name: 'Harlequin Rabbit',
        image: Rabbit5,
        price: 2300,
        discount: 0.2,
        desc: {
          breed: 'Harlequin',
          origin: 'France',
          behavior: 'Playful, energetic, colorful',
          diet: 'Hay, veggies, pellets',
          feeding: 'Diverse greens for nutrition.',
        },
      },
      {
        id: 18,
        name: 'Netherland Dwarf',
        image: Rabbit6,
        price: 2400,
        discount: 0.1,
        desc: {
          breed: 'Netherland Dwarf',
          origin: 'Netherlands',
          behavior: 'Bold, compact, full of personality',
          diet: 'Hay, pellets, veggies',
          feeding: 'Limited pellets, abundant hay.',
        },
      },
    ],
    Tortoise: [
      {
        id: 19,
        name: 'Indian Star Tortoise',
        image: Tortoise1,
        price: 4000,
        discount: 0.05,
        desc: {
          breed: 'Indian Star',
          origin: 'India, Sri Lanka',
          behavior: 'Docile, calm, sun-loving',
          diet: 'Leafy greens, grasses',
          feeding: 'Kale, dandelion greens daily.',
        },
      },
      {
        id: 20,
        name: 'Sulcata Tortoise',
        image: Tortoise2,
        price: 6000,
        discount: 0.15,
        desc: {
          breed: 'Sulcata',
          origin: 'Sahel, Africa',
          behavior: 'Hardy, long-living, social',
          diet: 'Grasses, hay, veggies',
          feeding: 'High-fiber grasses, minimal fruit.',
        },
      },
      {
        id: 21,
        name: 'Greek Tortoise',
        image: Tortoise3,
        price: 3500,
        discount: 0.0,
        desc: {
          breed: 'Greek',
          origin: 'Southern Europe, North Africa',
          behavior: 'Sun-loving, calm, hardy',
          diet: 'Leafy greens, weeds',
          feeding: 'Mixed greens, avoid spinach.',
        },
      },
      {
        id: 22,
        name: 'Leopard Tortoise',
        image: Tortoise4,
        price: 5000,
        discount: 0.1,
        desc: {
          breed: 'Leopard',
          origin: 'East Africa',
          behavior: 'Gentle, spotted, calm',
          diet: 'Grasses, succulents',
          feeding: 'Grass-based diet, occasional cactus.',
        },
      },
      {
        id: 23,
        name: 'Red-Footed Tortoise',
        image: Tortoise5,
        price: 4500,
        discount: 0.0,
        desc: {
          breed: 'Red-Footed',
          origin: 'South America',
          behavior: 'Friendly, sociable, colorful',
          diet: 'Greens, fruits, protein',
          feeding: 'Mixed greens with occasional fruit.',
        },
      },
      {
        id: 24,
        name: 'Hermann’s Tortoise',
        image: Tortoise6,
        price: 3800,
        discount: 0.05,
        desc: {
          breed: 'Hermann’s',
          origin: 'Southern Europe',
          behavior: 'Easygoing, long-living, calm',
          diet: 'Greens, weeds, grasses',
          feeding: 'Leafy greens, minimal fruit.',
        },
      },
    ],
    'Aquarium Fish': [
      {
        id: 25,
        name: 'Goldfish',
        image: Fish1,
        price: 500,
        discount: 0.0,
        desc: {
          breed: 'Goldfish',
          origin: 'East Asia',
          behavior: 'Calming, hardy, social',
          diet: 'Flake food, pellets',
          feeding: 'Feed small amounts twice daily.',
        },
      },
      {
        id: 26,
        name: 'Betta Fish',
        image: Fish2,
        price: 800,
        discount: 0.2,
        desc: {
          breed: 'Betta',
          origin: 'Southeast Asia',
          behavior: 'Bold, colorful, territorial',
          diet: 'Betta pellets, frozen food',
          feeding: 'High-protein pellets, avoid overfeeding.',
        },
      },
      {
        id: 27,
        name: 'Angelfish',
        image: Fish3,
        price: 1000,
        discount: 0.15,
        desc: {
          breed: 'Angelfish',
          origin: 'Amazon River, South America',
          behavior: 'Graceful, elegant, social',
          diet: 'Flakes, live food',
          feeding: 'Varied diet with brine shrimp.',
        },
      },
      {
        id: 28,
        name: 'Tetra Fish',
        image: Fish4,
        price: 600,
        discount: 0.0,
        desc: {
          breed: 'Tetra',
          origin: 'South America',
          behavior: 'Schooling, shiny, peaceful',
          diet: 'Flakes, small pellets',
          feeding: 'Feed flakes in small amounts.',
        },
      },
      {
        id: 29,
        name: 'Guppy',
        image: Fish5,
        price: 400,
        discount: 0.1,
        desc: {
          breed: 'Guppy',
          origin: 'Northeast South America',
          behavior: 'Colorful, active, easygoing',
          diet: 'Flakes, live food',
          feeding: 'Flakes with occasional live food.',
        },
      },
      {
        id: 30,
        name: 'Clownfish',
        image: Fish6,
        price: 700,
        discount: 0.05,
        desc: {
          breed: 'Clownfish',
          origin: 'Pacific/Indian Oceans',
          behavior: 'Playful, social, anemone-loving',
          diet: 'Flakes, pellets, frozen food',
          feeding: 'Small portions of varied diet.',
        },
      },
    ],
  };

  const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];

  const defaultProducts = [
    categoryProducts.Dogs[0], // Labrador Retriever
    categoryProducts.Dogs[1], // Beagle
    categoryProducts.Cats[0], // Persian Cat
    categoryProducts.Cats[1], // Siamese Cat
    categoryProducts.Rabbits[0], // Mini Lop
    categoryProducts.Rabbits[1], // Dutch Rabbit
    categoryProducts.Tortoise[0], // Indian Star Tortoise
    categoryProducts.Tortoise[1], // Sulcata Tortoise
    categoryProducts['Aquarium Fish'][0], // Goldfish
    categoryProducts['Aquarium Fish'][1], // Betta Fish
  ];

  const filteredProducts = selectedCategory ? categoryProducts[selectedCategory] : defaultProducts;

  const addToCart = (product) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      setShowLoginPrompt(true);
      return;
    }
    if (!product) {
      setShowNoProductMessage(true);
      setTimeout(() => setShowNoProductMessage(false), 3000);
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      setShowLoginPrompt(true);
      return;
    }
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const finalizePurchase = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      setShowLoginPrompt(true);
      return;
    }
    setIsPurchaseFinalized(true);
    setCart([]);
    setShowCart(false);
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

  const closeCart = () => {
    setShowCart(false);
    setIsPurchaseFinalized(false);
  };

  const closeProductDetail = () => setSelectedProduct(null);

  const closeNoProductMessage = () => setShowNoProductMessage(false);

  const closeLoginPrompt = () => setShowLoginPrompt(false);

  // Calculate subtotal and total with product-specific discounts
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = cart.reduce((sum, item) => sum + (item.price * item.quantity * (item.discount || 0)), 0);
  const total = subtotal - discount;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setShowCart(true)} />

      <div className="py-20 px-6 bg-[#f0e6dc] animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">
          Our Products
        </h2>
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
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white w-[260px] rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="w-full h-[200px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#5C4033] mb-1">{product.name}</h3>
                  <p className="text-[#5C4033] font-semibold mt-2">₹{product.price.toLocaleString()}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="mt-3 bg-[#5C4033] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3A2A1F]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Please select a category to view products.</p>
        )}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl w-full max-w-2xl h-[80vh] shadow-2xl relative overflow-y-auto">
              <button
                onClick={closeCart}
                className="absolute top-4 right-4 text-[#5C4033] text-3xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
                aria-label="Close cart"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-[#5C4033] mb-6 border-b-2 border-[#F4A261] pb-2 text-center">Your Cart</h2>
              {isPurchaseFinalized ? (
                <div className="text-center">
                  <p className="text-green-600 font-semibold text-lg mb-4">Purchase Finalized Successfully!</p>
                  <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
                  <button
                    onClick={closeCart}
                    className="w-full bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white py-3 rounded-lg font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
                    aria-label="Close cart"
                  >
                    Close
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <p className="text-gray-600 text-center text-lg">No items in cart.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl shadow-md">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div>
                          <h3 className="text-lg font-semibold text-[#5C4033]">{item.name}</h3>
                          <p className="text-[#5C4033] text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-[#5C4033] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-[#3A2A1F]"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-[#5C4033] font-semibold text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-[#5C4033] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-[#3A2A1F]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 p-4 bg-gray-100 rounded-xl">
                    <p className="text-[#5C4033] text-lg font-medium mb-2">Subtotal: ₹{subtotal.toLocaleString()}</p>
                    <p className="text-[#5C4033] text-lg font-medium mb-2">Discount: ₹{discount.toLocaleString()}</p>
                    <p className="text-[#5C4033] font-bold text-xl mb-4">Total: ₹{total.toLocaleString()}</p>
                    <button
                      onClick={finalizePurchase}
                      className="w-full bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] py-3 rounded-lg font-medium text-lg hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50 flex items-center justify-center"
                      aria-label="Pay with eSewa"
                    >
                      <img src={EsewaImage} alt="eSewa" className="h-6 mr-2" />
                      Pay with eSewa
                    </button>
                    <div className="mt-3 text-center text-gray-500 text-base">
                      <p>Secured by eSewa</p>
                    </div>
                    <button
                      onClick={closeCart}
                      className="w-full mt-4 bg-gray-200 text-[#5C4033] py-2 rounded-lg font-medium text-lg hover:bg-gray-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300/50"
                      aria-label="Close cart"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
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
                <div className="text-gray-600 text-base mb-4">
                  <p><strong>Name:</strong> {selectedProduct.name}</p>
                  <p><strong>Breed:</strong> {selectedProduct.desc.breed}</p>
                  <p><strong>Origin:</strong> {selectedProduct.desc.origin}</p>
                  <p><strong>Behavior:</strong> {selectedProduct.desc.behavior}</p>
                  <p><strong>Diet:</strong> {selectedProduct.desc.diet}</p>
                  <p><strong>Feeding Suggestion:</strong> {selectedProduct.desc.feeding}</p>
                </div>
                <p className="text-[#5C4033] font-semibold text-lg mb-3">₹{selectedProduct.price.toLocaleString()}</p>
                <p className="text-gray-500 text-sm mb-4">Contact for shipping details</p>
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
        {showNoProductMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white p-6 rounded-lg text-center shadow-2xl max-w-md relative">
              <button
                onClick={closeNoProductMessage}
                className="absolute top-2 right-2 text-[#5C4033] text-2xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
                aria-label="Close message"
              >
                ✕
              </button>
              <p className="text-[#5C4033] font-semibold text-lg mb-2">Oopsie Daisy! 🐾</p>
              <p className="text-gray-600">It looks like no furry friend was selected yet! Pick a cute pet to add to your cart. 😺</p>
              <button
                onClick={closeNoProductMessage}
                className="mt-4 bg-[#F4A261] text-[#5C4033] px-4 py-2 rounded-full hover:bg-[#e6953f] transition duration-300"
                aria-label="Close message"
              >
                Okay!
              </button>
            </div>
          </div>
        )}
        {showLoginPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white p-6 rounded-lg text-center shadow-2xl max-w-md relative">
              <button
                onClick={closeLoginPrompt}
                className="absolute top-2 right-2 text-[#5C4033] text-2xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
                aria-label="Close message"
              >
                ✕
              </button>
              <p className="text-[#5C4033] font-semibold text-lg mb-2">Please Log In or Register! 🐶</p>
              <p className="text-gray-600">You need to be logged in to purchase or add products to your cart. Please log in or register to continue.</p>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={() => {
                    closeLoginPrompt();
                    navigate('/login');
                  }}
                  className="bg-[#5C4033] text-white px-4 py-2 rounded-full hover:bg-[#3A2A1F] transition duration-300"
                  aria-label="Go to login"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    closeLoginPrompt();
                    navigate('/register');
                  }}
                  className="bg-[#F4A261] text-[#5C4033] px-4 py-2 rounded-full hover:bg-[#e6953f] transition duration-300"
                  aria-label="Go to register"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;