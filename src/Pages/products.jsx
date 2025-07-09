import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

import DogProduct from '../assets/dog-product.jpg';
import CatProduct from '../assets/cat-product.jpg';
import RabbitProduct from '../assets/rabbit-product.jpg';
import TortoiseProduct from '../assets/tortoise-product.jpg';
import FishProduct from '../assets/fish-product.jpg';
import TeamWorking from '../assets/teamworking.avif';

const Products = () => {
  const petProducts = [
    { id: 1, name: 'Golden Retriever', image: DogProduct, rating: 4.9, desc: 'A loyal and energetic dog perfect for active families', price: 'USD 1,500', shipping: 'Ships in 1-2 weeks' },
    { id: 2, name: 'Persian Cat', image: CatProduct, rating: 4.8, desc: 'A plush, calm cat ideal for cozy indoor living', price: 'USD 800', shipping: 'Ships in 3-5 days' },
    { id: 3, name: 'Mini Lop Rabbit', image: RabbitProduct, rating: 4.7, desc: 'A fluffy rabbit great for gentle playtime', price: 'USD 600', shipping: 'Ships in 1 week' },
    { id: 4, name: 'Tortoise', image: TortoiseProduct, rating: 4.5, desc: 'A peaceful pet with a lifespan of decades', price: 'USD 400', shipping: 'Ships in 1-2 weeks' },
    { id: 5, name: 'Aquarium Fish', image: FishProduct, rating: 4.6, desc: 'Colorful fish to brighten any home aquarium', price: 'USD 300', shipping: 'Ships in 3-5 days' },
  ];

  const featuredProducts = [
    { id: 6, name: 'Tartarughe Decorative Plate', image: TeamWorking, price: 'USD 2,600', shipping: 'Ships in 1-2 weeks', rating: 4.8, desc: 'A unique plate showcasing tortoise-inspired art' },
    { id: 7, name: 'Pianeta Ceramic Vase', image: TortoiseProduct, price: 'USD 1,200', shipping: 'Ships in 3-5 days', rating: 4.7, desc: 'A sleek vase complementing pet-friendly interiors' },
    { id: 8, name: 'Campanino 900 Beechwood', image: RabbitProduct, price: 'USD 950', shipping: 'Ships in 1 week', rating: 4.9, desc: 'A sturdy chair for pet owners to unwind' },
  ];

  const allProducts = [...petProducts, ...featuredProducts];

  return (
    <>
      <Header />

      <div className="py-10 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-700 mb-8">
          Explore our wide range of pets and pet-related items available for adoption or purchase!
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition duration-300 h-80"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-[#5C4033]">{product.name}</h3>
                <p className="text-gray-600 text-xs mt-1 mb-1">{product.desc}</p>
                <p className="text-gray-800 font-medium">{product.price}</p>
                <p className="text-gray-500 text-xs">{product.shipping}</p>
                <p className="text-yellow-500 font-bold">⭐ {product.rating}</p>
                <button className="mt-2 w-full bg-[#5C4033] text-white py-1 rounded-lg hover:bg-[#4a332a] transition text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;