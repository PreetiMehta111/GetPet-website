import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';

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

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showAddMessage, setShowAddMessage] = useState(false);

  const categoryProducts = {
    Dogs: [
      { id: 1, name: 'Labrador Retriever', image: Dog1, price: '₹8000', desc: 'Friendly, energetic, and great with families.' },
      { id: 2, name: 'Beagle', image: Dog2, price: '₹6000', desc: 'Playful, loving, and loves company.' },
      { id: 3, name: 'Pug', image: Dog3, price: '₹5000', desc: 'Charming companion with a wrinkled face.' },
      { id: 4, name: 'German Shepherd', image: Dog4, price: '₹10000', desc: 'Loyal, intelligent, and protective.' },
      { id: 5, name: 'Golden Retriever', image: Dog5, price: '₹9000', desc: 'Gentle and friendly with a golden coat.' },
    ],
    Cats: [
      { id: 6, name: 'Persian Cat', image: Cat1, price: '₹5000', desc: 'Elegant, fluffy, and loves to relax.' },
      { id: 7, name: 'Siamese Cat', image: Cat2, price: '₹4500', desc: 'Talkative with striking blue eyes.' },
      { id: 8, name: 'British Shorthair', image: Cat3, price: '₹5500', desc: 'Chubby cheeks and super cuddly.' },
      { id: 9, name: 'Bengal Cat', image: Cat4, price: '₹7000', desc: 'Wild-looking but affectionate.' },
      { id: 10, name: 'Maine Coon', image: Cat5, price: '₹8000', desc: 'Big, fluffy, and friendly giant.' },
    ],
    Rabbits: [
      { id: 11, name: 'Mini Lop', image: Rabbit1, price: '₹2000', desc: 'Tiny and adorable with floppy ears.' },
      { id: 12, name: 'Dutch Rabbit', image: Rabbit2, price: '₹1800', desc: 'Black-and-white sweetheart.' },
      { id: 13, name: 'Lionhead Rabbit', image: Rabbit3, price: '₹2500', desc: 'Has a mane like a lion!' },
      { id: 14, name: 'Rex Rabbit', image: Rabbit4, price: '₹2200', desc: 'Velvety fur and a calm nature.' },
      { id: 15, name: 'Harlequin Rabbit', image: Rabbit5, price: '₹2300', desc: 'Fun colors and playful vibes.' },
    ],
    Tortoise: [
      { id: 16, name: 'Indian Star Tortoise', image: Tortoise1, price: '₹4000', desc: 'Distinctive patterns and docile nature.' },
      { id: 17, name: 'Sulcata Tortoise', image: Tortoise2, price: '₹6000', desc: 'Grows large and lives long.' },
      { id: 18, name: 'Greek Tortoise', image: Tortoise3, price: '₹3500', desc: 'Hardy and loves the sun.' },
      { id: 19, name: 'Leopard Tortoise', image: Tortoise4, price: '₹5000', desc: 'Spotted beauty with gentle behavior.' },
      { id: 20, name: 'Red-Footed Tortoise', image: Tortoise5, price: '₹4500', desc: 'Colorful legs and friendly nature.' },
    ],
    'Aquarium Fish': [
      { id: 21, name: 'Goldfish', image: Fish1, price: '₹500', desc: 'Classic, bright, and calming.' },
      { id: 22, name: 'Betta Fish', image: Fish2, price: '₹800', desc: 'Colorful fins and a bold attitude.' },
      { id: 23, name: 'Angelfish', image: Fish3, price: '₹1000', desc: 'Graceful swimmer with elegance.' },
      { id: 24, name: 'Tetra Fish', image: Fish4, price: '₹600', desc: 'Small, shiny, and loves groups.' },
      { id: 25, name: 'Guppy', image: Fish5, price: '₹400', desc: 'Tiny but dazzling in color.' },
    ],
  };

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

  return (
    <>
      <Header />

      <div className="py-16 px-6 bg-[#fcefe3] font-sans">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-[#5C4033] tracking-wide uppercase">
          Our Products
        </h2>
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`bg-[#5C4033] text-white px-6 py-3 rounded-full text-base font-medium transition ${
                selectedCategory === cat ? 'bg-[#4a332a]' : 'hover:bg-[#4a332a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="bg-white p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#5C4033]">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
                  <p className="text-[#5C4033] font-medium mt-2">{product.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="mt-3 w-full bg-[#5C4033] text-white px-5 py-2 rounded-full hover:bg-[#4a332a] transition text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {!selectedCategory && (
          <p className="text-center text-gray-600">Please select a category to view products.</p>
        )}
        {showAddMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
            This product has been added to cart
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Products;