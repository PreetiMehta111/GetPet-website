// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Header from './header.jsx';
// import Footer from './footer.jsx';
// import EsewaImage from '../assets/esewaicon.png';

// import DogSlide from '../assets/dog-slide.jpg';
// import CatSlide from '../assets/cat-slide.jpg';
// import RabbitSlide from '../assets/rabbit-slide.jpg';
// import TortoiseSlide from '../assets/tortoise-slide.jpg';
// import FishSlide from '../assets/aquarium-slide.jpg';

// import DogProduct from '../assets/dog-product.jpg';
// import CatProduct from '../assets/cat-product.jpg';
// import RabbitProduct from '../assets/rabbit-product.jpg';
// import TortoiseProduct from '../assets/tortoise-product.jpg';
// import FishProduct from '../assets/fish-product.jpg';

// import Dog1 from '../assets/dog1.jpg';
// import Dog2 from '../assets/dog2.jpg';
// import Dog3 from '../assets/dog3.jpg';
// import Dog4 from '../assets/dog4.jpg';
// import Dog5 from '../assets/dog5.jpg';

// import Cat1 from '../assets/cat1.jpg';
// import Cat2 from '../assets/cat2.jpg';
// import Cat3 from '../assets/cat3.jpg';
// import Cat4 from '../assets/cat4.jpg';
// import Cat5 from '../assets/cat5.jpg';

// import Rabbit1 from '../assets/rabbit1.jpg';
// import Rabbit2 from '../assets/rabbit2.jpg';
// import Rabbit3 from '../assets/rabbit3.jpg';
// import Rabbit4 from '../assets/rabbit4.jpg';
// import Rabbit5 from '../assets/rabbit5.jpg';

// import Tortoise1 from '../assets/tortoise1.jpg';
// import Tortoise2 from '../assets/tortoise2.jpg';
// import Tortoise3 from '../assets/tortoise3.jpg';
// import Tortoise4 from '../assets/tortoise4.jpg';
// import Tortoise5 from '../assets/tortoise5.jpg';

// import Fish1 from '../assets/fish1.jpg';
// import Fish2 from '../assets/fish2.jpg';
// import Fish3 from '../assets/fish3.jpg';
// import Fish4 from '../assets/fish4.jpg';
// import Fish5 from '../assets/fish5.jpg';

// const Home = () => {
//   const navigate = useNavigate();
//   const sliderImages = [DogSlide, CatSlide, RabbitSlide, TortoiseSlide, FishSlide];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showCart, setShowCart] = useState(false);
//   const [isPurchaseFinalized, setIsPurchaseFinalized] = useState(false);
//   const [showNoProductMessage, setShowNoProductMessage] = useState(false);
//   const [showLoginPrompt, setShowLoginPrompt] = useState(false);

//   // Initialize cart from localStorage
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   // Update localStorage whenever cart changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const categoryProducts = {
//     Dogs: [
//       {
//         id: 1,
//         name: 'Labrador Retriever',
//         image: Dog1,
//         price: 8000,
//         discount: 0.1,
//         desc: {
//           breed: 'Labrador Retriever',
//           origin: 'Newfoundland, Canada',
//           behavior: 'Friendly, energetic, great with families',
//           diet: 'High-quality dog food, lean meats',
//           feeding: 'Feed premium kibble twice daily, avoid overfeeding.',
//         },
//       },
//       {
//         id: 2,
//         name: 'Beagle',
//         image: Dog2,
//         price: 6000,
//         discount: 0.15,
//         desc: {
//           breed: 'Beagle',
//           origin: 'England, 13th century',
//           behavior: 'Playful, loving, enjoys company',
//           diet: 'Balanced dog food, occasional treats',
//           feeding: 'Small, frequent meals to prevent bloating.',
//         },
//       },
//       {
//         id: 3,
//         name: 'Pug',
//         image: Dog3,
//         price: 5000,
//         discount: 0.0,
//         desc: {
//           breed: 'Pug',
//           origin: 'China',
//           behavior: 'Charming, playful, affectionate',
//           diet: 'Low-calorie dog food',
//           feeding: 'Controlled portions to maintain healthy weight.',
//         },
//       },
//       {
//         id: 4,
//         name: 'German Shepherd',
//         image: Dog4,
//         price: 10000,
//         discount: 0.2,
//         desc: {
//           breed: 'German Shepherd',
//           origin: 'Germany, late 19th century',
//           behavior: 'Loyal, intelligent, protective',
//           diet: 'High-protein dog food',
//           feeding: 'Feed twice daily with lean protein sources.',
//         },
//       },
//       {
//         id: 5,
//         name: 'Golden Retriever',
//         image: Dog5,
//         price: 9000,
//         discount: 0.05,
//         desc: {
//           breed: 'Golden Retriever',
//           origin: 'Scotland',
//           behavior: 'Gentle, friendly, kind temperament',
//           diet: 'Balanced dog food, fish oils',
//           feeding: 'Include omega-3 supplements for coat health.',
//         },
//       },
//     ],
//     Cats: [
//       {
//         id: 6,
//         name: 'Persian Cat',
//         image: Cat1,
//         price: 5000,
//         discount: 0.1,
//         desc: {
//           breed: 'Persian',
//           origin: 'Persia (Iran)',
//           behavior: 'Elegant, calm, loves to relax',
//           diet: 'Premium cat food, wet food',
//           feeding: 'Wet food daily to support hydration.',
//         },
//       },
//       {
//         id: 7,
//         name: 'Siamese Cat',
//         image: Cat2,
//         price: 4500,
//         discount: 0.0,
//         desc: {
//           breed: 'Siamese',
//           origin: 'Thailand',
//           behavior: 'Talkative, social, affectionate',
//           diet: 'High-protein cat food',
//           feeding: 'Feed small portions multiple times daily.',
//         },
//       },
//       {
//         id: 8,
//         name: 'British Shorthair',
//         image: Cat3,
//         price: 5500,
//         discount: 0.15,
//         desc: {
//           breed: 'British Shorthair',
//           origin: 'United Kingdom',
//           behavior: 'Cuddly, easygoing, affectionate',
//           diet: 'Balanced cat food',
//           feeding: 'Dry kibble with occasional wet food.',
//         },
//       },
//       {
//         id: 9,
//         name: 'Bengal Cat',
//         image: Cat4,
//         price: 7000,
//         discount: 0.25,
//         desc: {
//           breed: 'Bengal',
//           origin: 'USA',
//           behavior: 'Wild-looking, affectionate, energetic',
//           diet: 'High-protein, grain-free food',
//           feeding: 'Raw or wet food for energy needs.',
//         },
//       },
//       {
//         id: 10,
//         name: 'Maine Coon',
//         image: Cat5,
//         price: 8000,
//         discount: 0.0,
//         desc: {
//           breed: 'Maine Coon',
//           origin: 'Maine, USA',
//           behavior: 'Friendly, sociable, gentle giant',
//           diet: 'High-quality cat food',
//           feeding: 'Large portions to match their size.',
//         },
//       },
//     ],
//     Rabbits: [
//       {
//         id: 11,
//         name: 'Mini Lop',
//         image: Rabbit1,
//         price: 2000,
//         discount: 0.1,
//         desc: {
//           breed: 'Mini Lop',
//           origin: 'Netherlands',
//           behavior: 'Gentle, cuddly, compact',
//           diet: 'Hay, pellets, fresh veggies',
//           feeding: 'Unlimited hay, limited pellets daily.',
//         },
//       },
//       {
//         id: 12,
//         name: 'Dutch Rabbit',
//         image: Rabbit2,
//         price: 1800,
//         discount: 0.0,
//         desc: {
//           breed: 'Dutch',
//           origin: 'Netherlands',
//           behavior: 'Friendly, sweet, calm',
//           diet: 'Hay, greens, pellets',
//           feeding: 'Fresh greens like romaine daily.',
//         },
//       },
//       {
//         id: 13,
//         name: 'Lionhead Rabbit',
//         image: Rabbit3,
//         price: 2500,
//         discount: 0.15,
//         desc: {
//           breed: 'Lionhead',
//           origin: 'Belgium',
//           behavior: 'Lively, social, playful',
//           diet: 'Hay, veggies, pellets',
//           feeding: 'Timothy hay with carrot treats.',
//         },
//       },
//       {
//         id: 14,
//         name: 'Rex Rabbit',
//         image: Rabbit4,
//         price: 2200,
//         discount: 0.0,
//         desc: {
//           breed: 'Rex',
//           origin: 'France',
//           behavior: 'Calm, gentle, velvety fur',
//           diet: 'Hay, pellets, greens',
//           feeding: 'High-fiber hay, avoid sugary treats.',
//         },
//       },
//       {
//         id: 15,
//         name: 'Harlequin Rabbit',
//         image: Rabbit5,
//         price: 2300,
//         discount: 0.2,
//         desc: {
//           breed: 'Harlequin',
//           origin: 'France',
//           behavior: 'Playful, energetic, colorful',
//           diet: 'Hay, veggies, pellets',
//           feeding: 'Diverse greens for nutrition.',
//         },
//       },
//     ],
//     Tortoise: [
//       {
//         id: 16,
//         name: 'Indian Star Tortoise',
//         image: Tortoise1,
//         price: 4000,
//         discount: 0.05,
//         desc: {
//           breed: 'Indian Star',
//           origin: 'India, Sri Lanka',
//           behavior: 'Docile, calm, sun-loving',
//           diet: 'Leafy greens, grasses',
//           feeding: 'Kale, dandelion greens daily.',
//         },
//       },
//       {
//         id: 17,
//         name: 'Sulcata Tortoise',
//         image: Tortoise2,
//         price: 6000,
//         discount: 0.15,
//         desc: {
//           breed: 'Sulcata',
//           origin: 'Sahel, Africa',
//           behavior: 'Hardy, long-living, social',
//           diet: 'Grasses, hay, veggies',
//           feeding: 'High-fiber grasses, minimal fruit.',
//         },
//       },
//       {
//         id: 18,
//         name: 'Greek Tortoise',
//         image: Tortoise3,
//         price: 3500,
//         discount: 0.0,
//         desc: {
//           breed: 'Greek',
//           origin: 'Southern Europe, North Africa',
//           behavior: 'Sun-loving, calm, hardy',
//           diet: 'Leafy greens, weeds',
//           feeding: 'Mixed greens, avoid spinach.',
//         },
//       },
//       {
//         id: 19,
//         name: 'Leopard Tortoise',
//         image: Tortoise4,
//         price: 5000,
//         discount: 0.1,
//         desc: {
//           breed: 'Leopard',
//           origin: 'East Africa',
//           behavior: 'Gentle, spotted, calm',
//           diet: 'Grasses, succulents',
//           feeding: 'Grass-based diet, occasional cactus.',
//         },
//       },
//       {
//         id: 20,
//         name: 'Red-Footed Tortoise',
//         image: Tortoise5,
//         price: 4500,
//         discount: 0.0,
//         desc: {
//           breed: 'Red-Footed',
//           origin: 'South America',
//           behavior: 'Friendly, sociable, colorful',
//           diet: 'Greens, fruits, protein',
//           feeding: 'Mixed greens with occasional fruit.',
//         },
//       },
//     ],
//     'Aquarium Fish': [
//       {
//         id: 21,
//         name: 'Goldfish',
//         image: Fish1,
//         price: 500,
//         discount: 0.0,
//         desc: {
//           breed: 'Goldfish',
//           origin: 'East Asia',
//           behavior: 'Calming, hardy, social',
//           diet: 'Flake food, pellets',
//           feeding: 'Feed small amounts twice daily.',
//         },
//       },
//       {
//         id: 22,
//         name: 'Betta Fish',
//         image: Fish2,
//         price: 800,
//         discount: 0.2,
//         desc: {
//           breed: 'Betta',
//           origin: 'Southeast Asia',
//           behavior: 'Bold, colorful, territorial',
//           diet: 'Betta pellets, frozen food',
//           feeding: 'High-protein pellets, avoid overfeeding.',
//         },
//       },
//       {
//         id: 23,
//         name: 'Angelfish',
//         image: Fish3,
//         price: 1000,
//         discount: 0.15,
//         desc: {
//           breed: 'Angelfish',
//           origin: 'Amazon River, South America',
//           behavior: 'Graceful, elegant, social',
//           diet: 'Flakes, live food',
//           feeding: 'Varied diet with brine shrimp.',
//         },
//       },
//       {
//         id: 24,
//         name: 'Tetra Fish',
//         image: Fish4,
//         price: 600,
//         discount: 0.0,
//         desc: {
//           breed: 'Tetra',
//           origin: 'South America',
//           behavior: 'Schooling, shiny, peaceful',
//           diet: 'Flakes, small pellets',
//           feeding: 'Feed flakes in small amounts.',
//         },
//       },
//       {
//         id: 25,
//         name: 'Guppy',
//         image: Fish5,
//         price: 400,
//         discount: 0.1,
//         desc: {
//           breed: 'Guppy',
//           origin: 'Northeast South America',
//           behavior: 'Colorful, active, easygoing',
//           diet: 'Flakes, live food',
//           feeding: 'Flakes with occasional live food.',
//         },
//       },
//     ],
//   };

//   const featuredProducts = [
//     {
//       id: 31, // Changed from 26 to avoid conflict
//       name: 'Golden Retriever',
//       image: DogProduct,
//       price: 15000,
//       discount: 0.1,
//       desc: {
//         breed: 'Golden Retriever',
//         origin: 'Scotland',
//         behavior: 'Gentle, friendly, kind',
//         diet: 'Balanced dog food, fish oils',
//         feeding: 'Omega-3 rich kibble twice daily.',
//       },
//     },
//     {
//       id: 32, // Changed from 27
//       name: 'Tortoise',
//       image: TortoiseProduct,
//       price: 8000,
//       discount: 0.15,
//       desc: {
//         breed: 'Sulcata',
//         origin: 'Sahel, Africa',
//         behavior: 'Hardy, social, long-living',
//         diet: 'Grasses, leafy greens',
//         feeding: 'High-fiber grasses daily.',
//       },
//     },
//     {
//       id: 33, // Changed from 28
//       name: 'Rabbit',
//       image: RabbitProduct,
//       price: 10000,
//       discount: 0.0,
//       desc: {
//         breed: 'Lionhead',
//         origin: 'Belgium',
//         behavior: 'Lively, social, playful',
//         diet: 'Hay, pellets, veggies',
//         feeding: 'Timothy hay with fresh greens.',
//       },
//     },
//     {
//       id: 34, // Changed from 29
//       name: 'Betta Fish',
//       image: Fish2,
//       price: 800,
//       discount: 0.2,
//       desc: {
//         breed: 'Betta',
//         origin: 'Southeast Asia',
//         behavior: 'Bold, colorful, territorial',
//         diet: 'Betta pellets, frozen food',
//         feeding: 'High-protein pellets, avoid overfeeding.',
//       },
//     },
//   ];

//   const bestSellingPets = [
//     {
//       id: 1,
//       name: 'Labrador Retriever',
//       image: Dog1,
//       price: 8000,
//       discount: 0.1,
//       desc: {
//         breed: 'Labrador Retriever',
//         origin: 'Newfoundland, Canada',
//         behavior: 'Friendly, energetic, great with families',
//         diet: 'High-quality dog food, lean meats',
//         feeding: 'Feed premium kibble twice daily, avoid overfeeding.',
//       },
//     },
//     {
//       id: 6,
//       name: 'Persian Cat',
//       image: Cat1,
//       price: 5000,
//       discount: 0.1,
//       desc: {
//         breed: 'Persian',
//         origin: 'Persia (Iran)',
//         behavior: 'Elegant, calm, loves to relax',
//         diet: 'Premium cat food, wet food',
//         feeding: 'Wet food daily to support hydration.',
//       },
//     },
//     {
//       id: 11,
//       name: 'Mini Lop',
//       image: Rabbit1,
//       price: 2000,
//       discount: 0.1,
//       desc: {
//         breed: 'Mini Lop',
//         origin: 'Netherlands',
//         behavior: 'Gentle, cuddly, compact',
//         diet: 'Hay, pellets, fresh veggies',
//         feeding: 'Unlimited hay, limited pellets daily.',
//       },
//     },
//     {
//       id: 34, // Changed from 29 to match featuredProducts
//       name: 'Betta Fish',
//       image: Fish2,
//       price: 800,
//       discount: 0.2,
//       desc: {
//         breed: 'Betta',
//         origin: 'Southeast Asia',
//         behavior: 'Bold, colorful, territorial',
//         diet: 'Betta pellets, frozen food',
//         feeding: 'High-protein pellets, avoid overfeeding.',
//       },
//     },
//   ];

//   const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];

//   const filteredProducts = selectedCategory ? categoryProducts[selectedCategory] : [];

//   const addToCart = (product) => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (!currentUser) {
//       setShowLoginPrompt(true);
//       return;
//     }
//     if (!product) {
//       setShowNoProductMessage(true);
//       setTimeout(() => setShowNoProductMessage(false), 3000);
//       return;
//     }
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart;
//       }
//       const updatedCart = [...prevCart, { ...product, quantity: 1 }];
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const updateQuantity = (id, change) => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (!currentUser) {
//       setShowLoginPrompt(true);
//       return;
//     }
//     setCart((prevCart) => {
//       const updatedCart = prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
//         )
//         .filter((item) => item.quantity > 0);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const finalizePurchase = () => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (!currentUser) {
//       setShowLoginPrompt(true);
//       return;
//     }
//     setIsPurchaseFinalized(true);
//     setCart([]);
//     localStorage.setItem('cart', JSON.stringify([]));
//     setShowCart(false);
//   };

//   const cancelOrder = () => {
//     setCart([]);
//     localStorage.setItem('cart', JSON.stringify([]));
//     setShowCart(false);
//   };

//   const updateRating = (productId, rating) => {
//     setRatings((prevRatings) => ({
//       ...prevRatings,
//       [productId]: rating,
//     }));
//   };

//   const getRatingStars = (productId) => {
//     const userRating = ratings[productId] || 0;
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           onClick={() => updateRating(productId, i)}
//           className={`cursor-pointer text-2xl ${i <= userRating ? 'text-[#F4A261]' : 'text-gray-300'}`}
//           aria-label={`Rate ${i} star${i > 1 ? 's' : ''}`}
//         >
//           ★
//         </span>
//       );
//     }
//     return stars;
//   };

//   const closeProductDetail = () => setSelectedProduct(null);

//   const closeCart = () => {
//     setShowCart(false);
//     setIsPurchaseFinalized(false);
//   };

//   const closeNoProductMessage = () => setShowNoProductMessage(false);

//   const closeLoginPrompt = () => setShowLoginPrompt(false);

//   // Calculate subtotal and total with product-specific discounts
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const discount = cart.reduce((sum, item) => sum + (item.price * item.quantity * (item.discount || 0)), 0);
//   const total = subtotal - discount;

//   return (
//     <div style={{ fontFamily: 'Inter, sans-serif' }}>
//       <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setShowCart(true)} />

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-[#5C4033] to-[#3A2A1F] text-white py-28 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
//         <div className="max-w-xl z-10 animate-fade-in">
//           <h3 className="text-[#F4A261] text-2xl font-semibold mb-4 tracking-wide">Welcome to Pet Paradise</h3>
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">Find Your Furry Friend!</h1>
//           <p className="text-lg mb-8 text-gray-200 leading-relaxed">
//             At GetPet, we connect pet lovers with their perfect companions. Discover dogs, cats, rabbits, tortoises, and fish in a trusted, animal-loving community dedicated to happy homes.
//           </p>
//           <div className="flex gap-6">
//             <button
//               onClick={() => navigate('/register')}
//               className="bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//               aria-label="Adopt a pet now"
//             >
//               Adopt Now
//             </button>
//             <button
//               onClick={() => navigate('/contact')}
//               className="border-2 border-[#F4A261] text-[#F4A261] px-8 py-3 rounded-full font-semibold hover:bg-[#F4A261] hover:text-[#5C4033] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//               aria-label="Contact us"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//         <div className="flex-shrink-0 mt-10 md:mt-0 z-10">
//           <div className="rounded-full overflow-hidden border-8 border-[#F4A261] w-[30rem] h-[30rem] shadow-2xl">
//             <img
//               src={sliderImages[currentSlide]}
//               alt={`Pet Slide ${currentSlide + 1}`}
//               className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
//             />
//           </div>
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033]/80 to-transparent opacity-60"></div>
//       </section>

//       {/* Best Selling Pets */}
//       <section className="py-20 px-6 bg-gray-50 animate-fade-in">
//         <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">Best Selling Pets</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
//           {bestSellingPets.map((pet) => (
//             <div
//               key={pet.id}
//               className="bg-white w-[260px] rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
//               onClick={() => setSelectedProduct(pet)}
//             >
//               <div className="w-full h-[200px]">
//                 <img
//                   src={pet.image}
//                   alt={pet.name}
//                   className="w-full h-full object-cover rounded-t-2xl"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold text-[#5C4033] mb-1">{pet.name}</h3>
//                 <p className="text-[#5C4033] font-semibold mt-2">₹{pet.price.toLocaleString()}</p>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     addToCart(pet);
//                   }}
//                   className="mt-3 bg-[#5C4033] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3A2A1F]"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-20 px-6 bg-[#f9e4d4] animate-fade-in">
//         <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">Featured Pets</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
//           {featuredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white w-[260px] rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <div className="w-full h-[200px]">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover rounded-t-2xl"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold text-[#5C4033] mb-1">{product.name}</h3>
//                 <p className="text-[#5C4033] font-semibold mt-2">₹{product.price.toLocaleString()}</p>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     addToCart(product);
//                   }}
//                   className="mt-3 bg-[#5C4033] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3A2A1F]"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Product Detail Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
//           <div className="bg-white p-8 rounded-2xl w-full max-w-5xl flex relative shadow-2xl">
//             <button
//               onClick={closeProductDetail}
//               className="absolute top-4 right-4 text-[#5C4033] text-3xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//               aria-label="Close product details"
//             >
//               ✕
//             </button>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-1/2 h-[30rem] object-contain rounded-l-2xl"
//             />
//             <div className="w-1/2 p-8">
//               <h2 className="text-3xl font-bold text-[#5C4033] mb-3">{selectedProduct.name}</h2>
//               <div className="text-gray-600 text-base mb-4">
//                 <p><strong>Name:</strong> {selectedProduct.name}</p>
//                 <p><strong>Breed:</strong> {selectedProduct.desc.breed}</p>
//                 <p><strong>Origin:</strong> {selectedProduct.desc.origin}</p>
//                 <p><strong>Behavior:</strong> {selectedProduct.desc.behavior}</p>
//                 <p><strong>Diet:</strong> {selectedProduct.desc.diet}</p>
//                 <p><strong>Feeding Suggestion:</strong> {selectedProduct.desc.feeding}</p>
//               </div>
//               <p className="text-[#5C4033] font-semibold text-lg mb-3">₹{selectedProduct.price.toLocaleString()}</p>
//               <p className="text-gray-500 text-sm mb-4">Contact for shipping details</p>
//               <div className="mb-6">
//                 <span className="text-[#5C4033] font-medium mr-2">Rate this pet:</span>
//                 {getRatingStars(selectedProduct.id)}
//               </div>
//               <button
//                 onClick={() => addToCart(selectedProduct)}
//                 className="w-full bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white py-3 rounded-lg font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
//                 aria-label={`Add ${selectedProduct.name} to cart`}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
//           <div className="bg-white p-8 rounded-2xl w-full max-w-2xl h-[80vh] shadow-2xl relative overflow-y-auto">
//             <button
//               onClick={closeCart}
//               className="absolute top-4 right-4 text-[#5C4033] text-3xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//               aria-label="Close cart"
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-bold text-[#5C4033] mb-6 border-b-2 border-[#F4A261] pb-2 text-center">Your Cart</h2>
//             {isPurchaseFinalized ? (
//               <div className="text-center">
//                 <p className="text-green-600 font-semibold text-lg mb-4">Purchase Finalized Successfully!</p>
//                 <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
//                 <button
//                   onClick={closeCart}
//                   className="w-full bg-gradient-to-r from-[#5C4033] to-[#4a332a] text-white py-3 rounded-lg font-medium hover:from-[#4a332a] hover:to-[#3A2A1F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5C4033]/50"
//                   aria-label="Close cart"
//                 >
//                   Close
//                 </button>
//               </div>
//             ) : cart.length === 0 ? (
//               <p className="text-gray-600 text-center text-lg">No items in cart.</p>
//             ) : (
//               <div>
//                 {cart.map((item) => (
//                   <div key={item.id} className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl shadow-md">
//                     <div className="flex items-center space-x-4">
//                       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
//                       <div>
//                         <h3 className="text-lg font-semibold text-[#5C4033]">{item.name}</h3>
//                         <p className="text-[#5C4033] text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <button
//                         onClick={() => updateQuantity(item.id, -1)}
//                         className="bg-[#5C4033] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-[#3A2A1F]"
//                         aria-label="Decrease quantity"
//                       >
//                         -
//                       </button>
//                       <span className="text-[#5C4033] font-semibold text-lg">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, 1)}
//                         className="bg-[#5C4033] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-[#3A2A1F]"
//                         aria-label="Increase quantity"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-6 p-4 bg-gray-100 rounded-xl">
//                   <p className="text-[#5C4033] text-lg font-medium mb-2">Subtotal: ₹{subtotal.toLocaleString()}</p>
//                   <p className="text-[#5C4033] text-lg font-medium mb-2">Discount: ₹{discount.toLocaleString()}</p>
//                   <p className="text-[#5C4033] font-bold text-xl mb-4">Total: ₹{total.toLocaleString()}</p>
//                   <div className="flex gap-4">
//                     <button
//                       onClick={finalizePurchase}
//                       className="flex-1 bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] py-3 rounded-lg font-medium text-lg hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50 flex items-center justify-center"
//                       aria-label="Pay with eSewa"
//                     >
//                       <img src={EsewaImage} alt="eSewa" className="h-6 mr-2" />
//                       Pay with eSewa
//                     </button>
//                     <button
//                       onClick={cancelOrder}
//                       className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50"
//                       aria-label="Cancel order"
//                     >
//                       Cancel Order
//                     </button>
//                   </div>
//                   <div className="mt-3 text-center text-gray-500 text-base">
//                     <p>Secured by eSewa</p>
//                   </div>
//                   <button
//                     onClick={closeCart}
//                     className="w-full mt-4 bg-gray-200 text-[#5C4033] py-2 rounded-lg font-medium text-lg hover:bg-gray-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300/50"
//                     aria-label="Close cart"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* No Product Selected Message */}
//       {showNoProductMessage && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
//           <div className="bg-white p-6 rounded-lg text-center shadow-2xl max-w-md relative">
//             <button
//               onClick={closeNoProductMessage}
//               className="absolute top-2 right-2 text-[#5C4033] text-2xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//               aria-label="Close message"
//             >
//               ✕
//             </button>
//             <p className="text-[#5C4033] font-semibold text-lg mb-2">Oopsie Daisy! 🐾</p>
//             <p className="text-gray-600">It looks like no furry friend was selected yet! Pick a cute pet to add to your cart. 😺</p>
//             <button
//               onClick={closeNoProductMessage}
//               className="mt-4 bg-[#F4A261] text-[#5C4033] px-4 py-2 rounded-full hover:bg-[#e6953f] transition duration-300"
//               aria-label="Close message"
//             >
//               Okay!
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Prompt Modal */}
//       {showLoginPrompt && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
//           <div className="bg-white p-6 rounded-lg text-center shadow-2xl max-w-md relative">
//             <button
//               onClick={closeLoginPrompt}
//               className="absolute top-2 right-2 text-[#5C4033] text-2xl font-bold hover:text-[#F4A261] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//               aria-label="Close message"
//             >
//               ✕
//             </button>
//             <p className="text-[#5C4033] font-semibold text-lg mb-2">Please Log In or Register! 🐶</p>
//             <p className="text-gray-600">You need to be logged in to purchase or add products to your cart. Please log in or register to continue.</p>
//             <div className="mt-4 flex justify-center gap-4">
//               <button
//                 onClick={() => {
//                   closeLoginPrompt();
//                   navigate('/login');
//                 }}
//                 className="bg-[#5C4033] text-white px-4 py-2 rounded-full hover:bg-[#3A2A1F] transition duration-300"
//                 aria-label="Go to login"
//               >
//                 Log In
//               </button>
//               <button
//                 onClick={() => {
//                   closeLoginPrompt();
//                   navigate('/register');
//                 }}
//                 className="bg-[#F4A261] text-[#5C4033] px-4 py-2 rounded-full hover:bg-[#e6953f] transition duration-300"
//                 aria-label="Go to register"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Shop by Categories */}
//       <section className="py-20 px-6 bg-[#f0e6dc] animate-fade-in">
//         <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">Shop by Categories</h2>
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
//               className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50 ${
//                 selectedCategory === cat
//                   ? 'bg-[#F4A261] text-[#5C4033] shadow-md'
//                   : 'bg-[#5C4033] text-white hover:bg-[#4a332a]'
//               }`}
//               aria-label={`Filter by ${cat}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//         {selectedCategory && (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white w-[260px] rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
//                 onClick={() => setSelectedProduct(product)}
//               >
//                 <div className="w-full h-[200px]">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover rounded-t-2xl"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-semibold text-[#5C4033] mb-1">{product.name}</h3>
//                   <p className="text-[#5C4033] font-semibold mt-2">₹{product.price.toLocaleString()}</p>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       addToCart(product);
//                     }}
//                     className="mt-3 bg-[#5C4033] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3A2A1F]"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* About Us */}
//       <section className="py-20 px-6 bg-[#e8d8c8] text-center animate-fade-in">
//         <h2 className="text-4xl font-bold text-[#5C4033] mb-8 uppercase tracking-tight">About Us</h2>
//         <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
//           At <span className="font-semibold text-[#5C4033]">GetPet</span>, we’re a community passionate about animal love and well-being. We connect pets with loving homes through seamless adoption, expert guidance, and curated pet products.
//         </p>
//         <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-base">
//           <strong className="text-[#5C4033]">Our Mission:</strong> Ensure every pet finds a loving home.
//         </p>
//         <p className="max-w-2xl mx-auto text-gray-600 mt-2 text-base">
//           <strong className="text-[#5C4033]">Why Choose Us?</strong> Verified breeders and compassionate support make us your top pet adoption destination.
//         </p>
//         <button
//           onClick={() => navigate('/about')}
//           className="mt-8 bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
//           aria-label="Learn more about GetPet"
//         >
//           Learn More
//         </button>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 px-6 bg-white animate-fade-in">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-[#5C4033] uppercase tracking-tight">What Our Customers Say</h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//           <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
//             <p className="text-gray-700 text-base">"Adopting my Golden Retriever was a dream with GetPet!"</p>
//             <p className="mt-3 text-[#5C4033] font-semibold">— Sarah Khatiwoda.</p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
//             <p className="text-gray-700 text-base">"Perfect Persian Cat with great support!"</p>
//             <p className="mt-3 text-[#5C4033] font-semibold">— John Dahal</p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
//             <p className="text-gray-700 text-base">"Amazing pet selection and advice!"</p>
//             <p className="mt-3 text-[#5C4033] font-semibold">— Emma Rai</p>
//           </div>
//         </div>
//       </section>

//       {/* Adoption Tips */}
//       <section className="py-20 px-6 bg-[#f0e6dc] animate-fade-in">
//         <h2 className="text-4xl font-bold text-center mb-12 text-[#5C4033] uppercase tracking-tight">Adoption Tips</h2>
//         <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h3 className="text-xl font-semibold text-[#5C4033] mb-2">Prepare Your Home</h3>
//             <p className="text-gray-600">Set up a safe space with food, water, and a cozy bed.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h3 className="text-xl font-semibold text-[#5C4033] mb-2">Understand Their Needs</h3>
//             <p className="text-gray-600">Research diet, exercise, and grooming requirements.</p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import EsewaImage from '../assets/esewaicon.png';

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
  const [showCart, setShowCart] = useState(false);
  const [isPurchaseFinalized, setIsPurchaseFinalized] = useState(false);
  const [showNoProductMessage, setShowNoProductMessage] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Initialize cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    ],
    Cats: [
      {
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
    ],
    Rabbits: [
      {
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
    ],
    Tortoise: [
      {
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
    ],
    'Aquarium Fish': [
      {
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
    ],
  };

  const featuredProducts = [
    {
      id: 31, // Changed from 26 to avoid conflict
      name: 'Golden Retriever',
      image: DogProduct,
      price: 15000,
      discount: 0.1,
      desc: {
        breed: 'Golden Retriever',
        origin: 'Scotland',
        behavior: 'Gentle, friendly, kind',
        diet: 'Balanced dog food, fish oils',
        feeding: 'Omega-3 rich kibble twice daily.',
      },
    },
    {
      id: 32, // Changed from 27
      name: 'Tortoise',
      image: TortoiseProduct,
      price: 8000,
      discount: 0.15,
      desc: {
        breed: 'Sulcata',
        origin: 'Sahel, Africa',
        behavior: 'Hardy, social, long-living',
        diet: 'Grasses, leafy greens',
        feeding: 'High-fiber grasses daily.',
      },
    },
    {
      id: 33, // Changed from 28
      name: 'Rabbit',
      image: RabbitProduct,
      price: 10000,
      discount: 0.0,
      desc: {
        breed: 'Lionhead',
        origin: 'Belgium',
        behavior: 'Lively, social, playful',
        diet: 'Hay, pellets, veggies',
        feeding: 'Timothy hay with fresh greens.',
      },
    },
    {
      id: 34, // Changed from 29
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
  ];

  const bestSellingPets = [
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
      id: 6,
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
      id: 11,
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
      id: 34, // Changed from 29 to match featuredProducts
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
  ];

  const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];

  const filteredProducts = selectedCategory ? categoryProducts[selectedCategory] : [];

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
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (id, change) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      setShowLoginPrompt(true);
      return;
    }
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const finalizePurchase = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      setShowLoginPrompt(true);
      return;
    }
    setIsPurchaseFinalized(true);
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    setShowCart(false);
  };

  const cancelOrder = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
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

  const closeProductDetail = () => setSelectedProduct(null);

  const closeCart = () => {
    setShowCart(false);
    setIsPurchaseFinalized(false);
  };

  const closeNoProductMessage = () => setShowNoProductMessage(false);

  const closeLoginPrompt = () => setShowLoginPrompt(false);

  // Calculate subtotal and total with product-specific discounts
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = cart.reduce((sum, item) => sum + (item.price * item.quantity * (item.discount || 0)), 0);
  const total = subtotal - discount;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setShowCart(true)} />

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
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">Best Selling Pets</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {bestSellingPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white w-[260px] rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
              onClick={() => setSelectedProduct(pet)}
            >
              <div className="w-full h-[200px]">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#5C4033] mb-1">{pet.name}</h3>
                <p className="text-[#5C4033] font-semibold mt-2">₹{pet.price.toLocaleString()}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(pet);
                  }}
                  className="mt-3 bg-[#5C4033] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3A2A1F]"
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
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">Featured Pets</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white w-[260px] rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
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

      {/* Cart Modal */}
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
                  <div className="flex gap-4">
                    <button
                      onClick={finalizePurchase}
                      className="flex-1 bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-[#5C4033] py-3 rounded-lg font-medium text-lg hover:from-[#e6953f] hover:to-[#d65f41] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50 flex items-center justify-center"
                      aria-label="Pay with eSewa"
                    >
                      <img src={EsewaImage} alt="eSewa" className="h-6 mr-2" />
                      Pay with eSewa
                    </button>
                    <button
                      onClick={cancelOrder}
                      className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                      aria-label="Cancel order"
                    >
                      Cancel Order
                    </button>
                  </div>
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

      {/* No Product Selected Message */}
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

      {/* Login Prompt Modal */}
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

      {/* Shop by Categories */}
      <section className="py-20 px-6 bg-[#f0e6dc] animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5C4033] uppercase tracking-tight">Shop by Categories</h2>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white w-[260px] rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-105 cursor-pointer mx-auto"
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
                    Add to cart
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
            <p className="mt-3 text-[#5C4033] font-semibold">— Sarah Khatiwoda.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 text-base">"Perfect Persian Cat with great support!"</p>
            <p className="mt-3 text-[#5C4033] font-semibold">— John Dahal</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 text-base">"Amazing pet selection and advice!"</p>
            <p className="mt-3 text-[#5C4033] font-semibold">— Emma Rai</p>
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