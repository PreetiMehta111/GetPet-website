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

const HomePage = () => {
  const navigate = useNavigate();
  const sliderImages = [DogSlide, CatSlide, RabbitSlide, TortoiseSlide, FishSlide];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const petProducts = [
    { id: 1, name: 'Golden Retriever', image: DogProduct, rating: 4.9, desc: 'Friendly and loyal dog breed' },
    { id: 2, name: 'Persian Cat', image: CatProduct, rating: 4.8, desc: 'Calm and affectionate cat' },
    { id: 3, name: 'Mini Lop Rabbit', image: RabbitProduct, rating: 4.7, desc: 'Cute and cuddly rabbit' },
    { id: 4, name: 'Tortoise', image: TortoiseProduct, rating: 4.5, desc: 'Low-maintenance pet' },
    { id: 5, name: 'Aquarium Fish', image: FishProduct, rating: 4.6, desc: 'Colorful aquarium fish' },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#5C4033] text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-10 md:mb-0">
          <h3 className="text-[#F4A261] text-xl font-semibold mb-2">Best Pets</h3>
          <h1 className="text-5xl font-bold leading-tight mb-4">Make Your Life Better With a Pet!</h1>
          <p className="text-lg mb-6">
            Welcome to GetPet – where tails wag, whiskers twitch, and forever homes begin.
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
        <div className="rounded-full overflow-hidden border-4 border-[#F4A261] w-64 h-64 flex-shrink-0">
          <img
            src={sliderImages[currentSlide]}
            alt="Pet Slide"
            className="w-full h-full object-cover transition duration-500"
          />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-6 bg-purple-50 font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          Best Selling Pets
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {petProducts.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-xl border border-purple-200 shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#5C4033]">{pet.name}</h3>
                <p className="text-gray-600 text-sm mt-1 mb-2">{pet.desc}</p>
                <p className="text-yellow-500 font-bold">⭐ {pet.rating}</p>
                <button className="mt-4 w-full bg-[#5C4033] text-white py-2 rounded-lg hover:bg-[#4a332a] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pet Categories */}
      <section className="py-16 px-6 bg-white font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          Shop by Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'].map((cat) => (
            <button
              key={cat}
              className="bg-[#5C4033] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#4a332a] transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 bg-[#fcefe3] text-center font-sans">
        <h2 className="text-3xl font-extrabold text-[#5C4033] mb-4 tracking-wide">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
          At <span className="font-semibold text-[#5C4033]">GetPet</span>, we’re passionate about connecting pets with loving families.
          Whether you’re looking to adopt or buy, we provide trusted services with a focus on pet welfare and happiness.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          <strong className="text-[#5C4033]">Our Mission:</strong> To promote responsible pet ownership and make pet adoption and purchasing simple, safe, and joyful for everyone.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mt-2">
          <strong className="text-[#5C4033]">Why Choose Us?</strong> We offer verified listings, caring support, and a wide range of pets to help you find your perfect companion.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="mt-6 bg-[#5C4033] text-white px-6 py-2 rounded-lg hover:bg-[#4a332a] transition"
        >
          Learn More About Us
        </button>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
