import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';

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
  const [showAddMessage, setShowAddMessage] = useState(false);

  const categoryProducts = {
    Dogs: [
      { id: 1, name: 'Labrador Retriever', image: Dog1, price: '₹8000', desc: 'Friendly, energetic with a glossy black coat, great with families.  Originating from Newfoundland, Canada, this breed is known for its versatility as a working and family dog.' },
      { id: 2, name: 'Beagle', image: Dog2, price: '₹6000', desc: 'Playful, loving with a tri-color coat, loves company.  This English breed, from the 13th century, excels as a scent hound with a cheerful disposition.' },
      { id: 3, name: 'Pug', image: Dog3, price: '₹5000', desc: 'Charming with a wrinkled face and fawn coat.  Originating from China, this ancient breed is known for its playful and affectionate nature.' },
      { id: 4, name: 'German Shepherd', image: Dog4, price: '₹10000', desc: 'Loyal, intelligent with a tan-and-black coat, protective.  Bred in Germany in the late 19th century, this versatile breed is ideal for work and guarding.' },
      { id: 5, name: 'Golden Retriever', image: Dog5, price: '₹9000', desc: 'Gentle with a lush golden coat, friendly demeanor.  Hailing from Scotland, this breed was developed as a gundog, known for its kind temperament and soft expression.' },
      { id: 6, name: 'Husky', image: Dog6, price: '₹12000', desc: 'Stunning with thick white-and-gray fur, perfect for cold climates.  Originating from Siberia, the Siberian Husky is a working breed known for its endurance and striking blue eyes.' },
    ],
    Cats: [
      { id: 6, name: 'Persian Cat', image: Cat1, price: '₹5000', desc: 'Elegant with a long, creamy-white coat, loves to relax.  This long-haired breed from Persia (modern-day Iran) is cherished for its luxurious coat and calm demeanor.' },
      { id: 7, name: 'Siamese Cat', image: Cat2, price: '₹4500', desc: 'Talkative with a sleek seal-point coat and blue eyes.  Originating from Thailand, this breed is known for its social and vocal personality.' },
      { id: 8, name: 'British Shorthair', image: Cat3, price: '₹5500', desc: 'Chubby cheeks with a plush blue-gray coat, super cuddly.  This sturdy British breed, with roots in the UK, is famous for its easygoing nature.' },
      { id: 9, name: 'Bengal Cat', image: Cat4, price: '₹7000', desc: 'Wild-looking with a spotted golden coat, affectionate.  Developed in the USA, this breed combines the Asian Leopard Cat lineage with domestic cats.' },
      { id: 10, name: 'Maine Coon', image: Cat5, price: '₹8000', desc: 'Big with a bushy tabby coat, friendly giant.  Originating from Maine, USA, this natural breed is known for its large size and sociable behavior.' },
      { id: 11, name: 'Sphynx Cat', image: Cat6, price: '₹6000', desc: 'Hairless with wrinkled skin and large ears, loves warmth.  Bred in Canada, this unique breed is recognized for its affectionate nature.' },
    ],
    Rabbits: [
      { id: 11, name: 'Mini Lop', image: Rabbit1, price: '₹2000', desc: 'Tiny with floppy ears and a soft brown coat.  Originating from the Netherlands, this dwarf breed is loved for its compact size and gentle temperament.' },
      { id: 12, name: 'Dutch Rabbit', image: Rabbit2, price: '₹1800', desc: 'Black-and-white with a compact body, sweetheart.  This old breed from the Netherlands features a distinctive color pattern and friendly disposition.' },
      { id: 13, name: 'Lionhead Rabbit', image: Rabbit3, price: '₹2500', desc: 'Fluffy mane with a gray coat, like a lion!  Developed in Belgium, this breed is known for its lively, social personality.' },
      { id: 14, name: 'Rex Rabbit', image: Rabbit4, price: '₹2200', desc: 'Velvety gray fur with upright ears, calm nature.  Originating from France, this breed is prized for its plush, dense coat.' },
      { id: 15, name: 'Harlequin Rabbit', image: Rabbit5, price: '₹2300', desc: 'Fun orange-and-black patterned coat, playful vibes.  Bred in France, this striking breed features an energetic character.' },
      { id: 16, name: 'Netherland Dwarf', image: Rabbit6, price: '₹2400', desc: 'Tiny with a white coat and bright eyes, full of personality.  Originating from the Netherlands, this smallest rabbit breed is bold and compact.' },
    ],
    Tortoise: [
      { id: 16, name: 'Indian Star Tortoise', image: Tortoise1, price: '₹4000', desc: 'Distinctive star-patterned shell, docile nature.  Native to India and Sri Lanka, this species thrives in dry habitats with its unique markings.' },
      { id: 17, name: 'Sulcata Tortoise', image: Tortoise2, price: '₹6000', desc: 'Large with a rugged brown shell, lives long.  Originating from the Sahel region of Africa, this hardy breed can live over 70 years.' },
      { id: 18, name: 'Greek Tortoise', image: Tortoise3, price: '₹3500', desc: 'Small with a dark shell and yellow markings, loves sun.  Native to Southern Europe and North Africa, this species enjoys warm, arid environments.' },
      { id: 19, name: 'Leopard Tortoise', image: Tortoise4, price: '₹5000', desc: 'Spotted yellow-and-black shell, gentle behavior.  Hailing from East Africa, this breed is known for its striking leopard-like markings.' },
      { id: 20, name: 'Red-Footed Tortoise', image: Tortoise5, price: '₹4500', desc: 'Colorful red legs with a dark shell, friendly nature.  Originating from South America, this species has a sociable temperament.' },
      { id: 21, name: 'Hermann’s Tortoise', image: Tortoise6, price: '₹3800', desc: 'Small with a yellowish shell and dark patches, easy to care for.  Native to Southern Europe, this Mediterranean breed is known for its longevity.' },
    ],
    'Aquarium Fish': [
      { id: 21, name: 'Goldfish', image: Fish1, price: '₹500', desc: 'Classic with a bright orange body, calming.  Originating from East Asia, this Carassius auratus breed is a popular aquarium choice.' },
      { id: 22, name: 'Betta Fish', image: Fish2, price: '₹800', desc: 'Colorful with flowing red fins, bold attitude.  Native to Southeast Asia, this Siamese fighting fish breed stands out with its vibrant hues.' },
      { id: 23, name: 'Angelfish', image: Fish3, price: '₹1000', desc: 'Graceful with vertical black stripes on a silver body.  Hailing from the Amazon River basin, this cichlid breed adds elegance to any tank.' },
      { id: 24, name: 'Tetra Fish', image: Fish4, price: '₹600', desc: 'Small with a shiny silver body, loves groups.  Originating from South America, this characin breed thrives in schools with a reflective sheen.' },
      { id: 25, name: 'Guppy', image: Fish5, price: '₹400', desc: 'Tiny with a multicolored tail, dazzling in color.  Native to Northeast South America, this Poecilia reticulata breed is easy to care for.' },
      { id: 26, name: 'Clownfish', image: Fish6, price: '₹700', desc: 'Bright orange with black-and-white stripes, playful nature.  Originating from the Pacific and Indian Oceans, this Amphiprion breed is famous for its anemone symbiosis.' },
    ],
  };

  const categories = ['Dogs', 'Cats', 'Rabbits', 'Tortoise', 'Aquarium Fish'];

  // Default products to display before category selection (2-3 rows, ~6-10 products)
  const defaultProducts = [
    categoryProducts.Dogs[0],    // Labrador Retriever
    categoryProducts.Dogs[1],    // Beagle
    categoryProducts.Cats[0],    // Persian Cat
    categoryProducts.Cats[1],    // Siamese Cat
    categoryProducts.Rabbits[0], // Mini Lop
    categoryProducts.Rabbits[1], // Dutch Rabbit
    categoryProducts.Tortoise[0], // Indian Star Tortoise
    categoryProducts.Tortoise[1], // Sulcata Tortoise
    categoryProducts['Aquarium Fish'][0], // Goldfish
    categoryProducts['Aquarium Fish'][1], // Betta Fish
  ];

  const filteredProducts = selectedCategory ? categoryProducts[selectedCategory] : defaultProducts;

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
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer w-full max-w-xs mx-auto"
              >
                <div className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#5C4033] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 text-justify">{product.desc}</p>
                  <p className="text-[#5C4033] font-medium mb-3">{product.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="w-full bg-[#5C4033] text-white px-4 py-2 rounded-full hover:bg-[#4a332a] transition text-sm"
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